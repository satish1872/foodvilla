import './App.css';
{/* Header, 
      logo
      navBar/navitems(List item)
      cart to checkout
  
      body,
        search bar
        resturantList 
          resturant card(resturant info..)
            -image
            -name 
            -rating
            -cuisines

 
      footer, 
        LINKS
        copyright
 
 */}

 // config driven UI  
 const restaurantList=[
  {
    type:"resturants",
    data:{ 
         name:"Burger King",
         image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/blj0wgwbliwovpk85vcm',
         cousine:["Burger","American"],
         rating:"4.251"
      },
  },
  {
    type:"resturants",
    data:{ 
         name:"Burger King2",
         image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/blj0wgwbliwovpk85vcm',
         cousine:["Burger","American"],
         rating:"4.231"
      },
  },
  {
    type:"resturants",
    data:{ 
         name:"Burger King3",
         image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/blj0wgwbliwovpk85vcm',
         cousine:["Burger","American"],
         rating:"4.213"
      },
  },
  {
    type:"resturants",
    data:{ 
         name:"Burger King",
         image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/blj0wgwbliwovpk85vcm',
         cousine:["Burger","American"],
         rating:"4.251"
      },
  },
  {
    type:"resturants",
    data:{ 
         name:"Burger King2",
         image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/blj0wgwbliwovpk85vcm',
         cousine:["Burger","American"],
         rating:"4.231"
      },
  },
  {
    type:"resturants",
    data:{ 
         name:"Burger King3",
         image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/blj0wgwbliwovpk85vcm',
         cousine:["Burger","American"],
         rating:"4.213"
      },
  },
  {
    type:"resturants",
    data:{ 
         name:"Burger King",
         image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/blj0wgwbliwovpk85vcm',
         cousine:["Burger","American"],
         rating:"4.251"
      },
  },
  {
    type:"resturants",
    data:{ 
         name:"Burger King2",
         image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/blj0wgwbliwovpk85vcm',
         cousine:["Burger","American"],
         rating:"4.231"
      },
  },
  {
    type:"resturants",
    data:{ 
         name:"Burger King3",
         image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/blj0wgwbliwovpk85vcm',
         cousine:["Burger","American"],
         rating:"4.213"
      },
  }
 ]


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

 const HeaderComponent=()=>{
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

 const burgerKing={
  name:"Burger King",
  image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/blj0wgwbliwovpk85vcm',
  cousine:["Burger","American"],
  rating:"4.2"
 }

 const ResturantCard=({name,cousine,rating,image})=>{
  // console.log(cousine)
  // const {name,cousine,rating,image}=props.data
  return <>
    <div className='card'>
      <img src={image}/>
      <h2>{name}</h2>
      <h3>{cousine.join(" ")}</h3>
      <h4>{`${rating} stars`}</h4>
    </div>
  </>
 }

 const Body=()=>{
  return (<div className='resturant-list'>
  {
    restaurantList.map(restaurant=>{
      return <ResturantCard {...restaurant.data}/>
    })
  }
 </div>)
 }

 const Footer=()=>{
  return <>
   <h5>Footer</h5>
  </>
 }
const AppLayout=()=>{
 return <>
  <HeaderComponent/>
  <Body/>
  <Footer/>
 </>
}

function App() {
  return (
    <>
    <AppLayout/>
    </>
  );
}

export default App;
