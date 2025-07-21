import React from 'react'
import  Mana from "../../assets/img/mana.jpeg"
import { useEffect,useState } from 'react';
import {useSelector} from "react-redux"
import { FaArrowAltCircleRight } from 'react-icons/fa';
import logoURL from '../../assets/img/laptop.jpeg'
import  manaURL from '../../assets/img/mana.jpeg'
import  judge from '../../assets/img/judge.jpg'

export const Worker = () => {
  const[chats,setChats]=useState()
 const[workerEmail,setWorkerEmail]=useState()
  const[workerName,setWorkerName]=useState()
  const[notification,setNotification]=useState("")
  const [message,setMessage]=useState("")
  const[caseId,setcaseId]=useState("")
 // const[caseTitle,setCaseTitle]=useState("")
  const[posterId, setPosterId]=useState("")
  const [workerId,setWorkerId]=useState("")
  const[messageData,setMessageData]=useState([])
  const[loginData,setLoginData]=useState("")
  const[myId,setMyId]=useState("")
  const[myName,setMyname]=useState("")
     const caseTitel=useSelector((state)=>state.caseData["caseTitle"])
     //const budget=useSelector((state)=>state.)
    const mybudget=useSelector((state)=>state.caseData["budget"])
     console.log(caseTitel +"hello title")
             //console.log(caseId,caseTitel)

  //const[user,setUser]=useState([])

  useEffect(() => {
           let token = localStorage.getItem("user");
           const user=JSON.parse(token)
        //setUser( );
        setLoginData(user)  
        //console.log(user.userId)
        setMyId(user.userId)

        setMyname(user.userName)
       // console.log(myId)
       // setWorkerEmail(user.userEmail)

      
       // console.log(LoginContext["userId"])
       // console.log(typeof(LoginContext))
        //setBossId(loginData.userId)
       // console.log(bossId+"The capiyo")
    }, [])
  //let workerEmail=


   useEffect(() => {

         fetch("https://solvus-api-4.onrender.com/case/getWorkerChats").then(res => res.json()).then(
            data => {
              setWorkerEmail(data.workerEmail)
              setWorkerName(data.workerName)
              setNotification(data.message)
              setcaseId(data.caseId)
              //setPosterId(data.posterId)
              setWorkerId(data.workerId)
                //const newData = data
                //setChats(data)
               // setWorkerEmail(data)
                //setWorkerName(data['workerName'])
//const dataObject = JSON.parse(data);
                console.log(data.workerName)
                console.log(data.posterId)
                //console.log("still getting errror")
                
               
            }



        );
    }, []);


    useEffect(() => {

         fetch("https://solvus-api-4.onrender.com/workerChats/getWorkerChats").then(res => res.json()).then(
            myData => {
             setMessageData(myData)
            console.log(myData)
                //console.log("still getting errror")
                
               
            }



        );
    }, []);



    const handleChange=()=>{
      const data={
        message:message,
        caseId:caseId,
        workerId:workerId,
        posterId:myId
      }

        fetch("http://localhost:5000/workerChats/addWorkerChats", {
            method: "POST",
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(data)
            
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            setMessage("")
        
          //  toast.success("Notiefiled successfully kindly  wait for his reply in your inbox or check thread chat")
            //window.location.href = '/all-jobs';
        })
        .catch((error) => {
            console.log(error);

           // toast.error("Failed to  To Notify,Please try again}");
           // setAssin(false)
        });
      


    }


//setWorkerEmail(chats.workerName)






  return (
    <div className='flex flex-col lg:w-[700px]  relative h-screen '>
      


      <div className='flex flex-row '>
        <div  className='flex flex-col ml-2 w-100%'>
         <div className='flex  flex-col  ' >
             <div className="flex  flex-row">
                                    <div className='family-rubik font-bold text-blue-800'>{caseTitel}</div>
                                    <div className='family-rubik font-bold text-blue-800  ml-2'>{`budget: Ksh${mybudget}`}</div>
             </div>
                                    <div className='flex flex-row'>
                                    <div className='family-rubik'> Admin: Mark , </div>
                                    <div className='family-rubik ml-2'>Agent: {workerName}</div>
                                    </div>
                                      <div className='family-rubik text-green-600'>{'Online'}</div>
                                      </div>

                                    </div>

                                    </div>


                                    {/*Notification*/}
                                  
                                 
                                      <div className='flex flex-col    overflow-scroll   w-full  mb-[150px] '>
                                        <div className=' bg-green-100 rounded-xl p-2  w-full'>{notification}</div>
                                          
                                        
                                        { messageData.map((messageData, key) =>
                                            <div className='w-full'><DisplayMessages    key={key}  messageData={messageData}  myId={myId} /></div>)}
                                         

                                         
                                      </div>


                                   
























<div className='flex flex-row    fixed  bottom-10  
        rounded-xl'>
               <form className='flex flex-row border-blue-800
        rounded-xl'>
                <input  value={message} onChange={(e) => setMessage(e.target.value)} className ="lg:w-[500px]   w-[300px] text-gray-800  rounded-xl p-2    
                  border-2 border-blue-600 hover:border-blue-300
        rounded-xl"       type='textArea'  placeholder='Reply' />
                 <div  onClick={handleChange}   className='text-blue-800   cursor:pointer text-5xl'> <FaArrowAltCircleRight/></div>
                
                </form>           
       </div>                   
                                   
        </div>




      


      
  
  )
}



function DisplayMessages({messageData,myId}){
  console.log("here " +myId)
  if(messageData.posterId  === myId){
    console.log("here " +myId)
    return(
  <div className='flex   float-right   items-end w-full   mt-5'>
      <div className='flex flex-row     '></div>
     
        <div className='flex family-rubik     bg-green-500 p-2 rounded-xl'>{messageData.message} </div>
       <img src={manaURL} alt={'companyName'} className='w-5 rounded-full' />

    </div>
)
  }
  

  else 
  return(
    <div className='flex  mt-5'>
      <div className='flex flex-row'></div>
       <img src={judge} alt={'companyName'} className='w-5 rounded-full' />
      <div className='flex family-rubik    bg-white p-2 rounded-xl'>{messageData.message}</div>
      

    </div>
  )}
  




