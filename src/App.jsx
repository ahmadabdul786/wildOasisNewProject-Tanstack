import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Login from './pages/Login'
import NewUsers from './pages/Users'
import Settings from './pages/Settings'
import Account from './pages/Account'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './ui/AppLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'
import Canvas from './pages/Canvas'
import Booking from './features/bookings/Booking'
import Checkin from './pages/Checkin'

// <div className='grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-screen  '>
//       <header className=' bg-gray-100'>header</header>
//       <aside className=' row-span-full bg-gray-100  border-l-2 '>SideBar</aside>
//       <main className='bg-blue-300 bg-gray-200'>Main</main>

//     </div>


export default function App() {

   const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        staleTime:60*1000
      }
    }
   });

  return (
    
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen ={false} />
    <BrowserRouter>
    <Routes>
      <Route element ={<AppLayout/>} >
      <Route index element = {<Navigate replace to = 'dashboard'/> }/>
      <Route path='dashboard' element = {<Dashboard/>} />
      <Route path='bookings' element = {<Bookings/>} />
      <Route path='bookings/:bookingId' element = {<Booking/>} />
      
      <Route path='checkin/:bookingId' element = {<Checkin/>} />
      
      <Route path='cabins' element = {<Cabins/>} />
      <Route path='account' element = {<Account/>} />
      <Route path='users' element = {<NewUsers/>} />
      <Route path='settings' element = {<Settings/>} />
      <Route path='canvas' element = {<Canvas/>} />
      </Route>
      
      <Route path='login' element = {<Login/>} />
      <Route path='*' element = {<PageNotFound/>} />

    
    </Routes>
    </BrowserRouter>
    <Toaster position='top-left' 
    gutter={12} // this is the gap between toast and window edge
    containerStyle={{margin:'8px'}}
     toastOptions={{
      success:{
        duration:3000
      },
      error:{
        duration:2000
      },
      style:{
        fontSize:'16px',
        maxWidth:"500px",
        padding:'16px 24px',
        backgroundColor:'skyblue',
        color:'white'

      }
     }}
     />
    </QueryClientProvider>
  )
}
