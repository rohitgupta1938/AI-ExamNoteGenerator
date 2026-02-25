import axios from "axios";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice.js";
export const getCurrentUser = async (dispatch) => {
  try {
    let result = await axios.get(serverUrl + "/api/user/currentuser", {
      withCredentials: true,
    });
    console.log("SUCCESS:", result.data);
    dispatch(setUserData(result.data));
  } catch (err) {
    console.log(err);
  }
};

export const generateNotes = async (payload) => {
  try {
    const result = await axios.post(
      serverUrl + "/api/notes/generate-notes",
      payload,
      { withCredentials: true }
    );

    console.log(result.data);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
