import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeitem } from "../store/cartSlice";
import Header from "./Header";
import Empty from "./Empty";

const Cart = () => {
  const cartitems = useSelector((state) => state.cart.items);
const dispatch=useDispatch();
const handleremove=(itemId)=>{
   dispatch(removeitem(itemId))
}
if(cartitems==0){
  return(
  <Empty/>
  )
}
  return (
    <div className="shoping-cart">
      {cartitems &&
        cartitems.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />
            <div className="card-title">
              <h2>{item.title}</h2>
              <h3>Rs  {item.price}</h3>
              <button onClick={()=>handleremove(item.id)}>remove</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
