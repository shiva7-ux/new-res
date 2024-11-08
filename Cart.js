import { useSelector } from "react-redux";
import { clearCart } from "../constant/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
const Cart = () => {
     const cartItems = useSelector((store) => store.cart.items);
       console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
    <div className="text-center  pt-24">
      <h1  className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
        >
            Clear cart
            </button>
            {cartItems.length===0 && (
                <h1>Cart is Empty. Add items to the cart!</h1>
            )}
           
          <ItemList items={cartItems}/>
          
      </div>
    </div>
    );
};

export default Cart;