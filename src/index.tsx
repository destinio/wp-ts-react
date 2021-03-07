/** @jsx jsx */
import React from 'react'
import ReactDOM from 'react-dom'
import { css, jsx } from '@emotion/react'

import { SiReact, SiWebpack, SiTypescript } from 'react-icons/si'
import { Container } from './componets/common'

import './styles.scss'

const iconsStyle = css`
  display: flex;
  font-size: 2rem;
`

function App() {
  return (
    <Container>
      <div className="icons" css={iconsStyle}>
        <SiWebpack />
        <SiReact />
        <SiTypescript />
        <span>👩‍🎤</span>
      </div>
      <h1>Welcome</h1>
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))