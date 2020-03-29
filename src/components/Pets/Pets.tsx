import React from 'react'
import styled from 'styled-components'

import { Pet } from 'types'

type Props = {
  pets: Pet[]
}

const Container = styled.div`
  flex: 0 0 100px;
`

export const Pets = ({ pets }: Props) => (
  <Container>
    {pets.map((pet) => (
      <img src={pet.image} key={pet.id} alt={pet.label} />
    ))}
  </Container>
)
