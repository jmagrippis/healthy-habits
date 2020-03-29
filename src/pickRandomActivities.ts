import { categoriesToActivities } from 'categoriesToActivities'
import { sample, shuffle } from 'lodash'

import { Activity } from 'types'

export const pickRandomActivities = (): Activity[] =>
  shuffle(
    Object.entries(categoriesToActivities).map(
      ([, activities]) => sample(activities) as Activity
    )
  )
