// import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useState}  from 'react';
import usemenuInfo from './usemenuInfo';
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = ()=>{
    
    const {resId}=useParams();
    const menuInfo=usemenuInfo(resId);

    // Fetching data can be done through custom hook -----Ep 9 -------- here usemenuInfo is a custom hook
    // const[menuInfo,setmenuInfo]=useState(null);


    // useEffect(()=>{
    //     fetchMenu()
    // },[])


    // const fetchMenu = async ()=>{
    //     const data=await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=`+resId)
    //     const response=await data.json()
    //     console.log(response);
    //     console.log(menuInfo?.cards[2]?.card?.info?.name);
    //     setmenuInfo(response.data)
    // }


    const [showIndex,setshowIndex]=useState(null)

    const restaurantInfo=menuInfo?.cards[2]?.card?.card?.info
    const menu = menuInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(menuInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const itemCards = menu?.itemCards || [];
    if (!restaurantInfo) return <h1>Loading...</h1>; 
    if (!menuInfo) return <h1>Loading...</h1>; 

            const categories = menuInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
                (c) => {
                    const type = c.card?.card?.["@type"];
                    return (
                    type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
                    type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
                    );
                }
                );
            return (
                <div className="text-center">
                    <div className="text-center mb-6">
                        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                            {restaurantInfo?.name}
                        </h1>

                        <p className="text-lg text-gray-600 font-medium mb-1">
                            {restaurantInfo?.cuisines?.join(", ")}
                        </p>


                    <div className="flex justify-center gap-6 mt-2 text-sm text-gray-700">
                        <div className="flex items-center gap-1">
                        ⭐ <span className="font-semibold">{restaurantInfo?.avgRating}</span>
                        </div>
                        <div>|</div>
                        <div className="flex items-center gap-1">
                        ⏱️ <span>{restaurantInfo?.sla?.slaString}</span>
                        </div>
                        <div>|</div>
                        <div className="flex items-center gap-1">
                        💰 <span>{restaurantInfo?.costForTwoMessage}</span>
                        </div>
                    </div>
                    </div>


                    {categories.map((category, index) => (
                        <RestaurantCategory key={index} data={category.card.card} showItems={index==showIndex?true:false} setshowIndex={()=>setshowIndex(index === showIndex ? null : index)}/>
                    ))}
                </div>

    )
}
export default RestaurantMenu;