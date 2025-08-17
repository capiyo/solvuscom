import React from 'react'
import { Info } from '../Case/info'
import {Judge} from "../Case/judge"
import {Worker} from '../Case/worker'
import { useState,useEffect } from 'react'
import { SimilarJobs } from '../SimilarJobs'
import { Link, useParams } from 'react-router-dom'
import {useSelector} from "react-redux";
import { Applicants } from '../../Pages/Employer/Applicants'

export const JobDetails = () => {
     const [people, setPeople] = useState([]);
  const gigStatus=useSelector((state)=>state.gigStatus)
  const[job,setJob]=useState()
  const [status,setStatus]=useState("")
    const { id } = useParams();
//    const  gigStatus=useSelector((state)=>state.gigStatus)

      useEffect(() => {
          
          fetch(`https://solvus-api-4.onrender.com/jobs/current-job/${id}`).then(res => res.json()).then(
              data => { setStatus(data.status)
                console.log(gigStatus)

              
              //console.log(job)
              }
          )
        
          //console.log(user);
      }, [])
  

  

   
  return (

    <div className='flex   w-full  lg:flex-row justify-evenly h-[1000px] '>
    
        <div>  {gigStatus ==="Open"?
        <div className='overflow-auto  md:flex  h-screen '><Info/></div>:

            <div className='overflow-auto  md:flex  h-screen '><Worker/></div>}
            </div>




        <div className="flex flex-col justify-evenly">


      {gigStatus ==="pending"?
          <div className='overflow-auto  md:flex  hidden  h-screen'>  <Info/></div>
          :
          <div>
    <div className='overflow-auto  border-r-4 sm:w-screen lg:w-[600px]   hidden md:flex ' > <Info/></div>

          </div>
          }



        </div>

        <div  className='overflow-y-auto  items-center h-screen lg:flex   w-[500px] hidden'><Applicants/></div>
  
    </div>
  )
}
