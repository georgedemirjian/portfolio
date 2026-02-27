import React from 'react'
import { ThemeToggle } from "./ThemeToggle"
import {Tabs} from "./Tabs"

export const Navbar = () => {
  return (
    <div className="navbar bg-black sticky top-0 z-50 shadow-md">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
    </button>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">George Demirjian <Tabs/> </a>
  </div>
  <ThemeToggle/>
  
</div>
  )
}

export default Navbar
