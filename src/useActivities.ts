import { useState, useEffect, useCallback, useMemo } from 'react'
import store from 'store2'
import moment from 'moment'

import { Activity, Status } from './types'
import { defaultActivities } from './defaultActivities'
import { getCurrentDateHash, DATE_HASH_FORMAT } from './getCurrentDateHash'

const LOCAL_STORAGE_KEY = 'activities'

type ActivitiesMap = { [dateHas: string]: Activity[] }

export const useActivities = (
  currentDateHash = getCurrentDateHash()
): {
  activities: Activity[]
  allActivities: ActivitiesMap
  completeActivity: (activity: Activity, dateHash?: string) => void
  consecutiveStreak: number
  totalActivitiesCompletedCount: number
} => {
  const [allActivities, setAllActivities] = useState<ActivitiesMap>(
    // state starts with whatever we have in local storage
    store.get(LOCAL_STORAGE_KEY, { [currentDateHash]: defaultActivities })
  )

  // every time `allActivities` changes, set it to local storage
  useEffect(() => {
    store.set(LOCAL_STORAGE_KEY, allActivities)
  }, [allActivities])

  // if there are no activities for the current date, add the default ones
  useEffect(() => {
    if (allActivities && !allActivities[currentDateHash]) {
      setAllActivities({
        ...allActivities,
        [currentDateHash]: defaultActivities
      })
    }
  }, [allActivities, currentDateHash])

  const completeActivity = useCallback(
    (activity, dateHash = currentDateHash) => {
      if (!allActivities[dateHash]) return

      setAllActivities({
        ...allActivities,
        [dateHash]: allActivities[dateHash].map((a) =>
          a.id === activity.id ? { ...a, status: Status.Done } : a
        )
      })
    },
    [allActivities, setAllActivities, currentDateHash]
  )

  const consecutiveStreak = useMemo(() => {
    let count = 0
    const anchor = moment(currentDateHash)

    while (allActivities[anchor.format(DATE_HASH_FORMAT)]) {
      count++
      anchor.subtract(1, 'day')
    }

    return count
  }, [allActivities, currentDateHash])

  const totalActivitiesCompletedCount = useMemo(
    () =>
      Object.values(allActivities).reduce(
        (totalCount, activitiesOfDay) =>
          activitiesOfDay.reduce(
            (count, activity) =>
              activity.status === Status.Done ? count + 1 : count,
            totalCount
          ),
        0
      ),
    [allActivities]
  )

  return {
    activities: allActivities[currentDateHash],
    allActivities,
    completeActivity,
    consecutiveStreak,
    totalActivitiesCompletedCount
  }
}
