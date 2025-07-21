import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import LogoURL from '../../assets/img/mana.jpeg'
import { useForm } from 'react-hook-form'
import { SimilarJobs } from '../SimilarJobs'
import { toast } from 'react-toastify'
import { LoginContext } from '../ContextProvider/Context'
import { Applicants } from '../../Pages/Employer/Applicants'

export const Info = () => {

    const[openApplicants,setOpenApplicnats]=useState(true)
    const[open,setOpen]=useState("max-sm:hidden ")
    const [label,setLabel]=useState("Close")

    const opener=()=>{
   
        if(label==="Close"){
            setOpen("max-sm:hidden")
            setLabel("View")

        }
        else{
                 setOpen("absolute top-[300px]  lg:hidden ")
        setLabel("Close")

        }
    }



    setTimeout(()=>{
        

    },1000)



     const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            candidateID: "",
            jobID: "",
            applicationStatus: "active",
            resume: null,
            applicationForm: [{
                question: "",
                answer: ""
            }],
            candidateFeedback: [{
                question: "",
                answer: ""
            }]
        }
    })

    const randomNum = Math.floor(Math.random() * (200 - 20 + 1) + 20)
    const { id } = useParams();
    const [job, setJob] = useState();
    const [applicants, setApplicants] = useState();
    const [file, setFile] = useState();
    let candidateId,candidateName

    const [loginData, setLoginData] = useState();
    useEffect(() => {
        
        fetch(`https://solvus-api-4.onrender.com/jobs/current-job/${id}`).then(res => res.json()).then(
            data => { setJob(data)
            //console.log(job)
            }
        )
      
        //console.log(user);
    }, [])

      useEffect(() => {

        let token = localStorage.getItem("user");
        const user = JSON.parse(token);
        
        setLoginData(user)
        console.log(loginData)
           opener()
    }, [])
  

   // let myId=id.toString()
  useEffect(() => {
        
    }
        , []);
   



    return(
          <div className='lg:w-[700px]  container mt-2 mx-auto xl:px-2 px-4 '>

            <div className='bg-gradient-to-b from-white to-green-500 mx-auto py-12 md:px-14 px-8 rounded-lg'>

                <div className='flex flex-col lg:flex-row  gap-8'></div>
                {job?<div className='w-full'>

                            {/* BASIC DETAILS */}
                            <div className='max-sm:hidden flex items-center flex-wrap justify-center md:justify-normal'>
                                <img src={LogoURL} alt="Logo" className="rounded-full w-20 md:w-24 h-auto" />
                                <div className='mx-4 my-3 text-center md:text-left md:my-0'>
                                    <h1 className='text-xl md:text-2xl font-bold'>{job.jobTitle}</h1>
                                    <p className='text-secondary'>Solvus.com</p>
                                    <p className='text-sm text-gray-700'>Posted:{job.postedDate}</p>
                                </div>
                            </div>

                            {/* ADDITIONALS */}
                            <div className='max-sm:hidden my-4 gap-2 grid grid-cols-2 sm:grid-cols-4'>
                                <div className='bg-blue-300 rounded-lg py-4 md:py-5 text-center'>
                                    <h2 className='text-xs md:text-md font-semibold text-gray-700'>Employer:</h2><p className='text-sm md:text-lg font-bold'>{job.posterName}</p>
                                </div>
                                <div className='bg-green-300 rounded-lg py-4 md:py-5 text-center'>
                                    <h2 className='text-xs md:text-md font-semibold text-gray-700'>Salary</h2><p className='text-sm md:text-lg font-bold'>{job.budget}</p>
                                </div>
                                <div className='bg-blue-300 rounded-lg py-4 md:py-5 text-center'>
                                    <h2 className='text-xs md:text-md font-semibold text-gray-700'>Location</h2><p className='text-sm md:text-lg font-bold'>{job.location}</p>
                                </div>
                                <div className='bg-green-300 rounded-lg py-4 md:py-5 text-center'>
                                    <h2 className='text-xs md:text-md font-semibold text-gray-700'>Applicants</h2><p className='text-sm md:text-lg font-bold'>{randomNum}</p>
                                </div>
                            </div>

                            {/* JOB DESCRIPTION */}
                            <div className='px-1 flex flex-col'>
                                    <h1 className='text-xl md:text-2xl font-bold'>{job.jobTitle}</h1>
                                <h2 className='my-2 font-bold'>Job Description</h2>

                                
                                <p className='text-sm md:text-base text-justify '>
                                    {job.description}
                                </p>
                            </div>
                              <div className='flex justify-center'>
                                    <button   onClick={opener}  className='block   bg-zinc-500  text-white text-md 
                                    py-2 px-12 md:px-16 rounded-md'>
                                        {label} Applicants</button>
                                </div>
                        </div>
                         
                    
                
                
                
                
                
                
                
                
                
                
                
                
                
                :""}

                   { /*<div className='flex justify-center'>
                                    <button   onClick={addToats}  className='block   bg-gradient-to-r from-purple-600 to-red-600  text-white text-md 
                                    py-2 px-12 md:px-16 rounded-md'>
                                        Seek Now</button>
                                </div>*/}
                              
                
         




                  
                            
                        </div>
   <div  className='w-full' ><Applicants title="Django"/></div>
                
                              
                    
                </div>

















      
         
        
            
    
            
        
    
    
    )








    //const[loginData,setLoginData]=useContext(LoginContext)

}

