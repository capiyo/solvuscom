import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Profile } from '../../components/Home/profile';
import { PostJob } from '../Employer/PostJob';
import  {ProfileInfo} from "./ProfileInfo"
import { useRef,useEffect } from 'react';
import { green } from '@mui/material/colors';
import {SimilarJobs} from "../../components/SimilarJobs"
import { Update } from './Update';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');
const modalRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  // Event listener logic

  return () => {
    document.addEventListener('click', handleClickOutside);
  };
}, []);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      console.log("Capiyo   here")
      //setIsVisible(false);
    }
  };


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className='flex ' ref={modalRef}>
    <Box sx={{ background:"#86EFAC",position:"absolute",bottom:50, marginLeft:"20px",marginRight:"20px" 
     ,height:"700px",width: '70%' ,borderTopLeftRadius:"20px" ,borderTopRightRadius:"20px" , typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList    sx={{background:"#86EFAC", borderTopLeftRadius:"20px",width:'100%',display:"flex",justifyContent: "space-evenly"
          , borderTopRightRadius:"20px"}}   
           onChange={handleChange} aria-label="lab API tabs example">
            <Tab sx={{ textTransform: 'none' }} label="Update" value="2" />
            <Tab  sx={{ textTransform: 'none' }} label="Info" value="1" />
            <Tab sx={{ textTransform: 'none' }} label="History" value="3" />

   
          </TabList>
        </Box>
        <TabPanel value="1"><ProfileInfo/></TabPanel>
        <TabPanel value="2"><Update/></TabPanel>
        <TabPanel value="3"><Update/></TabPanel>
      </TabContext>
    </Box>
    </div>
  );
}
