
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './Pages/Employer/Home';
import { Navbar } from './components/Navbar';
import { PostJob } from './Pages/Employer/PostJob';
import { AllJobs } from './Pages/Employer/AllJobs';
import { Login } from './components/Login/Login'
import { Register } from './components/Login/Register';
import { RecruiterDashboard } from './Pages/Recruiter/RecruiterDashboard';
import { CoordinatorDashboard } from './Pages/Coordinator/CoordinatorDashboard';
import { JobDetails } from './components/Home/JobDetails';
//import { CandidateProfile } from './Pages/Recruiter/CandidateProfile';
import { ShortlistedCandidates } from './components/ShortlistedCandidates';
import { ShortlistedDetails } from './components/ShortlistedDetails';
import { ApplicationForm } from './Pages/Candidate/ApplicationForm';
import { AssignRecruiter } from './Pages/Coordinator/AssignRecruiter';
//import { Footer } from './components/Footer';
import {AllPostedJobs} from './components/AllPostedJobs'
//import { Dashboard } from './Pages/Dashboard';
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from './components/ContextProvider/Context';
//import { UpdateJob } from './Pages/Employer/UpdateJob';
import { MyJobs } from './Pages/Candidate/MyJobs';
import { FeaturedJobs } from './components/Home/FeaturedJobs';
import {Details} from "./Pages/Candidate/Details";
import {Update} from "./Pages/Candidate/Update";
import { useDispatch, useSelector } from 'react-redux';
import { Pending } from './components/Home/Pending';
function App() {
 // const[loggedIn,setLoggedIn]=useState(false)
 const  loggedIn =useSelector((state)=>state.auth)
 // const {loginData, setLoginData} = useContext(LoginContext)

 console.log(loggedIn)
  

  return (
    <div className="App w-full  overflow-hidden">
    
      
      <Routes>
          
       
          <Route path='/' element={<Navbar />}> 


           <Route path='/' element={<Home />}/>
            <Route path='*' element={<Home />}/>
              <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Register />}/>

            
            
            
            

            
           
            <Route path='/post-job' element={<PostJob />}/>
            <Route path='/all-jobs' element={<FeaturedJobs />}/>
            
            </Route>
            
          


            
      </Routes>
      
      <Routes>
      

        </Routes>

    
    </div>
  );
}

export default App;
