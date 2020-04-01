import { getPetsToShow } from './getPetsToShow'
import { defaultPets, unhatchedPets } from './defaultPets'

describe('getPetsToShow', () => {
  it('gets a pet for each 3 activities completed before today', () => {
    const petsA = getPetsToShow(7, 0)
    const petsB = getPetsToShow(7, 0)
    const petsC = getPetsToShow(9, 0)

    expect(petsA).toEqual([
      { ...defaultPets[0], id: 0 },
      { ...defaultPets[1], id: 1 },
    ])
    expect(petsB).toEqual([
      { ...defaultPets[0], id: 0 },
      { ...defaultPets[1], id: 1 },
    ])
    expect(petsC).toEqual([
      { ...defaultPets[0], id: 0 },
      { ...defaultPets[1], id: 1 },
      { ...defaultPets[2], id: 2 },
    ])
  })

  it('gets an egg if the activities to earn the pet have been completed today', () => {
    const pets = getPetsToShow(3, 3)
    expect(pets).toEqual([{ ...unhatchedPets[0], id: 0 }])
  })

  it('gets multiple eggs if the activities to earn multiple pets have been completed today', () => {
    const pets = getPetsToShow(6, 6)
    expect(pets).toEqual([
      { ...unhatchedPets[0], id: 0 },
      { ...unhatchedPets[0], id: 1 },
    ])
  })
})
