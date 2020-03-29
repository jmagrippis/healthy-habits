import { categoriesToActivities } from 'categoriesToActivities'
import { sample, shuffle } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

import { Activity, Status } from 'types'

export const pickRandomActivities = (): Activity[] =>
  shuffle(
    Object.entries(categoriesToActivities).map(([category, activities]) => {
      const randomActivity = sample(activities)

      if (!randomActivity)
        throw new Error(`could not sample activity for ${category}`)

      return {
        ...randomActivity,
        status: Status.Pending,
        id: uuidv4(),
      }
    })
  )
