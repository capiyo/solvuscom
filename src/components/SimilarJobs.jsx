import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoURL from '../assets/img/laptop.jpeg'
import { toast } from 'react-toastify';
import { LoginContext } from './ContextProvider/Context';
import { useDispatch, useSelector } from 'react-redux';
export const SimilarJobs = ({title}) => {

    const [applicants, setApplicants] = useState([]);
    const[loginData, setLoginData]=useState(LoginContext)

  
    const[myId,setMyId]=useState("")
      useEffect(() => {

        let token = localStorage.getItem("user");
        const user = JSON.parse(token);

        setMyId(user.userId)
        setLoginData(user)

        console.log(loginData+"hereeeee")
    }, [])
  

    useEffect(() => {
        fetch("https://solvus-api-4.onrender.com/jobs/applicants").then(res => res.json()).then(
            data => {
                const newData = data
                setApplicants(newData)
                console.log(newData)

            }
        ).catch((error)=>console.log(error));
        
    }, []);

    

    return (
        <div className=''>
            <h1 className='text-center text-xl md:text-2xl font-bold text-primary mt-8 md:mt-6   '>All Aplicants</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-1'>
                {applicants.map((people, key) => <Card key={key}  applicants={people}  title={title}/>)}
            </div>
        </div>
    )
}

function Card({ applicants,title }) {
      const[assign,setAssin]=useState(false)
        const[workerId,setWorkerId]=useState('')
        const[posterId,setPosterId]=useState("")
        const[workerName,setWorkername]=useState("")
        const[loginData,setLoginData]=useState('')
    const[bossPhone,setBossPhone]=useState()
           const caseId=useSelector((state)=>state.caseData['caseId'])
           //const  caseBudget=useSelector((state) =>state.caseData['budget'])
           const caseTitel=useSelector((state)=>state.caseData["caseTitle"])

    const mybudget=useSelector((state)=>state.caseData["budget"])

           //console.log(gigStatus)
           

        
        //const[]
    const  confirmAssign=()=>{
        setAssin(true)
    }

    function getPosterDetails(){

    }
    

    function getMessApplicantsData(userName,userId,userEmail){

         const  messageData={
        workerId:userId,
        posterId:myId,
        caseId:caseId,
        caseTitle:caseTitel,
        workerEmail:userEmail,
        workerName:userName,
      posterName:posterName,
      posterEmail:posterEmail,
        message:"Congratulations  you are assgined the gig  od Angular dev from @Capiyo",
        status:"Started"
    }
       fetch("http://localhost:5000/case/addWorkerChats", {
            method: "POST",
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(messageData)
            
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            setAssin(false)
            toast.success("Notiefiled successfully kindly  wait for his reply in your inbox or check thread chat")
            //window.location.href = '/all-jobs';
        })
        .catch((error) => {
            console.log(error);
            toast.error("Failed to  To Notify,Please try again}");
            setAssin(false)
        });


   // console.log(messageData)
    
        



    }





     const[myId,setMyId]=useState("")
     const[posterName,setPostername]=useState("")
     const [posterEmail,setPosterEMail]=useState("")
      useEffect(() => {

        let token = localStorage.getItem("user");
        const user = JSON.parse(token);
        setMyId(user.userId)
        setPostername(user.userName)
        setPosterEMail(user.userEmail)
          setBossPhone(user.phoneNumber)
        setLoginData(user)

        console.log(myId,posterEmail,posterName,bossPhone)
    }, [myId])





const asssignNow =()=>{
    setAssin(false)
   // toast('Task Assign successfully')
    //startChart()
}

const cancelAssign=()=>{
    setAssin(false)
}
const sendPayments=(username,userId,userEmail)=>{
    const amount=20
    //const phonenumber=
    const paymentData={
        budget:mybudget,
        phoneNumber:bossPhone
    }
console.log(paymentData)

    fetch("http://localhost:5000/payment/stk/push", {
            method: "POST",
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(paymentData)
            
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
           // getMessApplicantsData(username,userId,userEmail)
            ////getMessApplicantsData()
           // setAssin(false)
          //  toast.success("Notiefiled successfully kindly  wait for his reply in your inbox or check thread chat")
            //window.location.href = '/all-jobs';
        })
        .catch((error) => {
            console.log(error);
            toast.error("Payment Failed  kindly try again later");
            setAssin(false)
        });






}





    return (


        <div className='border shadow-lg hover:border-green-800       lg:w-[700px]   rounded-xl flex-row  bg-green-100 card'>
          
        
            
          <div className='flex items-center gap-3'>
                <div>
                    {/* company image */}
                    <img src={logoURL} alt={applicants.workerName} className='rounded-full w-12' />
                </div>
                <div>
                    <div className='flex items-center'>
                        <box-icon size='18px' name='time'></box-icon>
                        <span className='pl-1 text-blue-800'>{applicants.workerName} </span>
                    </div>
                    <h1 className='font-bold text-md lg:text-lg'>{applicants.workerEmail}</h1>
                </div>
            </div>
            <div>
                <p className='text-sm py-4'>{applicants.workerEmail}</p>
            </div>
            {/* Footer - apply now and location */}
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                    <box-icon size='19px' name='pin'></box-icon>
                    <span className='pl-2'>{applicants.workerEmail} </span>
                </div>
                
                            
            </div>
               <div className='flex flex-row  justify-evenly w-100%'>
                
                <div>
                    <button className=' lg:block bg-green-500 text-white text-sm py-1 px-4 rounded-md'>View Profile</button>
                </div>
                <div>
                    <button  onClick={confirmAssign} className=' lg:block bg-green-500 text-white text-sm py-1 px-4 rounded-md'>Assign task</button>
                </div>
                </div>

                <div>
                {assign?
                        <div className='flex bg-white flex-col  p-2 rounded-xl  -rotate-20  sticky'>
                            <div className='flex'>
                           <div className='flex flex-row'> <p>Confirm Payment before assigning    <span className=' font-bold text-red-800  font-bold '>
                            {`@${applicants.workerName}`}   </span> ,once assigned No reassigng  </p></div>
                            <img src={logoURL} alt='Logog' w className='w-12 rounded-full'/>
                            </div>


                             <div className='flex flex-row  justify-evenly w-100%'>
                
                <div>
                    <button  onClick={cancelAssign}           className=' lg:block bg-primary text-white text-sm py-1 px-4 rounded-md'>Cancel</button>
                </div>
                <div>
                <button     onClick={(username,userId,userEmail)=>sendPayments(applicants.workerName,applicants.workerId,applicants.workerEmail)}
                className=' lg:block bg-primary text-white text-sm py-1 px-4 rounded-md'>Confirm</button>
                </div>
                </div>
                           

                            </div>       
                            :""}        
                            </div>       

                                  
                            
        </div>
    
    )
    
}