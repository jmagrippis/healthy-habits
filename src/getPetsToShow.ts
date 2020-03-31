import { defaultPets, unhatchedPets } from './defaultPets'

export const getPetsToShow = (
  totalActivitiesCompletedCount: number,
  totalActivitiesCompletedTodayCount: number
) => {
  const eggCount = Math.floor(totalActivitiesCompletedTodayCount / 3)
  const petCount = Math.floor(
    (totalActivitiesCompletedCount - totalActivitiesCompletedTodayCount) / 3
  )

  let eggArray = []
  for (var i = 0; i < eggCount; i++) {
    eggArray.push({ ...unhatchedPets[0] })
  }

  return eggArray.concat(defaultPets.slice(0, petCount))
}
