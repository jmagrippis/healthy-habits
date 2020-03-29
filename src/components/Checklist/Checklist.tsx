import React, { ReactNode } from 'react'

import { Activity, Category, Pet } from 'types'
import { Item } from './Item'
import styled from 'styled-components'
import { defaultCategories } from '../../defaultCategories'

type Props = {
  activities: Activity[]
  completeActivity: (activity: Activity) => void
}

const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`

const SectionContainer = styled.div`
  margin-top: 15px;
`

const ChecklistContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`

const Icon = styled.img`
  margin-left: 12px;
`

export const Checklist = ({ activities, completeActivity }: Props) => {
  const checklist = Object.values(defaultCategories).map(
    (category: { name: string; icon: string }) => (
      <SectionContainer>
        <SectionHeader>
          <span>{category.name.toUpperCase()}</span>
          <Icon src={category.icon} />
        </SectionHeader>
        {activities.map((activity: Activity) => {
          return activity.category.toLowerCase() ===
            category.name.toLowerCase() ? (
            <Item
              key={activity.id}
              activity={activity}
              onClick={completeActivity}
            />
          ) : null
        })}
      </SectionContainer>
    )
  )
  return <ChecklistContainer>{checklist}</ChecklistContainer>
}
