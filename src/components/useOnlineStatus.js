import {useState,useEffect} from 'react';
const useOnlineStatus=()=>{
    const [online,setOnline]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnline(false);
        })
    })
    return online;
}
export default useOnlineStatus;