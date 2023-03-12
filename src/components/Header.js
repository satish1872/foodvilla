import React, {useEffect, useState} from 'react'
import Logo from  "../assests/img/foodvilla.jpeg"
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'

const Title=()=>{
 {/* src='https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg' */}

  return <>
 <a href='/'>
 <img src={Logo }
  alt='Food Villa'
  className='h-28 border px-2'
  />
 </a>
  </>
 }
 
  const Header=()=>{
  const isOnline=useOnline();
  const [title,setTitle]=useState("Food Villa");
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  useEffect(()=>{
    console.log("use Effect");
  },[])

  console.log("render");

  return (
    <>
    <div class=' flex px justify-between bg-pink-200 ... drop-shadow-lg'>
      <Title/>
      {/* <button onClick={()=>( setTitle("New Title"))} >Change Title</button> */}
      <div className='flex px-10 '>
        <ul className="flex p-1 m-2 py-10 px-10 space-x-2 ...">
          <Link to="/"  class="px-2"><li>Home</li></Link>
          <li class="px-2"><Link to='/about'>About </Link></li>
          <Link to="/contact" class="px-2"><li>Contacts</li></Link>
          <Link to="/cart" class="px-2"><li>Cart</li></Link>
          <Link to="/instamart" class="px-2"><li>Instamart</li></Link>
        </ul>
      </div>
      <h1>{isOnline?'✅ ':'🔴'}</h1>
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
