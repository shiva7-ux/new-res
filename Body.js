import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
// import resList from "../constant/MockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../constant/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants,setlistOfRestaurants] = useState(null);
    const [filteredRestaurant,setfilteredRestaurant]=useState([]);
    const [searchText,setSearchText] = useState("");


    const Restaurantcardpromoted = withPromotedLabel(RestaurantCard);

   //whenever state variable update,react triggers a reconciliation cycle(re-render component)
    // console.log("Body Rendered",listOfRestaurants);
    
    useEffect(() => {
       fetchData(); 
    },[]);
    
    const fetchData = async ()=>{
     const data = await fetch(
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5752184&lng=78.4232303&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
           
 );
     const json = await data.json();
    //  console.log(json);
     setlistOfRestaurants(json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
     setfilteredRestaurant(json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    //  console.log(listOfRestaurants);
     
    };
   
    const onlineStatus = useOnlineStatus();
    if(onlineStatus!=true) 
      return (
      <h1>Looks like you are offline!!please check your connection;</h1>

      );
 
// conditional rendering
    if(!listOfRestaurants){
      return <Shimmer/>;
    };

    return (
    <div className="body  mx-10 pt-24">
       <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" 
          className="border border-solid border-black"
          value={searchText}
          onChange={(e)=>{
             setSearchText(e.target.value);
          }}
          ></input>
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg "
          onClick={()=> {
            console.log(searchText);
            const filteredRestaurant= listOfRestaurants.filter((res)=>
             res.info.name.toLowerCase().includes(searchText.toLowerCase()));

            setfilteredRestaurant(filteredRestaurant);
          } }
          
          >search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-xl"
          onClick={() =>{
            const filteredList= listOfRestaurants.filter(
              (res) => res.info.avgRating>4
            );
            setfilteredRestaurant(filteredList);
          }
 }
 >
    Top Rated Restaurants
          </button>

        </div>
         
       </div>
       
         <div className="res-container    flex flex-wrap items-center">
            
         {filteredRestaurant.map((restaurant) => (
             
              
             <Link 
             key={restaurant.info.id}  
             to={"/restaurants/" + restaurant.info.id}>

              {/* if restaurnat is promoted then add promoted label */}

              {restaurant.info.promoted ?(
                 <Restaurantcardpromoted  resData={restaurant}/> 
              ):(
              <RestaurantCard  resData={restaurant} />
              )}
             </Link>
            ))}
         </div> 
     </div>
    );
 };

export default Body;