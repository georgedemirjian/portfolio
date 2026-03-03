// import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { EducationExperience } from './components/EducationExperience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { MobileNavbar } from './components/MobileNavbar'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Navbar/>
      <MobileNavbar />
      <Hero/>
      <EducationExperience/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Analytics />
    </>
  )
}

export default App
