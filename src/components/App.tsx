import React from 'react'

import { Header } from './Header/Header'
import { Checklist } from './Checklist/Checklist'

import { useActivities } from 'useActivities'

export const App = () => {
  const {
    activities,
    completeActivity,
    consecutiveStreak,
    totalActivitiesCompletedCount
  } = useActivities()

  return (
    <>
      <Header />
      {activities ? (
        <Checklist
          activities={activities}
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
