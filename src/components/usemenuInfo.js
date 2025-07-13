import {useState,useEffect} from 'react';
const usemenuInfo=(resId)=>{
    const [menuInfo, setmenuInfo] = useState(null);
     useEffect(()=>{
        fetchMenu()
    },[])


    const fetchMenu = async ()=>{
        const data=await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=`+resId)
        const response=await data.json()
        console.log(response);
        console.log(menuInfo?.cards[2]?.card?.info?.name);
        setmenuInfo(response.data)
    }
    return menuInfo;
}
export default usemenuInfo;