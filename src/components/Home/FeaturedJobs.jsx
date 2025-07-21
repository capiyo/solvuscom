import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoURL from '../../assets/img/laptop.jpeg'
import {FaBeer,FaBrain,FaTree,FaHeart, FaEye, FaRedRiver, FaMale, FaHandHolding}  from "react-icons/fa"
import { ToastContainer,toast } from 'react-toastify'
import { LoginContext } from '../ContextProvider/Context';
import { useDispatch,useSelector} from "react-redux"


export const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

   
   const [apaiChecker,setApiChecker]=useState(false)
   const[likes,setLikes]=useState([])


   
    

    useEffect(() => {

         fetch("https://solvus-api-4.onrender.com/jobs/all-jobs").then(res => res.json()).then(
            data => {
                //const newData = data
                setJobs(data)
              console.log(data)
                
               
            }
        );
    }, []);


    /*useEffect(() => {
        console.log(jobs.jobID)

         fetch(`http://localhost:5000/jobs/getlikes/${jobs.jobID}`).then(res => res.json()).then(
            allLikes => {
                const newData = allLikes
                setLikes(newData)
                console.log(likes)
              
            }
        );
    }, []);*/




const loadLikes=(jobId)=>{
    fetch(`http://localhost:5000/jobs/getlikes/${jobId}`).then(res => res.json()).then(
            data => {
                const newData = data
                setLikes(newData)
                console.log(likes)
               // console.log(LoginContext._id)

            }
        );

} 




        
       

    

    return (
        <div className=''>
            
                           <div className='flex flex-col'><h1 className='text-center text-sm md:text-sm font-normal text-primary mt-4 md:mt-2'>
                            Our Featured Jobs,<span className='text-blue-600'>
                            quality and trust</span></h1></div>
                           
            <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-2'>

                {jobs.map((job, key) => <Card    key={key} job={job} />)}
            
            </div>
        </div>
    )
}
//bg-[#e0F8FF]

