import { useState, useEffect, useCallback, useMemo } from 'react'
import store from 'store2'

import { Activity, Status } from './types'
import { defaultActivities } from './defaultActivities'
import { getCurrentDateHash } from './getCurrentDateHash'

const LOCAL_STORAGE_KEY = 'activities'

type ActivitiesMap = { [dateHas: string]: Activity[] }

export const useActivities = (): {
  activities: ActivitiesMap
  completeActivity: (activity: Activity, dateHash?: string) => void
  consecutiveStreak: number
  totalActivitiesCompletedCount: number
} => {
  const currentDateHash = getCurrentDateHash()
  const [activities, setActivities] = useState<ActivitiesMap>(
    store.get(LOCAL_STORAGE_KEY, { [currentDateHash]: defaultActivities })
  )

  useEffect(() => {
    store.set(LOCAL_STORAGE_KEY, activities)
  }, [activities])

  useEffect(() => {
    if (activities && !activities[currentDateHash]) {
      console.log(currentDateHash)
      setActivities({
        ...activities,
        [currentDateHash]: defaultActivities
      })
    }
  }, [activities, currentDateHash])

  const completeActivity = useCallback(
    (activity, dateHash = getCurrentDateHash()) => {
      if (!activities[dateHash]) return

      setActivities({
        ...activities,
        [dateHash]: activities[dateHash].map((a) =>
          a.id === activity.id ? { ...a, status: Status.Done } : a
        )
      })
    },
    [activities, setActivities]
  )

  const totalActivitiesCompletedCount = useMemo(
    () =>
      Object.values(activities).reduce(
        (totalCount, activitiesOfDay) =>
          activitiesOfDay.reduce(
            (count, activity) =>
              activity.status === Status.Done ? count + 1 : count,
            totalCount
          ),
        0
      ),
    [activities]
  )

  return {
    activities,
    completeActivity,
    // does not actually check for consecutive days...
    consecutiveStreak: Object.keys(activities).length,
    totalActivitiesCompletedCount
  }
}
