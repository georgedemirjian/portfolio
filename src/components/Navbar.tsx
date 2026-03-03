import React from 'react'
import { Tabs } from './Tabs'

export const Navbar = () => {
  return (
    <div className="bg-black sticky top-0 z-50 shadow-md hidden lg:flex">
      <div className="navbar bg-black px-6 w-full">
        <div className="w-1/4">
          <a className="btn btn-ghost text-xl text-white">George Demirjian</a>
        </div>
        <div className="flex-1 flex justify-center">
          <Tabs/>
        </div>
        <div className="w-1/4" />
      </div>
    </div>
  )
}

export default Navbar