// import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { EducationExperience } from './components/EducationExperience'
import { Projects } from './components/Projects'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <EducationExperience/>
      <Projects/>
    </>
  )
}

export default App
