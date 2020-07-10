// From react
import React, { useState } from 'react'

// From internal
import '~/App.css'
import logo from '~/assets/images/logo.svg'

const App = props => {
  const [loading, setLoading] = useState(false)

  if (loading === true) {
    return (
      <div className='app' />
    )
  }

  return (
    <div className='app'>
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='app-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
