import React from 'react'

import { Header } from './Header/Header'
import { Checklist } from './Checklist/Checklist'

import { useActivities } from 'useActivities'
import { getCurrentDateHash } from 'getCurrentDateHash'

export const App = () => {
  const { activities, completeActivity } = useActivities()
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
    </>
  )
}

export default App
