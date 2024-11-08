// import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../constant/common";
import useRestaurantMenu from "../constant/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu=()=>{

    // const [resInfo,setResInfo]=useState(null);

    const {resId}= useParams();
    // console.log(params)

    const resInfo = useRestaurantMenu(resId);
    

//    useEffect(()=>{
//     fetchMenu();
//    },[]);

//  const fetchMenu= async ()=>{
//     // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5752184&lng=78.4232303&restaurantId=639522&catalog_qa=undefined&submitAction=ENTER");
//     const data = await fetch( MENU_API + resId );
//     const json = await data.json();
//     console.log(json);
//     setResInfo(json.data);
//  };

 if(!resInfo) return <Shimmer/>;
const{name,cuisines,costForTwoMessage}=
resInfo?.cards[2]?.card?.card?.info;

// console.log(resInfo);


const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

const categories =
resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c) =>
    c.card?.card?.["@type"] ===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

// console.log(categories);
console.log(resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);
    return(
      <div className="menu  text-center">
         <h1 className="font-bold  text-2xl  pt-28 ">{name}</h1>
         <p>
          {cuisines.join(",")} - {costForTwoMessage}
         </p>
        

        {/*categories accordions*/}

        {categories.map((category) => (
        <RestaurantCategory 
        key={category?.card?.card?.title}     
        data={category?.card?.card}
        />
        
        ))}
      </div>
    );
};
export default RestaurantMenu;