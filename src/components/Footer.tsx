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
import PostIcon from "@mui/icons-material/Add"

import { Profile } from './Home/profile';
import { PostJob } from '../Pages/Employer/PostJob'
import General from '../Pages/Candidate/General';
import { SimilarJobs } from './SimilarJobs';
import { Chats } from './Home/Chats';

export  function Footer() {
    const [value, setValue] = React.useState('recents');
    const [height, setHeight] = React.useState("h-[20px]");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
       // setHeight("h-[50px]");

    };

    return (
        <div className={`flex bg-green-500    w-full ${height} items-end `}>
            <div className=' flex w-[400px]  absolute  mb-[50px]  mt-[100px]'> {value==="account"?<General/>:""}</div>
            <div className=' flex w-[400px]  absolute  mb-[50px] mt-[100px]'> {value==="chats"?<Chats/>:""}</div>
            <div className=' flex w-[400px]  absolute  mb-[50px] mt-[100px]'> {value==="post"?<PostJob/>:""}</div>

            <BottomNavigation sx={{  borderTopLeftRadius:"5px" ,borderTopRightRadius:"5px", width:"100vw" ,background:"#22c55E"}} value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Account"
                value="account"
                icon={<AccountIcon />}
            />
              <BottomNavigationAction
                label="Post"
                value="post"
                  icon={<PostIcon />}
              
            />
           

            <BottomNavigationAction
                label="Chats"
                value="chats"
                icon={<MessageIcon />}
            />
          
         
        </BottomNavigation>
        </div>
    );
}

