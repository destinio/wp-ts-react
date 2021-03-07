import React from 'react'
import ReactDOM from 'react-dom'
import { SiReact } from 'react-icons/si'

import './styles.scss'

function App() {
  return (
    <div>
      <SiReact />
      <h1>Welcome</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))