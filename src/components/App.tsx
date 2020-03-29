import React from 'react'
import styled from 'styled-components'

import { Header } from './Header/Header'
import { Checklist } from './Checklist/Checklist'
import { Pets } from './Pets/Pets'

import { useActivities } from 'useActivities'
import { defaultPets } from '../defaultPets'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const App = () => {
  const {
    activities,
    completeActivity,
    consecutiveStreak,
    totalActivitiesCompletedCount,
  } = useActivities()

  return (
    <>
      <Header />
      {activities ? (
        <Container>
          <Checklist
            activities={activities}
            completeActivity={completeActivity}
          />
          <Pets
            totalActivitiesCompletedCount={totalActivitiesCompletedCount}
            pets={defaultPets}
          />
        </Container>
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
