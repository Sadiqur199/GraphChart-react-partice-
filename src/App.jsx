import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap'
import Dashboard from './Component/Dasbord/Dashboard'
import PhoneBar from './Component/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PhoneBar></PhoneBar>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App
