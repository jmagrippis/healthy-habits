import { useCallback, useEffect, useMemo, useState } from 'react'
import store from 'store2'
import moment from 'moment'

import { Activity, Status } from './types'
import { DATE_HASH_FORMAT, getCurrentDateHash } from './getCurrentDateHash'
import { pickRandomActivities } from './pickRandomActivities'

const LOCAL_STORAGE_KEY = 'activities'

export type ActivitiesMap = Partial<{ [dateHash: string]: Activity[] }>

export const useActivities = (
  currentDateHash = getCurrentDateHash()
): {
  activities?: Activity[]
  allActivities: ActivitiesMap
  toggleActivityComplete: (activity: Activity, dateHash?: string) => void
  consecutiveStreak: number
  totalActivitiesCompletedCount: number
  totalActivitiesCompletedTodayCount: number
} => {
  const [allActivities, setAllActivities] = useState<ActivitiesMap>(
    // state starts with whatever we have in local storage
    store.get(LOCAL_STORAGE_KEY, { [currentDateHash]: pickRandomActivities() })
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
        [currentDateHash]: pickRandomActivities(),
      })
    }
  }, [allActivities, currentDateHash])

  const toggleActivityComplete = useCallback(
    (activity, dateHash = currentDateHash) => {
      const activitiesOfDay = allActivities[dateHash]
      if (!activitiesOfDay) return

      setAllActivities({
        ...allActivities,
        [dateHash]: activitiesOfDay.map((a) =>
          a.id === activity.id
            ? {
                ...a,
                status:
                  activity.status === Status.Pending
                    ? Status.Done
                    : Status.Pending,
              }
            : a
        ),
      })
    },
    [allActivities, setAllActivities, currentDateHash]
  )

  const consecutiveStreak = useMemo(() => {
    let count = 0
    const anchor = moment(currentDateHash)

    let daysActivities = allActivities[anchor.format(DATE_HASH_FORMAT)]
    while (daysActivities) {
      if (daysActivities.every((activity) => activity.status !== Status.Done)) {
        break
      }
      count++
      anchor.subtract(1, 'day')
      daysActivities = allActivities[anchor.format(DATE_HASH_FORMAT)]
    }

    return count
  }, [allActivities, currentDateHash])

  const totalActivitiesCompletedCount = useMemo(
    () =>
      Object.values(allActivities).reduce(
        (totalCount, activitiesOfDay) =>
          activitiesOfDay
            ? activitiesOfDay.reduce(
                (count, activity) =>
                  activity.status === Status.Done ? count + 1 : count,
                totalCount
              )
            : totalCount,
        0
      ),
    [allActivities]
  )

  const todaysActivities = allActivities[currentDateHash]

  const totalActivitiesCompletedTodayCount = todaysActivities
    ? todaysActivities.reduce(
        (count, activity) =>
          activity.status === Status.Done ? count + 1 : count,
        0
      )
    : 0

  return {
    activities: todaysActivities,
    allActivities,
    toggleActivityComplete,
    consecutiveStreak,
    totalActivitiesCompletedCount,
    totalActivitiesCompletedTodayCount,
  }
}
