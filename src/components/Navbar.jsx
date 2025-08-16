import React, { useState, useEffect,useRef } from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'
import { LoginContext } from './ContextProvider/Context.jsx';
import 'boxicons';
import { FaBrain,FaBriefcase,FaTree,FaHome,FaPeopleArrows,FaWpforms} from 'react-icons/fa';
import  "./nav.css"
import logoURL from '../assets/img/mana.jpeg'
import Chaturl from '../assets/img/suit.png.png'
import { BiChat } from "react-icons/bi";
import { FaBell, FaSearch } from "react-icons/fa";
import { FaChevronDown, FaChevronRight, FaGears, FaMessage,FaBackward } from "react-icons/fa6";
import { FiTable } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { MdOutlineHeadsetMic, MdSpaceDashboard } from "react-icons/md";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";
import {FaHeart}  from "react-icons/fa"
import { LogOut } from 'lucide-react';
import { toast } from 'react-toastify';
import {useDispatch,useSelector} from "react-redux";
import {Profile} from "./Home/profile.jsx";
import Account from "../Pages/Candidate/Account.jsx";
import {Footer} from "./Footer.jsx";
import {Login} from "./Login/Login.jsx"
import SwipeableViews from "react-swipeable-views";
import { Register } from './Login/Register.jsx';
import LabTabs from '../Pages/Candidate/General.js';
import { Pending } from './Home/Pending.jsx';
import { Chats } from './Home/Chats.jsx';
import { PostJob } from '../Pages/Employer/PostJob.jsx';
import General from "../Pages/Candidate/General.js"
import { WorkerOverlay } from './Case/workeOverlay.jsx';
import Backdrop from '@mui/material/Backdrop';
//import { useSelector,useDispatch } from 'react-redux';

const employerNavItems = [
    { label: 'Home', path: '/' },
      { label: 'Pending', path: '/pending' },
     { label: 'about us', path: '/post-job' }, 

      
     
     
     

    

];
const coordinatorNavItems = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/coordinator/review' },
    { label: 'Candidates', path: '/shortlist' }
];
const recruiterNavItems = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/recruiter/review' }
];
const candidateNavItems = [
    { label: 'Home', path: '/' },
    { label: 'All Jobs', path: '/all-posted-jobs' },
    { label: 'Dashboard', path: `/my-jobs` }
];

