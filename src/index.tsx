/** @jsx jsx */
import React from 'react'
import ReactDOM from 'react-dom'
import { SiReact, SiWebpack, SiTypescript } from 'react-icons/si'

import { css, jsx } from '@emotion/react'

import './styles.scss'

const iconsStyle = css`
  display: flex;
  font-size: 2rem;
`

function App() {
  return (
    <div>
      <div className="icons" css={iconsStyle}>
        <SiWebpack />
        <SiReact />
        <SiTypescript />
        <span>👩‍🎤</span>
      </div>
      <h1>Welcome</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))