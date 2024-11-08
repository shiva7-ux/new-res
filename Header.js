import { LOGO_URL } from "../constant/common"; 
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../constant/useOnlineStatus";
// import UserContext from "../constant/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
   const [BtnName,setBtnName]= useState("LOGIN");

   const onlineStatus = useOnlineStatus();

  //  const {loggedInUser} = useContext(UserContext);
  //  console.log(loggedInUser);

  // subscribing to store using a selector
   const cartItems = useSelector((store) => store.cart.items);

    return(
       <div className="flex justify-between  bg-green-200 shadow-md z-50  h-20  fixed mx-0 my-0 w-full">
          <div className="logo-container">
             <img className="w-20 h-20" alt="img2" src={LOGO_URL} ></img>
          </div>
         <div className="flex items-center">
           <ul className="flex m-4 p-4">
              <li className="px-4">
                Online Status:{onlineStatus ? "✅":"❌"}
              </li>
             <li className="px-4">
               <Link to="/">Home</Link>
               </li>
             <li className="px-4">
               <Link to="/about">About Us</Link>
               </li>
             <li className="px-4">
               <Link to="/contact">Contact Us</Link>
               </li>
               <li className="px-4">
               <Link to="/grocery">Grocery</Link>
               </li>

             <li className="px-4 cursor-pointer font-bold"><Link to="/cart">Cart({cartItems.length} items)</Link>
             
             </li>
             <button className="LOGIN  border border-green-300 px-3 py-1  hover:bg-white hover:text-red-500 "
               onClick={()=>{
                  BtnName === "LOGIN"
                  ? setBtnName("LOGOUT")
                  : setBtnName("LOGIN");
               }}
               >
               {BtnName}</button>
               {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
           </ul>
       </div>
       </div>
    );
 };

export default Header; 