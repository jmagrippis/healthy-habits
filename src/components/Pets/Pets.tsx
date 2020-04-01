import React from 'react'
import styled, { keyframes } from 'styled-components'

import { Pet } from 'types'

type Props = {
  pets: Pet[]
}

const Container = styled.div`
  flex: 0 0 130px;
  padding: 0 0.5rem;
  margin-top: 10px;
`

const growAndShrink = keyframes`
  0%   {width: 0px;}
  80%  {width: 120px;}
  100%  {width: 100px;}
`

const Image = styled.img`
  animation: ${growAndShrink} 1s cubic-bezier(0.76, 0, 0.24, 1);
`

export const Pets = ({ pets }: Props) => (
  <Container>
    {pets.map((pet) => (
      <Image key={pet.id} src={pet.image} alt={pet.label} />
    ))}
  </Container>
)
