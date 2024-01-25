import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Header=()=>{
    const cartitems=useSelector(state=>state.cart.items)
    return(
           <>
           <div className="navbar">
            <div className="logo">
                <h2>logo</h2>
            </div>
            <div className="nav">
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li>About</li>
                    <li>contact</li>
                    <li><NavLink to='/cart'>Cart {cartitems.length}</NavLink></li>
                </ul>
            </div>
           </div>
           </>
    )
}
export default Header