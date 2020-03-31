import { getPetsToShow } from './getPetsToShow'
import { defaultPets, unhatchedPets } from './defaultPets'

describe('getPetsToShow', () => {
  it('gets a pet for each 3 activities completed before today', () => {
    const petsA = getPetsToShow(7, 0)
    const petsB = getPetsToShow(7, 0)
    const petsC = getPetsToShow(9, 0)

    expect(petsA).toEqual([
      { ...defaultPets[0], id: expect.any(String) },
      { ...defaultPets[1], id: expect.any(String) },
    ])
    expect(petsB).toEqual([
      { ...defaultPets[0], id: expect.any(String) },
      { ...defaultPets[1], id: expect.any(String) },
    ])
    expect(petsC).toEqual([
      { ...defaultPets[0], id: expect.any(String) },
      { ...defaultPets[1], id: expect.any(String) },
      { ...defaultPets[2], id: expect.any(String) },
    ])
  })

  it('gets an egg if the activities to earn the pet have been completed today', () => {
    const pets = getPetsToShow(3, 3)
    expect(pets).toEqual([{ ...unhatchedPets[0], id: expect.any(String) }])
  })

  it('gets multiple eggs if the activities to earn multiple pets have been completed today', () => {
    const pets = getPetsToShow(6, 6)
    expect(pets).toEqual([
      { ...unhatchedPets[0], id: expect.any(String) },
      { ...unhatchedPets[0], id: expect.any(String) },
    ])
  })
})
