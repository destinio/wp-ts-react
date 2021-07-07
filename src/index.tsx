import React from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/react'

import { SiReact, SiWebpack, SiTypescript } from 'react-icons/si'
import { Container } from './componets/common'
import { GlobalStyles } from './GlobalStyles'

function App() {
  return (
    <Container>
      <Global styles={GlobalStyles} />
      <div>
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
