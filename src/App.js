import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { IMG_CDN_URL, restaurantList } from './components/config';
import  ResturantCard  from './components/ResturantCard';
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
 return <>
  <Header/>
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
