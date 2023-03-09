import React, {useEffect, useState} from 'react'
import Logo from  "../assests/img/foodvilla.jpeg"
import { Link } from 'react-router-dom'

const Title=()=>{
 {/* src='https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg' */}
  return <>
 <a href='/'>
 <img src={Logo }
  alt='Food Villa'
  width={`100px`}
  />
 </a>
  </>
 }

  const Header=()=>{

  const [title,setTitle]=useState("Food Villa");
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  useEffect(()=>{
    console.log("use Effect");
  },[])

  console.log("render");

  return (
    <>
    <div className='header'>
      <Title className="logo"/>
      <button onClick={()=>( setTitle("New Title"))} >Change Title</button>
      <div className='nav-items'>
        <ul className="mylists">
          <Link to="/"><li>Home</li></Link>
          <li><Link to='/about'>About </Link></li>
          <Link to="/contact"><li>Contacts</li></Link>
          <Link to="/cart"><li>Cart</li></Link>
        </ul>
      </div>
      {isLoggedIn?(
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
      ):(
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>
      )}

    </div>
    </>
  )
 }

 export default Header