function Card({ job}) {
     const[bgColor1,setbg1Color]=useState('bg-gradient-to-r from-purple-300 to-blue-500')
     const[bgColor2,setbg2Color]=useState(' bg-gradient-to-r from-green-300 to-red-300')
     const[bgColor3,setbg3Color]=useState('bg-gradient-to-r from-purple-100 to-black')
     const[request,setRequest]=useState(false)
     const [mainBg,setMainbg]=useState("bg-gradient-to-b from-white to-gray")
     const[navebg,setNavBg]=useState()
     const[loginData,setLoginData]=useState(LoginContext)
     const[myId,setMyId]=useState("")
     const[myName,setMyname]=useState("")
     const[workerEmail,setWorkerEmail]=useState("")
         const[btnBg,setBg]=useState("bg-blue-700")
       const   dispatch=useDispatch()

 


useEffect(() => {
           let token = localStorage.getItem("user");
        const user = JSON.parse(token);
        setLoginData(user)  
        //console.log(user.userId)
        setMyId(user.userId)
        setMyname(user.userName)
        setWorkerEmail(user.userEmail)

      
       // console.log(LoginContext["userId"])
       // console.log(typeof(LoginContext))
        //setBossId(loginData.userId)
       // console.log(bossId+"The capiyo")
    }, [])

    function changeMain(){
        setMainbg("bg-gradient-to-b from-white to-gray-300")
        setRequest(true)
        setbg1Color("bg-gradient-to-r from-purple-300 to-geen-300")
        setbg2Color("bg-gradient-to-r from-blue-300 to-red-300")
        setbg3Color("bg-gradient-to-r from-blue-300 to-yelow-300")

    

    }

    function returnBg(){
        setMainbg("bg-gradient-to-b from-white to-gray-700")
         setRequest(false)
              }





     
    function onClick(){
    if(bgColor1){
        setbg1Color("bg-gradient-to-r from-red-800 to-[#06402b]")
    }
    else{
        setbg1Color('bg-gradient-to-r from-red-800 to-yellow-500')
    }

   }

    function buttonEnter(myValue){
        if(myValue===1){
            console.log(myValue)
        
        
    }
    else if(myValue===2){
        setbg2Color('bg-gradient-to-r from-green-100 to-blue-500')
          console.log(myValue)
    }
    else if(myValue===3){
        setbg3Color('bg-gradient-to-r from-red-300 to-green-200')
          console.log(myValue)

    }
    }

 function buttonOut(myValue){
        if(myValue===1){
            console.log(myValue)
        setbg1Color("bg-gradient-to-r from-purple-300 to-blue-300")
        
    }
    else if(myValue===2){
        setbg2Color('bg-gradient-to-r from-green-300 to-blue-300')
          console.log(myValue)
    }
    else if(myValue===3){
        setbg3Color('bg-gradient-to-r from-purple-100 to-black')
          console.log(myValue)

    }
}






   
    const  submitLikes=(event)=>{
        const  jobId=event
        console.log(myId)
        console.log(job.posterId)

       /* const output={
            likes:10,
            jobId
        }
       console.log(output)



           fetch("http://localhost:5000/jobs/addlikes", {
            method: "POST",
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(output)
            
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            toast.success("Like Submitted Successfully")
            window.location.href = '/all-jobs';
        })
        .catch((error) => {
            console.log(error);
            toast.error("Failed to post job");
        });   
*/
        

    }
const changebg=()=>{


}

const showRequest=(jobId)=>{
    const output={
    "jobId":jobId,
    "workerName":myName,
    "workerId":myId,
    "workerEmail":workerEmail,
    }
    
    
                fetch("https://solvus-api-4.onrender.com/jobs/add-applicants", {
            method: "POST",
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(output)
            
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            toast("Your Request was sent successfully")

            //setRequest(true)
          //  window.location.href = '/all-jobs';
        })
        .catch((error) => {
            console.log(error);
            toast.error("Failed to aplly");
        });

    console.log(jobId)
    console.log(myId)
    console.log(myName)
}






      const getGigData=(gigTitle,gigId,budget,status)=>{
        let   caseTitle=gigTitle
        const data={
            caseTitle:gigTitle,
            caseId:gigId,
            budget:budget
        }

                 dispatch({type:"caseData",payload:data})
                 dispatch({type:"gigStatus",payload:status})



                 console.log(data)

            }

    return (
        <div      className={`border items-center shadow-lg      card    hover:border-green-800
        rounded-xl `}>
          
            {/* Card Header */}
            <div className='flex items-center   gap-1'>
                <div>
                    {/* company image */}
                    <img src={logoURL} alt={job.companyName} className='w-12 rounded-full' />
                </div>
                <div>
                    <div className='flex '>
                           <svg class="w-8 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 
                              2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>                      
                    </svg>
                          
                       
                        <box-icon size='18px' name='time'></box-icon>
                        <div className='flex flex-col'>
                        <span className='pl-1'>Budget: Ksh.{job.budget} </span>
                        <span className='pl-1'>Deadline: {job.deadline} </span>
                        <span className='pl-1'>Time: {job.timePosted} </span>

                        
                        </div>

                    </div>
                    <h1 className='font-bold text-md text-blue-500'>{job.jobTitle}</h1>
                </div>
            </div>
            <div className='flex flex-col'>
                <FaBrain/>
                <p className='py-4  lg:text-lg    sm:text-sm/6'>{job.description}</p>
            </div>
            {/* Footer - apply now and location */}            
            <div className={`flex justify-between flex-row ` }> 

                {job.posterId===myId?    <Link to={`/current-job/${job._id}`}>
                    <button      onMouseLeave={(myValue)=>buttonOut(1)} onMouseEnter={()=>buttonEnter(1)}
                                 onClick={(gigTitle,gigId)=>getGigData(job.jobTitle,job.jobID,job.budget,job.status)} className={`lg:block  text-blue-900 font-bold
                     text-white text-sm py-1 px-1 mt-10 rounded-md py-1 px-1 rounded border-2 border-red-500 hover:border-blue-700    `}>
                        <div    className='flex flex-row  text-purple-400 font-bold'><FaEye/>view </div>
                        </button>
                        
                </Link>
                : <div>
               
                    <button  onMouseLeave={(myValue)=>buttonOut(2)}   onMouseEnter={(myValue)=>buttonEnter(2)}className={`lg:block  
                     text-white text-sm py-1 px-4 mt-10   rounded-md   py-1 px-1 rounded border-2 border-red-500 hover:border-blue-500`}>

                           <div    className='flex flex-row  text-violet-900 font-bold'><FaRedRiver/>follow</div>
                      
                        </button>
                </div>}


                
            

                 <div>
               
                    <button  onMouseLeave={(myValue)=>buttonOut(2)}   onMouseEnter={(myValue)=>buttonEnter(2)}className={`lg:block  
                     text-white text-sm py-1 px-4 mt-10   rounded-md   py-1 px-1 rounded border-2 border-red-500 hover:border-blue-500`}>

                           <div    className='flex flex-row  text-green-500 font-[1000]'><FaMale/>@{job.posterName}</div>
                      
                        </button>
                </div>

                 <div >
                    <button onClick={(event)=>showRequest(job._id)}  onMouseEnter={(myValue)=>buttonEnter(3)}  onMouseLeave={(myValue)=>buttonOut(3)} className={`lg:block 
                     text-white text-sm py-1 px-4  mt-10  rounded-md    py-1 px-1 rounded border-2 border-red-500 hover:border-blue-700`}>
                        <div    className='flex flex-row text-blue-500 font-bold'><FaHandHolding/>Request</div> </button>
                        
                </div> 
                  
                 
                </div>
               
                 <span className='font-extrabold text-xl flex flrx-row  mt-30 md:text-3xl text-green-500'>
                        <span  onClick={(event)=>submitLikes(job._id)} className='text-sm'>#36</span> <FaHeart/>   
                           
                         
                        </span>

{request?
                        <div className='flex bg-zinc-300 w-[200px]p-1 rounded-xl absolute -rotate-20'>
                           <div className='flex flex-col'> <p>Hello   <span className='text-blue-800  font-bold '>{`@${myName}    `}</span>Your request has been sent Successfully,wait for notification.Thanks</p></div>
                            <img src={logoURL} alt='Logog' w className='w-12 rounded-full'/>
                            </div>       
                            :""}               


                    
                      

                     
            
          
              </div>
    )
}