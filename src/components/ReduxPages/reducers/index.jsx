import { combineReducers } from 'redux';

import posts from './posts';
import counter from './counter';
import userDetails from './userDetails';
import opener from './opener';
import  archive from './archive';
import rightPage from "./rightPage"
import caseData from './caseData';
import  gigStatus from './gigStatus';
import overlay from "./overlay";



export const reducers = combineReducers({counter,userDetails,gigStatus,opener,rightPage,caseData,overlay});
