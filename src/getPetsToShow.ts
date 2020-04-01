import { defaultPets, unhatchedPets } from './defaultPets'
import { v4 as uuidv4 } from 'uuid'

export const getPetsToShow = (
  totalActivitiesCompletedCount: number,
  totalActivitiesCompletedTodayCount: number
) => {
  const eggCount = Math.floor(totalActivitiesCompletedTodayCount / 3)
  const petCount = Math.floor(
    (totalActivitiesCompletedCount - totalActivitiesCompletedTodayCount) / 3
  )

  const eggs = [...Array(eggCount)].map(() => ({
    ...unhatchedPets[0],
    id: uuidv4(),
  }))

  const pets = defaultPets
    .slice(0, petCount)
    .map((pet) => ({ ...pet, id: uuidv4() }))

  return eggs.concat(pets)
}
