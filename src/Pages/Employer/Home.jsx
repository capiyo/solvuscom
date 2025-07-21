import React, { useEffect, useState } from 'react'
import { Hero } from '../../components/Home/Hero'
import { FeaturedJobs } from '../../components/Home/FeaturedJobs'
import { Finder, SidebarItem } from '../../components/Finder/Finder'
import Sidebar from '../../components/Finder/Sidebar'


export const Home = () => {

  return (
    <div className='w-100% flex flex-row   overflow-hidden h-screen'>
      <div className=' w-10% mr-2   sticky'><Sidebar/></div>
      <div className=' w-100vw overflow-y-scroll  h-100vh'><FeaturedJobs /></div>
    </div>
  )
}