import { defaultPets, unhatchedPets } from './defaultPets'

export const getPetsToShow = (
  totalActivitiesCompletedCount: number,
  totalActivitiesCompletedTodayCount: number
) => {
  const eggCount = Math.floor(totalActivitiesCompletedTodayCount / 3)
  const petCount = Math.floor(
    (totalActivitiesCompletedCount - totalActivitiesCompletedTodayCount) / 3
  )

  const eggs = unhatchedPets.slice(0, eggCount)
  const pets = defaultPets.slice(0, petCount)

  return pets.concat(eggs).map((pet, index) => ({ ...pet, id: index }))
}
