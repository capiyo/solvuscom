import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import AccountIcon from '@mui/icons-material/AccountBox';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MdAccountBox } from 'react-icons/md';
import PostIcon from "@mui/icons-material/AddToPhotos"
import { green } from '@mui/material/colors';
import PauseCircleFilledOutlinedIcon from '@mui/icons-material/PauseCircleFilledOutlined';

import { Profile } from './Home/profile';
import { PostJob } from '../Pages/Employer/PostJob'
import General from '../Pages/Candidate/General';
import { SimilarJobs } from './SimilarJobs';
import { Chats } from './Home/Chatslist';
import { Pause } from 'lucide-react';
import { Pending } from './Home/Pending';
import { useDispatch,useSelector } from 'react-redux';
import { Notifications } from './Home/Notifications';

export  function Footer() {
    const [value, setValue] = React.useState('recents');
    const [height, setHeight] = React.useState("h-[20px]");
    const dispatch=useDispatch()
     const  myValue=useSelector((state)=>state.footerOverlay)

    const handleChange = (event, newValue) => {
             dispatch({type:"footerOverlay",payload:newValue})
             setValue(myValue);
        

       // setHeight("h-[50px]");
  
      console.log(myValue)

    };

        const renderOverLay=()=>{
            if(myValue==="pending"){
                   return(
                  <div className='flex '><Pending/></div>
            )
    
    
            }
            else if(myValue==="chats"){
                   return(
              <div className='flex  '><Chats/></div>
            )
    
            
            }
              else if(myValue==="notifications"){
                   return(
              <div className='flex  '><Notifications/></div>
            )
          }
             
             else if(myValue==="info"){
                   return(
              <div className='flex'><General/></div>
            )
            
    
            
            }
    
            else if(myValue==="post"){
                   return(
              <div   className='flex '><PostJob/></div>
            )
        }
            
           
    
            
            
              
            }


























    return (
        <div className={`flex    w-screen`}>

            {myValue !=="close"?renderOverLay()
            
          :""}

            <BottomNavigation sx={{  borderTopLeftRadius:"5px" ,borderTopRightRadius:"5px", width:"100%" ,background:"white"}} value={value} onChange={handleChange}>
              
            <BottomNavigationAction
                label="Info"
                value="info"
                icon={<AccountIcon   sx={{ color: green[500] }}/>}
            />
           

            
            
          
            <BottomNavigationAction
                label="pending"
                value="pending"
                  icon={<PauseCircleFilledOutlinedIcon  sx={{ color: green[500] }}/>}
              
            />
              <BottomNavigationAction
                label="Post"
                value="post"
                  icon={<PostIcon  sx={{ color: green[500] }}/>}
              
            />
            
            <BottomNavigationAction
                label="Chats"
                value="chats"
                icon={<MessageIcon    sx={{ color: green[500] }}/>}
            />
            
           

            
            
          
         
        </BottomNavigation>
        </div>
    );
}

