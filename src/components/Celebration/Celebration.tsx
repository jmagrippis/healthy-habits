import React from 'react'
import styled, { keyframes } from 'styled-components'

const grow = keyframes`
  0%   {font-size: 0;}
  100%  {font-size: 1rem;}
`

const ConfettiTextContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  animation: ${grow} 0.6s cubic-bezier(0.64, 0, 0.78, 0);
`

const Confetti = styled.img`
  padding: 15px;
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
