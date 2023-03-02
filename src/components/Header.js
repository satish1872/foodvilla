import React from 'react'


const Title=()=>{
  return <>
 <a href='/'>

 <img src='https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg'
  alt='Food Villa'
  width={`100px`}
  />
 </a>
  </>
 }

  const Header=()=>{
  return (
    <>
    <div className='header'>
      <Title className="logo"/>
      <div className='nav-items'>
        <ul className="mylists">
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
    </>
  )
 }

 export default Header