export const Navbar = () => {

    const [loginData, setLoginData] = useState();
     const myOverlay=useSelector((state)=>state.overlay)
        let menuRef = useRef();

    const [navItems, setNavItems] = useState([
        { label: 'Home', path: '/' },
        { label: 'All Jobs', path: '/all-posted-jobs' },
        
    ]
    );


    const handleClick=()=>{
        

    }
    const renderOverLay=()=>{
        if(myOverlay==="Pending"){
               return(
              <div className='flex  absolute bottom-0 right-0  w-[600px] z-50'><Pending/></div>
        )


        }
        else if(myOverlay==="Chats"){
               return(
          <div className='flex  absolute bottom-0 right-0  w-[600px] z-50'><Chats/></div>
        )

        
        }
         else if(myOverlay==="Mathematics"){
               return(
          <div className='flex  absolute bottom-0 right-0  w-[600px] z-50'><Pending/></div>
        )
    }
         else if(myOverlay==="My Account"){
               return(
          <div className='flex  absolute bottom-0 right-0  w-[600px] z-50'><General/></div>
        )
        

        
        }

        else if(myOverlay==="Post Gig"){
               return(
          <div   className='flex  absolute bottom-0 right-0  w-[600px] z-50'><PostJob/></div>
        )
    }
        
        else if(myOverlay==="chatpage"){
               return(
          <div   className='flex  absolute bg-slate-400 bottom-0 right-0 z-50'><WorkerOverlay/></div>
        )

        
        }
          else if(myOverlay==="close"){
               return(
          <div></div>
        )

        
        }      
     
        

    }

    const dispatch=useDispatch();

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handlerIsMenuOpen = () => setIsMenuOpen(!isMenuOpen);
    const[navBg,setnavBg]=useState('bg-gradient-to-r from-white to-pink-700')
    const[overlay,setOverlay]=useState("")
    const [height,setHeight]=useState("h-[50px]");

    useEffect(() => {

        let token = localStorage.getItem("user");
        const user = JSON.parse(token);
        setLoginData(user)
        console.log(loginData)
    }, [])


    useEffect(() => {
        setNavItems(employerNavItems)
        
            //const { loginData, setLoginData } = useContext(LoginContext);
        

       /* if (loginData) {
            const role = loginData.role;
            const  bossId=loginData.userId 
            

            if (role === "employer") {
                setNavItems(employerNavItems)
                console.log(loginData.phoneNumber +"Hellllloooo capiyo thhe")
            }
            else if (role === "coordinator") {
                setNavItems(coordinatorNavItems)
                console.log(loginData +"Hellllloooo capiyo thhe")
            }
            else if (role === "recruiter") {
                setNavItems(recruiterNavItems)
                console.log(loginData +"Hellllloooo capiyo thhe")
            }
            else if (role === "candidate") {
                setNavItems(candidateNavItems)
                console.log(loginData +"Hellllloooo capiyo thhe")
            }
            else{
                  setNavItems(employerNavItems)

            }
            

            

        }
            */
    }, [loginData])
    


    const logoutHandler = async () => {
        await fetch('https://solvus-api-4.onrender.com/auth/logout', {
            method: "POST",
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    setLoginData(null)
                    localStorage.removeItem("usertoken")
                    window.location.href = "/";
                    toast("You have successfully logged out")
                }
            })
    }

    const overlayHandler=(overlay)=>{    
        setOverlay(overlay)
        console.log(overlay)
        dispatch({type:"overlay",payload:overlay})
        setHeight("h-screen")

    }

    useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        //setOpen(false);
        changeOverlay("close")
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  const changeOverlay=(overlay)=>{
    dispatch({type:"overlay",payload:overlay})


    console.log(overlay)


  }

  const tryOverlay=()=>{
      //dispatch({type:"footerOverlay",payload:"chats"})
       dispatch({type:"footerOverlay",payload:"chats"})
    
  }

     

    return (
        <div  ref={menuRef}   className='max-w-screen text-sm lg:h-[1050px] item-center  mx-auto  sm:h-screen  fixed  xl:px-16  px-1  '>

            <nav  className={` flex justify-between   t-0 w-100%    rounded-b-lg items-center   py-1` }>
                {/* BRAND */}
                <NavLink to='/' className='hidden md:flex gap-2 text-2xl text-purple-600  '>
                    <p  className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={Chaturl} className="rounded-md  h-12 md:h-16 border-blue-800  " alt="Flowbite Logo" />
                    </p>
                    <div className='flex flex-col text-sm'>
                        <div id='finde'   className='w-[200px]'>
                    <span id='title' className='font-extrabold text-xl md:text-3xl text-green-500'>
                        Solvus<FaTree/>
                        </span>
                        </div>
                        <span className='' >We value trust,

                        </span>
                        <span className=''>
                            And gig quality
                        </span>
                        </div>
                </NavLink>

                {/* MAIN MENU - Lg device */}
                {
                    navItems &&
                    <ul className="hidden md:flex gap-12 font-bold   rounded-xl p-4">
                        {navItems.map(({ label, path }) => (
                            <li key={path} className='text-base text-green-500'>
                                
                                <NavLink
                                    to={path}
                                    className={({ isActive }) => isActive ? "active " : ""}
                                >
                                    <div className='flex flex-row'>
                                    <FaHeart/>
                                    <span>{label}</span>
                                    </div>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                }
                
                <div   onClick={()=>overlayHandler("Chats")}       className='flex hidden md:flex text-green-500 font-bold  cursor-pointer'>
                    <FaMessage/>
                                            Notifications</div>
           <div className='flex  hidden  md:flex'>
            
            <input   onChange={console.log("Love")} className='rounded-xl p-1  border-2 border-red-900 hover:border-blue-700' type='search'  value={"search"}/>
                <div className='flex rounded-xl p-1 border-blue-800'><FaSearch/> </div>
                </div>
                 {localStorage.getItem("usertoken")?
                 <div className='flex flex-row w-[400px] justify-between mr-3 ' >
                                 <div  onClick={logoutHandler} className='mr-7 flex md:flex lg:flex cursor-pointer  hover:text-red-900'>logout</div> 
                                 <Link   to="/home" className='mr-7 flex md:flex lg:flex cursor-pointer  hover:text-red-900'><FaBackward/>Back</Link> 

                                 <div   onClick={tryOverlay} className='flex md:flex l cursor-pointer  lg:hidden hover:text-red-900'>notifications</div> 
                                 
                                 </div>:
                                 


                                    <Link to="/login" className='sm:flex   lg:hidden'>Login</Link>
                                    
                                 }

                <div>





                    {
                        localStorage.getItem("usertoken") ?
                            <div className='md:block hidden  '>

                                <div className='flex flex-col  '>
                                    <div className='flex flex-col w-[80px]  sm:fixed md:relative lg:relative  items-center bg-green-500 rounded-full '>                                     
                                
                                         <img src={logoURL} alt={'companyName'} className='w-12 rounded-full  ' />
                                             <div className='family-rubik    md:flex lg:flex'>{loginData && loginData.userName}</div>
                                   
                                     </div>
                                         <div className='text-black hidden   md:block cursor-pointer'>{loginData && loginData.userEmail}</div>
                                  
                                   
                                 

                            

                                </div>
                            </div>
                            :
                            <div className='text-base text-primary font-medium space-x-5 hidden md:block'>
                                
                                <Link to="/login" className='py-2 px-5  bg-green-500 border rounded  sm:flex'>Login</Link>
                        
                            </div>
                    }
                </div>

                {/* HAMBURGER MENU */}
                <div className="text-primary md:hidden hidden  flex justify-end items-center gap-2">
                    <box-icon name={isMenuOpen ? "x" : "menu"} size="md" color="text-primary" onClick={handlerIsMenuOpen}></box-icon>
                </div>


            </nav>

            {/* MAIN MENU sm device */}
            <div className={` ${isMenuOpen ? "" : "hidden"} font-bold px-4  py-2 fixed  flex flex-col  w-full    bg-green-500  rounded-xl`}>
                <ul className="md:hidden  flex  ">
                    {isMenuOpen && navItems.map(({ label, path }) => (
                        <li key={path} className='text-base text-primary first:text-black py-1'>
                            <NavLink
                                to={path}
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                <span onClick={() => setIsMenuOpen(!isMenuOpen)}>{label}</span>
                            </NavLink>
                        </li>
                    ))}
                    <div onClick={(title)=>overlayHandler("profile")}    className='flex flex-row '>Account</div>
                    
                    {/* Login/signup sm-device */}
                    <div>
                        {
                            localStorage.getItem("usertoken") ?
                                <div>
                                    {/* Hello, {loginData.user.userName} */}
                                    <div onClick={logoutHandler} 
                                    className='border rounded'>
                                    Logou</div>
                                </div>
                                :
                                <li onClick={() => setIsMenuOpen(!isMenuOpen)}><Link to="/login" className='py-1 text-primary'>Login</Link></li>
                        }
                    </div>
                </ul>
            </div>
            
              {myOverlay !=="close"? renderOverLay()
        :""
          }          


          <div        className=' flex absolute  bottom-20 h-16   lg:hidden '> <Footer/></div>
        


            <Outlet />
        </div>
    )
}

