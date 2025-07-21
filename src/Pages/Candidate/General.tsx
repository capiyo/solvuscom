import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Profile } from '../../components/Home/profile';
import { PostJob } from '../Employer/PostJob';
import  {ProfileInfo} from "./ProfileInfo"
import {SimilarJobs} from "../../components/SimilarJobs"

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ background:"#ffffff",   height:"700px" ,  borderRadius:"10px" ,width: '800%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList    sx={{background:"#43A047", borderBottomLeftRadius:"20px" ,borderBottomRightRadius:"20px"}}    onChange={handleChange} aria-label="lab API tabs example">
            <Tab  label="Info" value="1" />
            <Tab label="Update" value="2" />
   
          </TabList>
        </Box>
        <TabPanel value="1"><ProfileInfo/></TabPanel>
        <TabPanel value="2"><Profile/></TabPanel>
      </TabContext>
    </Box>
  );
}
