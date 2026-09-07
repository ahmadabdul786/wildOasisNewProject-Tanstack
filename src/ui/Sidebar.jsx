import React from 'react'
import Logo from './Logo'
import MainNav from './MainNav'
import Uploader from '../data/Uploader'

function Sidebar() {
  return (
    <aside className=' flex flex-col items-center row-span-full bg-gray-100  border-l-2 '>
        <Logo/>
        <MainNav/>
        <Uploader/>
    </aside>
  )
}

export default Sidebar
