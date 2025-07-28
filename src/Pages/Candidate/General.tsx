import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Profile } from '../../components/Home/profile';
import { PostJob } from '../Employer/PostJob';
import  {ProfileInfo} from "./ProfileInfo"
import { green } from '@mui/material/colors';
import {SimilarJobs} from "../../components/SimilarJobs"

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ background:green[300],   height:"700px",width: '100%' ,borderTopLeftRadius:"20px" ,borderTopRightRadius:"20px" , typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList    sx={{background:green[300], borderBottomLeftRadius:"20px",width:'100%',justifyContent:"center" ,borderBottomRightRadius:"20px"}}    onChange={handleChange} aria-label="lab API tabs example">
            <Tab sx={{ textTransform: 'none' }} label="Update" value="2" />
            <Tab  sx={{ textTransform: 'none' }} label="Info" value="1" />
            <Tab sx={{ textTransform: 'none' }} label="History" value="3" />

   
          </TabList>
        </Box>
        <TabPanel value="1"><ProfileInfo/></TabPanel>
        <TabPanel value="2"><Profile/></TabPanel>
        <TabPanel value="3"><Profile/></TabPanel>
      </TabContext>
    </Box>
  );
}
