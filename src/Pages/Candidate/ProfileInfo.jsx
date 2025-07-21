import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import LogoURL from '../../assets/img/mana.jpeg'
import { useForm } from 'react-hook-form'


export const ProfileInfo = () => {

    const[openApplicants,setOpenApplicnats]=useState(true)
    const[open,setOpen]=useState("max-sm:hidden ")
    const [label,setLabel]=useState("Close")
    const[profile,setProfile]=useState("")

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
    const[userName,setUserName]=useState("")
    const[education,setEducation]=useState("")
    const[description,setdesk]=useState("")
    const[skills,setSkills]=useState("")
    const[pSkill,setPSkill]=useState("")
    const[wage,setWage]=useState("")
    const[location,setLocation]=useState("")
    let candidateId,candidateName

    const [loginData, setLoginData] = useState();
    useEffect(() => {
        
        fetch(`https://solvus-api-4.onrender.com/users/getProfile`).then(res => res.json()).then(
            data => { 
             //   setProfile(data)
            setUserName(data.userName)
            setEducation(data["education"])
            setdesk(data["description"])
            setWage(data["wage"])
            setSkills(data["skills"])
            setLocation(data["location"])

            setPSkill(data["pSkill"])
           console.log(data["userName"])

          // console.log(
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
          <div className='w-[360px]   h-[600px] overflow-y-auto  container mt-2 mx-auto xl:px-24 px-4 bg-white  rounded-xl  border-2 border-red-500 hover:border-red-800   '>
               <h1 className='text-sm  font-bold text-gray-700'>UserName:{userName}</h1>

            <div className='bg-gradient-white  mx-auto py-12 md:px-14 px-8 rounded-lg'>

                <div className='flex flex-col lg:flex-row  gap-8'></div>
            
                <div className='w-full'>

                            {/* BASIC DETAILS */}
                            <div className='max-sm:hidden flex items-center flex-wrap justify-center md:justify-normal'>
                                <img src={LogoURL} alt="Logo" className="rounded-full w-20 md:w-24 h-auto" />
                                <div className='mx-4 my-3 text-center md:text-left md:my-0'>
                                    <h1 className='text-xl md:text-2xl font-bold'>Education:{education}</h1>
                                    <p className='text-secondary'>Solvus.com</p>
                                    <p className='text-sm text-gray-700'>Education:{userName}</p>
                                </div>
                            </div>

                            {/* ADDITIONALS */}
                            <div className='flex flex-col'>
                                <div className='bg-blue-300 rounded-lg py-4 md:py-5 text-center'>
                                    <h2 className=' md:text-md  text-gray-700'>Primary Skill:</h2><p className='text-sm md:text-lg font-bold'>{pSkill}</p>
                                </div>
                                <div className='bg-green-300 rounded-lg '>
                                    <h2 className=' text-gray-700'>Other Skills</h2><p className='text-sm md:text-lg font-bold'>{skills}</p>
                                </div>
                                <div className='bg-blue-300 rounded-lg py-4 md:py-5 text-center'>
                                    <h2 className='text-gray-700'>Location</h2><p className='text-sm md:text-lg font-bold'>{location}</p>
                                </div>
                                </div>
                              
                              

                            {/* JOB DESCRIPTION */}
                            <div className='px-1 flex flex-col'>
                                <h2 className=' text-gray-700'>Education Level</h2><p className='text-sm md:text-lg font-bold'>{education}</p>
                                    
                                <h2 className=' text-gray-700'>hourly charge rate</h2><p className='text-sm md:text-lg font-bold'>{wage}</p>
                                 <div className='bg-blue-300 rounded-lg py-4 md:py-5 text-center'>
                                    <h2 className='text-xs md:text-md font-semibold text-gray-700'>Location</h2><p className='text-sm md:text-lg font-bold'>{location}</p>
                                </div>
                                <h2 className='my-2 font-bold'> About Me</h2>

                                
                                <p className='text-sm md:text-base text-justify '>
                                    {description}
                                </p>
                            </div>
                             
                        </div>
                         
                    
                
                
                
                
                
                
                
                
                
                
                
    

                   { /*<div className='flex justify-center'>
                                    <button   onClick={addToats}  className='block   bg-gradient-to-r from-purple-600 to-red-600  text-white text-md 
                                    py-2 px-12 md:px-16 rounded-md'>
                                        Seek Now</button>
                                </div>*/}
                              
                
         




                  
                            
                        </div>
   
                              
                    
                </div>

















      
         
        
            
    
            
        
    
    
    )








    //const[loginData,setLoginData]=useContext(LoginContext)

}

