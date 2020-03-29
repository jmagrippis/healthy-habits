import React from 'react'

import { Checklist } from './Checklist/Checklist'
import { Pets } from './Pets/Pets'
import { Footer } from './Footer/Footer'

import { useActivities } from 'useActivities'
import { defaultPets } from '../defaultPets'
import { Activity, Status } from '../types'
import { Celebration } from './Celebration/Celebration'

const getPetsToShow = (
  totalActivitiesCompletedCount: number,
  pets = defaultPets
) => {
  const petCount = Math.floor(totalActivitiesCompletedCount / 2)
  return pets.slice(0, petCount)
}

const getRemainingActivityCount = (activities: Activity[]): number => {
  return activities.filter((activity) => activity.status === Status.Pending)
    .length
}

export const App = () => {
  const {
    activities,
    completeActivity,
    consecutiveStreak,
    totalActivitiesCompletedCount,
  } = useActivities()

  const pets = getPetsToShow(totalActivitiesCompletedCount)

  return (
    <>
      <Pets pets={pets} />
      {activities ? (
        <Checklist
          activities={activities}
          completeActivity={completeActivity}
        />
      ) : (
        'loading activities...'
      )}
      {getRemainingActivityCount(activities) === 0 ? <Celebration /> : null}
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
