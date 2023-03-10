import React, { useEffect, useState } from 'react'
import { restaurantList } from './config'
import  ResturantCard  from './ResturantCard'
import Shimmer from './Shimmer';



const Body=()=>{
  const [searchTxt,setSearchTxt]=useState('');
  const [allRestaurants,setAllRestaurants]=useState([]);
  const [filterredRestaurants,setFilterredRestaurants]=useState([]);

  console.log(allRestaurants);
  
  useEffect(()=>{
    // console.log("rerender")
    // useEffect is best place for making API calls
    getRestaurants().catch((err)=>{
      throw new Error(err);
    });
  },[])

  async function getRestaurants(){
    const data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING`);
    const  json=await data.json();
    console.log(json.data.cards[2].data.data.cards);
    setFilterredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }



    
  function filterData(searchTxt,restaurants){
    return restaurants.filter(restaurant=>{
          // console.log(restaurant)
          const name=restaurant?.data?.name.split(" ");
          for(let word of name){
            if(word?.toLowerCase()==searchTxt.toLowerCase())
           return restaurant
          }
        })
  }

  console.log("render");

  if(!allRestaurants)
  return null;

 /*  if(filterredRestaurants?.length==0)
  return <h4>No Resturant match your filter!!</h4>
 */
 

  if( allRestaurants?.length!=0)
  {
    return (
  <>
  <div className='search-container'>
    <input type={'text'} className="search-input" 
    placeholder='Search'
    value={searchTxt}
    onInput={(e)=>{
      setSearchTxt(e.target.value)
      // console.log(searchTxt)
    }}
    />
    <button className='search-btn' onClick={()=>{
      // need to filter data from allrResturant list
      const data=filterData(searchTxt,allRestaurants);
      setFilterredRestaurants(data);
    }}>Search</button>
  </div>
    <div className='resturant-list'> { filterredRestaurants.map(restaurant=>{
      return <ResturantCard {...restaurant.data}
      />
    })}
    </div>
  
 </>)} 
  else
    return (<Shimmer/>)
    
 }

export default Body