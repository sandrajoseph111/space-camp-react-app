import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ParticipantRegistration from './component/ParticipantRegistration'
import ViewRegistration from './component/ViewRegistration'
import AddCamp from './component/AddCamp'
import ViewCamp from './component/ViewCamp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
      <Routes>
      <Route path='/' element={<AddCamp/>}/>
      <Route path='/vi' element={<ViewCamp/>}/>

      </Routes>
      </BrowserRouter>
      <Home/>
      <ParticipantRegistration />
      <ViewRegistration />
    </>
  )
}

export default App
