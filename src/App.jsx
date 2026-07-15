import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddCamp from './component/AddCamp'
import ViewCamp from './component/ViewCamp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddCamp />
      <ViewCamp />
    </>
  )
}

export default App
