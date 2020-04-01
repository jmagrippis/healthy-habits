import React from 'react'

import { Checklist } from './Checklist/Checklist'
import { Pets } from './Pets/Pets'
import { Footer } from './Footer/Footer'

import { useActivities } from 'useActivities'
import { Activity, Status } from '../types'
import { Celebration } from './Celebration/Celebration'
import { getPetsToShow } from '../getPetsToShow'

const getRemainingActivityCount = (activities: Activity[]): number => {
  return (
    activities &&
    activities.filter((activity) => activity.status === Status.Pending).length
  )
}

export const App = () => {
  const {
    activities,
    toggleActivityComplete,
    consecutiveStreak,
    totalActivitiesCompletedCount,
    totalActivitiesCompletedTodayCount,
  } = useActivities()

  const pets = getPetsToShow(
    totalActivitiesCompletedCount,
    totalActivitiesCompletedTodayCount
  )

  return (
    <>
      <Pets pets={pets} />
      {activities ? (
        <Checklist
          activities={activities}
          completeActivity={toggleActivityComplete}
        />
      ) : (
        'loading activities...'
      )}
      {activities && getRemainingActivityCount(activities) === 0 ? (
        <Celebration />
      ) : null}
      <div>
        Current days streak: <strong>{consecutiveStreak}</strong>
      </div>
      <div>
        Total activities completed:{' '}
        <strong>{totalActivitiesCompletedCount}</strong>
      </div>
      <Footer />
    </>
  )
}

export default App
