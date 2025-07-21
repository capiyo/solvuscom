import React from 'react'
import { Info } from '../Case/info'
import {Judge} from "../Case/judge"
import {Worker} from '../Case/worker'
import { useState,useEffect } from 'react'
import { SimilarJobs } from '../SimilarJobs'
import {useSelector} from "react-redux";
import { Applicants } from '../../Pages/Employer/Applicants'

export const JobDetails = () => {
     const [people, setPeople] = useState([]);
  const gigStatus=useSelector((state)=>state.gigStatus)

  

   
  return (
    <div className='flex   w-full  lg:flex-row justify-evenly h-[1000px] '>
        <div>  {gigStatus==="Open"?
        <div className='overflow-auto  md:flex  h-screen '><Info/></div>:
            <div className='overflow-auto  md:flex  h-screen hidden'><Info/></div>}</div>




        <div className="flex flex -col justify-evenly ">
      {gigStatus==="Open"?
          <div className='overflow-auto  md:flex  hidden  h-screen'>  <Info/></div>

          :
          <div>
    <div className='overflow-auto  border-r-4 border-indigo-500  ' ><Worker/></div>

          </div>
          }
        </div>

        <div  className='overflow-y-auto  items-center h-screen lg:flex  h-screen hidden'><Applicants/></div>
  
    </div>
  )
}
