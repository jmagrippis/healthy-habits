import { useState, useEffect, useCallback } from 'react'
import store from 'store2'

import { Activity, Status } from './types'
import { defaultActivities } from './defaultActivities'
import { getCurrentDateHash } from './getCurrentDateHash'

const LOCAL_STORAGE_KEY = 'activities'

type ActivitiesMap = { [dateHas: string]: Activity[] }

export const useActivities = (): {
  activities: ActivitiesMap
  completeActivity: (activity: Activity, dateHash?: string) => void
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

  return { activities, completeActivity }
}
