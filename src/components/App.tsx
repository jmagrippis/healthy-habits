import React from 'react'

import { Header } from './Header/Header'
import { Checklist } from './Checklist/Checklist'
import { Pets } from './Pets/Pets'
import { Footer } from './Footer/Footer'

import { useActivities } from 'useActivities'
import { defaultPets } from '../defaultPets'

const getPetsToShow = (
  totalActivitiesCompletedCount: number,
  pets = defaultPets
) => {
  const petCount = Math.floor(totalActivitiesCompletedCount / 2)
  return pets.slice(0, petCount)
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
      <Header />
      <Pets pets={pets} />
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
      <Footer />
    </>
  )
}

export default App
