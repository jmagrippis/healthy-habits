import React from 'react'
import styled from 'styled-components'

import { Activity } from 'types'
import { Item } from './Item'

type Props = {
  activities: Activity[]
  completeActivity: (activity: Activity) => void
}

const Container = styled.ul`
  background-color: #b2f5ea;
  font-size: 1.25rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

export const Checklist = ({ activities, completeActivity }: Props) => (
  <Container>
    {activities.map((activity) => (
      <Item key={activity.id} activity={activity} onClick={completeActivity} />
    ))}
  </Container>
)
