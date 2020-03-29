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
  justify-content: space-between;
  padding: 1rem 2rem;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid #81e6d9;
  }
`

const Badge = styled.img`
  max-width: 5rem;
  border-radius: 50%;
  margin-right: 1rem;
`

const Label = styled.span`
  flex: 1 0;
  margin-right: 1rem;
`

const Checkbox = styled.img`
  margin-left: 10px;
`

export const Item = ({ activity, onClick }: Props) => (
  <Container onClick={() => onClick(activity)}>
    <Badge src={activity.badge} alt="badge icon for activity" />
    <Label>{activity.label}</Label>
    <Checkbox
      src={
        activity.status === Status.Done
          ? 'checkbox-ticked.png'
          : 'checkbox-unticked.png'
      }
    />
  </Container>
)
