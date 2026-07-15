import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ParticipantRegistration from './component/ParticipantRegistration'
import ViewRegistration from './component/ViewRegistration'
import AddCamp from './component/AddCamp'
import ViewCamp from './component/ViewCamp'
import AddConsent from './component/AddConsent'
import ViewConsent from './component/ViewConsent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParticipantRegistration />
      <ViewRegistration />
      <AddConsent />
      <ViewConsent />
    </>
  )
}

export default App
