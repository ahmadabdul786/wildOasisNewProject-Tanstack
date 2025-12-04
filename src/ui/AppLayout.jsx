import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function AppLayout() {
  return (
    <div className='grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-screen  '>
      <Header/>
      <Sidebar/>
     <main className='bg-blue-300 bg-gray-200'>
        <Outlet/>
     </main>
      
    </div>
  )
}

export default AppLayout
