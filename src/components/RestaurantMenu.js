import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from './config';
function RestaurantMenu() {
  const params=useParams();
  const [restaurant,setRestaurant]=useState({});
  // console.log(params)

  useEffect(()=>{
    getRestaurantInfo();
  },[])

  async function getRestaurantInfo(){
    const data=await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=28.5355161&lng=77.3910265&menuId=229`);
    const json=await data.json();
    // console.log(json.data) 
    setRestaurant(json.data);
    // console.log(Object.values(restaurant?.menu?.items))
    
  }
/* area, restaurantSlug.city , restaurantSlug.restaurant  , avgRating ,costForTwo */
  return (
    <>
    <div>{`Id : ${params.id}`}</div>
    <div>{`Restaurant name: ${restaurant?.name}`}</div>
    <img src={`${IMG_CDN_URL}/${restaurant?.cloudinaryImageId}`}/>
    <div>{`Area: ${restaurant?.area}`}</div>
    <div>{`City: ${restaurant?.restaurantSlug?.city}`}</div>
    <div>{`avgRating: ${restaurant?.avgRating}`}</div>
    <div>{`costForTwo: ${restaurant?.costForTwo}`}</div>
     <ul>{Object.values(restaurant?.menu?.items)
      .map(item=><li>{item?.name}</li>)
     }</ul>
    </>
  )
}

export default RestaurantMenu