import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { additem } from './store/cartSlice';

const Home = () => {
  const [product,setproduct]=useState([]);
  useEffect(()=>{
    fetchdata();
  },[]);

  const dispatch =useDispatch();
  const handleadd=(item)=>{
    dispatch(additem(item))
  }
  let fetchdata=async()=>{
    const data=await fetch("https://fakestoreapi.com/products/");
    const result=await data.json();
    setproduct(result);
console.log(result)
  }
const handle=()=>{
 const filterrer=product.filter((item)=>item.price<20); 
 setproduct(filterrer);
}
  return (
    <div>
       
       <button onClick={handle} style={{margin:10}}> less price product</button>
     <div className='product-container'>
     {
       product &&  product.map((item,index)=>(
         <div className='card' key={index}>
          <img src={item.image} alt="" />
          <p>{item.title}</p>
          <h5>RS- {item.price}</h5>
          <h4>{item.rating.rate}*</h4>
          <button onClick={()=>handleadd(item)}>Add to cart</button>
         </div>

        ))
      }
     </div>
        
    </div>
  )
}

export default Home