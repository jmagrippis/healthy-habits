import React from 'react'
import styled from 'styled-components'

const ConfettiTextContainer = styled.div`
  display: flex;
  align-items: center;
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
