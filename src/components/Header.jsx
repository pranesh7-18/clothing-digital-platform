import './Header.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <img src="https://res.cloudinary.com/df78iww1g/image/upload/v1752501723/logo_qrgqdm.png" className="logo" alt="logo" />
        <nav>
            <ul>
                <li><NavLink to="/"  className={({isActive})=>{
                    let s="linkName"
                    if(isActive) s+=" active"
                    return s;
                }} end>Home</NavLink></li>
                <li><NavLink  to="/shop" className={({isActive})=>{
                    let s="linkName"
                    if(isActive) s+=" active"
                    return s;
                }}>Shop</NavLink></li>
                <li><NavLink  to="/blog" className={({isActive})=>{
                    let s="linkName"
                    if(isActive) s+=" active"
                    return s;
                }}>Blog</NavLink></li>
                <li><NavLink  to="/about" className={({isActive})=>{
                    let s="linkName"
                    if(isActive) s+=" active"
                    return s;
                }}>About</NavLink></li>
                <li><NavLink  to="/contact" className={({isActive})=>{
                    let s="linkName"
                    if(isActive) s+=" active"
                    return s;
                }}>Contact</NavLink></li>
                <li><NavLink  to="/cart" className={({isActive})=>{
                    let s="linkName"
                    if(isActive) s+=" active"
                    return s;
                }}><i className="fa-solid fa-cart-shopping" ></i></NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header