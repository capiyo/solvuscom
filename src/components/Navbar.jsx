import React, { useState, useEffect } from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'
import { LoginContext } from './ContextProvider/Context.jsx';
import 'boxicons';
import { FaBrain,FaBriefcase,FaTree,FaHome,FaPeopleArrows,FaWpforms} from 'react-icons/fa';
import  "./nav.css"
import logoURL from '../assets/img/mana.jpeg'
import Chaturl from '../assets/img/suit.png.png'
import { BiChat } from "react-icons/bi";
import { FaBell, FaSearch } from "react-icons/fa";
import { FaChevronDown, FaChevronRight, FaGears } from "react-icons/fa6";
import { FiTable } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { MdOutlineHeadsetMic, MdSpaceDashboard } from "react-icons/md";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";
import {FaHeart}  from "react-icons/fa"
import { LogOut } from 'lucide-react';
import { toast } from 'react-toastify';
import {useDispatch} from "react-redux";
import {Profile} from "./Home/profile.jsx";
import Account from "../Pages/Candidate/Account.jsx";
import {Footer} from "./Footer.jsx";
import {Login} from "./Login/Login.jsx"
import SwipeableViews from "react-swipeable-views";
import { Register } from './Login/Register.jsx';

const employerNavItems = [
    { label: 'Home', path: '/' },
      { label: 'Pending', path: '/' },
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

    const [navItems, setNavItems] = useState([
        { label: 'Home', path: '/' },
        { label: 'All Jobs', path: '/all-posted-jobs' },
    ]
    );

    const dispatch=useDispatch();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        
            //const { loginData, setLoginData } = useContext(LoginContext);
        

        if (loginData) {
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
        }
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

    const overlayHandler=(capiyo)=>{
        setOverlay("profile")
        setHeight("h-screen")

    }
   

     

    return (
        <div className='max-w-screen text-sm lg:h-[1050px] item-center  mx-auto  sm:h-screen  fixed  xl:px-16  px-1  '>

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
                
           <div className='flex  hidden  md:flex'>
            <input   onChange={console.log("Love")} className='rounded-xl p-1  border-2 border-red-900 hover:border-blue-700' type='search'  value={"search"}/>
                <div className='flex rounded-xl p-1 border-blue-800'><FaSearch/> </div>
                </div>

                <div  onClick={logoutHandler} className='flex flex col  hidden  md:flex lg:flex cursor-pointer  hover:text-red-900'>Log out</div>

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
                                <Register/>
                                <Link to="/login" className='py-2 px-5 border rounded bg-gray-100'>Login</Link>
                                <Link to="/signup" className=   'bg-green-500 text-white py-2 px-5 border rounded'>Sign Up</Link>
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
                                    Logout</div>
                                </div>
                                :
                                <li onClick={() => setIsMenuOpen(!isMenuOpen)}><Link to="/login" className='py-1 text-primary'>Login</Link></li>
                        }
                    </div>
                </ul>
            </div>
          <div        className='absolute inset-x-0 bottom-5 h-16   lg:hidden'> <Footer/></div>


            <Outlet />
        </div>
    )
}

