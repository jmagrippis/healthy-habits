import React from 'react'
import styled from 'styled-components'

import { ReactComponent as GithubIcon } from './github-mark.svg'

const Container = styled.footer`
  display: flex;
  align-items: center;
`

const Spacer = styled.span`
  margin: 0 0.5rem;
`

export const Footer = () => (
  <Container>
    <a
      href="https://github.com/jmagrippis/healthy-habits"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
    </a>
    <Spacer>-</Spacer>
    <div>
      Copyright ©{new Date().getFullYear()}{' '}
      <a
        href="https://covid-global-hackathon.devpost.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        #BuildforCOVID19
      </a>{' '}
    </div>
  </Container>
)
