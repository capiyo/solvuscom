import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoURL from '../../assets/img/laptop.jpeg'
import { toast } from 'react-toastify';
import { LoginContext } from '../ContextProvider/Context';
import { useDispatch, useSelector } from 'react-redux';
import { FaMessage,FaEye } from 'react-icons/fa6';
export const Chats = () => {

    const [applicants, setApplicants] = useState();
    const[chatlist,setChatlist]=useState([])
    const[loginData, setLoginData]=useState(LoginContext)
    //const[id,setId]=useState("")

  
    const[myId,setMyId]=useState("")
    const dispatch=useDispatch()
      useEffect(() => {

        let token = localStorage.getItem("user");
        const user = JSON.parse(token);
                if(user){
                   //  const lastId=JSON.stringify({user.userId})
             //setMyId(user.userId)
                 fetch(`https://solvus-api-4.onrender.com/jobs/getChatlist`).then(res =>res.json()).then(
            data =>( 
                //console.log(data)
              // setApplicants(data)
              setChatlist(data)
                //console.log(applicants)
               
            )

            
        ).catch((error)=>console.log(error));
             
                }

      //  console.log(loginData+"hereeeee")
    }, [])
  

    
      const handleModalClick = (event) => {
        // Stop the click event from bubbling up to parent elements
        event.stopPropagation();
        
      };


    /*useEffect(() => {
        const creds={userId:myId}



        const lastId=JSON.stringify(creds)
        console.log(lastId)
    fetch(`http://localhost:5000/jobs/getRooms/${lastId}`).then(res => console.log("Capiyo")).then(
            data =>( 
                console.log(data)
               
            )

            
        ).catch((error)=>console.log(error));
        
    }, []);
*/

      const  closeOverlay=()=>{

    dispatch({type:"overlay",payload:"close"})
     dispatch({type:"footerOverlay",payload:"close"})
    


  }

  const  setChatPage=()=>{
       dispatch({type:"overlay",payload:"chatpage"})


  }

    

    return (
        <div   className='  cursor-pointer w-[350px]   overflow-y-auto   flex-col absolute bottom-10  h-[700px] bg-white'>
            <div className='flex flex-row justify-evenly  bg-green-200 rounded-t-lg h-10'>
            <h1   onClick={setChatPage} className='text-center text-sm flex   flex-row  ml-2  md:text-sm text-red-300  '><FaMessage/> View</h1>
               <h1   onClick={closeOverlay}   className='text-base  text-center  cursor-pointer text-green-500'>close</h1>


               </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-1   overflow-y-auto container mt-1 mx-auto  px-4 bg-white  rounded-xl '>
                {chatlist.map((people, key) => <Card key={key}  chatlist={people} />)
                }
            
            </div>



        </div>
    )
}

function Card({ chatlist }) {
      const[assign,setAssin]=useState(false)
        const[workerId,setWorkerId]=useState('')
        const[posterId,setPosterId]=useState("")
        const[workerName,setWorkername]=useState("")
        const[loginData,setLoginData]=useState('')
    const[bossPhone,setBossPhone]=useState()
    const dispatch=useDispatch()
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
       fetch("https://solvus-api-4.onrender.com/case/addWorkerChats", {
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
        if(user){
        setMyId(user.userId)
        setPostername(user.userName)
        setPosterEMail(user.userEmail)
          setBossPhone(user.phoneNumber)
        setLoginData(user)
        }

        console.log(myId,posterEmail,posterName,bossPhone)
    }, [myId])


 const  closeOverlay=()=>{

    dispatch({type:"overlay",payload:"close"})
     dispatch({type:"footerOverlay",payload:"close"})
    


  }

  const  setChatPage=()=>{
       dispatch({type:"overlay",payload:"chatpage"})


  }



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

    fetch("https://solvus-api-4.onrender.com/payment/stk/push", {
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


        <div   className='border shadow-lg     w-[300px]       rounded-xl flex-row  bg-white card'>
          
        
            
          <div className='flex gap-3'>
                <div>
                    {/* company image */}
                    <img src={logoURL} alt={chatlist.jobTitle} className='rounded-full w-12' />
                </div>
                <div>
                    <div className='flex items-center'>
                        <box-icon size='18px' name='time'></box-icon>
                        <span className='pl-1 text-black'>{chatlist.jobTitle}</span>
                          <Link to={`/current-job/${chatlist.jobId}`}>
                                            <div  className={`lg:block  text-blue-900 
                                                 mt-10 `}>
                                                <div    onClick={closeOverlay} className='flex flex-row  text-purple-400   sm:text-[9px]  font-bold  lg:text-base '><FaEye/>view </div>
                                                </div>
                                                
                                        </Link>
                       
                    </div>
                    <h1 className='font-bold text-sm lg:text-lg text-black'>{chatlist.role}</h1>
                </div>
            </div>
            <div>
                <p className='text-sm py-1   text-black'  >Hasokom is looking for Django developer to work on their api
                    kindly send request
                </p>
            </div>
            {/* Footer - apply now and location */}
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                    <box-icon size='19px' name='pin'></box-icon>
                    <span className='pl-2   text-black'>{chatlist.budget} </span>
                </div>
                
                            
            </div>
               <div className='flex flex-row  justify-evenly w-100%'>
                
                <div>
                    <button className=' lg:block bg-green-100 text-black text-sm py-1 px-4 rounded-md'>Ksh 3000</button>
                </div>
                <div>
                    <button  onClick={confirmAssign} className=' lg:block bg-blue-600 text-black text-sm py-1 px-4 rounded-md'>Live</button>
                </div>
                </div>

                <div>
               
                            </div>       

                                  
                            
        </div>
    
    )
    
}