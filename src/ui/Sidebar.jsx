import React from 'react'
import Logo from './Logo'
import MainNav from './MainNav'

function Sidebar() {
  return (
    <aside className=' flex flex-col items-center row-span-full bg-gray-100  border-l-2 '>
        <Logo/>
        <MainNav/>
    </aside>
  )
}

export default Sidebar
