import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { IMG_CDN_URL, restaurantList } from './components/config';
import  ResturantCard  from './components/ResturantCard';
import  { createBrowserRouter ,Outlet,RouterProvider} from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
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




 const burgerKing={
  name:"Burger King",
  image:IMG_CDN_URL,
  cousine:["Burger","American"],
  rating:"4.2"
 }

 const AppLayout=()=>{
  {/* <About/> //  if path=/about 
   <Body/>
   <Contact/> */}

  return <>
   <Header/>
   {/* Outlet */}
   <Outlet/>
   <Footer/>
  </>
 }

export const appRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout/>, 
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Body/>,
        },
        {  
          path:"/about",
          element:<About/>,
          children:[
            {
              path:"profile",//  patrentPath/{path} => no / because its relative path
              element:<Profile/>
            }
          ]
        },
        {
          path:"/contact",
          element:<Contact/>,
        },
        {
          path:`/restaurant/:id`,
          element:<RestaurantMenu/>,
        },
      ]

    },
  ]
)





function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
