import React from 'react'

import { Header } from './Header/Header'
import { Checklist } from './Checklist/Checklist'

import { useActivities } from 'useActivities'
import { getCurrentDateHash } from 'getCurrentDateHash'

export const App = () => {
  const {
    activities,
    completeActivity,
    consecutiveStreak,
    totalActivitiesCompletedCount
  } = useActivities()
  const currentDateHash = getCurrentDateHash()

  const todaysActivities = activities[currentDateHash]

  return (
    <>
      <Header />
      {todaysActivities ? (
        <Checklist
          activities={todaysActivities}
          completeActivity={completeActivity}
        />
      ) : (
        'loading activities...'
      )}
      <div>
        Current days streak: <strong>{consecutiveStreak}</strong>
      </div>
      <div>
        Total activities completed:{' '}
        <strong>{totalActivitiesCompletedCount}</strong>
      </div>
    </>
  )
}

export default App
