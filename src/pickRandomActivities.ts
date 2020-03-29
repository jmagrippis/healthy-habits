import { categoriesToActivities } from 'categoriesToActivities'
import { sample } from 'lodash'

import { Activity } from 'types'

export const pickRandomActivities = (): Activity[] =>
  Object.entries(categoriesToActivities).map(
    ([, activities]) => sample(activities) as Activity
  )
