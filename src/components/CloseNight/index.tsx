import { CleanCustomers } from "@/store/reducers/customer"
import { useDispatch } from "react-redux"




export default function CloseNight(){

    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=>dispatch(CleanCustomers())}>Close night</button>
        </div> 
    )
}