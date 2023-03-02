import React, { useState } from 'react'
import { restaurantList } from './config'
import  ResturantCard  from './ResturantCard'



const Body=()=>{
  const [searchTxt,setSearchTxt]=useState('');
  const [restaurants,setResturants]=useState(restaurantList);
    
  function filterData(searchTxt,restaurants){
    return restaurants.filter(restaurant=>{
          // console.log(restaurant)
          if(restaurant.data.name.includes(searchTxt))
           return restaurant
        })
  }

  return (<div >
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
      // need to filter data from resturant list
      const data=filterData(searchTxt,restaurantList);
      setResturants(data);
    }}>Search</button>
  </div>
    <div className='resturant-list'>
     { restaurants.map(restaurant=>{
      return <ResturantCard {...restaurant.data}
      />
    })}
    </div>
  
 </div>)
 }

export default Body