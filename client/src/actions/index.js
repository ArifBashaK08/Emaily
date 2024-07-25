import axios from "axios";
import { FETCH_USER } from "./types";

//Fetching user using action creator
export const fetchUser = () => {
    return (dispatch) => {
        axios
            .get("/api/current_user")
            .then(res =>{
                console.log(res)
                 dispatch({
                type: FETCH_USER,
                payload: res.data
            })
        })
            .catch(err => console.error(err))
    }
}