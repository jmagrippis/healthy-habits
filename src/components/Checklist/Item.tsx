import React from 'react'
import styled from 'styled-components'

import { Activity, Status } from 'types'

type Props = {
  activity: Activity
  onClick: (activity: Activity) => void
}

const Container = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
`

const Badge = styled.img`
  max-width: 5rem;
  border-radius: 50%;
  margin-right: 1rem;
`

const Checkbox = styled.img`
  margin-left: 10px;
`

export const Item = ({ activity, onClick }: Props) => (
  <Container onClick={() => onClick(activity)}>
    <Badge src={activity.badge} alt="badge icon for activity" />
    <span>{activity.label}</span>
    {activity.status === Status.Done ? (
      <Checkbox src={'checkbox-ticked.png'} />
    ) : (
      <Checkbox src={'checkbox-unticked.png'} />
    )}
  </Container>
)
