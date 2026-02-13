import axios from 'axios';
import { serverUrl } from '../App';
import {setUserData} from '../redux/userSlice.js'
export const getCurrentUser=async (dispatch)=>{
    try{
        let result =await axios.get(serverUrl+"/api/user/currentuser",{withCredentials:true});
        console.log("SUCCESS:", result.data);
        dispatch(setUserData(result.data));
    }
    catch(err){
        console.log(err);
    }
}