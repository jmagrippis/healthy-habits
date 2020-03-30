import React from 'react'
import styled, { keyframes } from 'styled-components'

const grow = keyframes`
  0%   {font-size: 0;}
  50% {font-size: 0}
  90% {font-size: 1.25rem}
  100%  {font-size: 1rem;}
`

const ConfettiTextContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  animation: ${grow} 2.4s cubic-bezier(0.5, 1, 0.89, 1);
`
const appear = keyframes`
  0%   {opacity: 0;}
  99% {opacity: 0}
  100%  {opacity: 1;}
`
const Confetti = styled.img`
  padding: 15px;
  animation: ${appear} 4s;
`

export const Celebration = () => (
  <ConfettiTextContainer>
    <Confetti src={'confetti-left.gif'} alt={'confetti'} />
    <span>
      Congratulations! You've completed all the activities for today. Check back
      in tomorrow for more!
    </span>
    <Confetti src={'confetti-right.gif'} alt={'confetti'} />
  </ConfettiTextContainer>
)
