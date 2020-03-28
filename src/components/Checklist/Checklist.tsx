import React from 'react'

import { Activity } from 'types'
import { Item } from './Item'

type Props = {
  activities: Activity[]
  completeActivity: (activity: Activity) => void
}

export const Checklist = ({ activities, completeActivity }: Props) => (
  <ul>
    {activities.map((activity) => (
      <Item key={activity.id} activity={activity} onClick={completeActivity} />
    ))}
  </ul>
)
