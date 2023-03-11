import React, { useEffect, useState } from 'react'
import { FETCH_MENU_URL } from '../components/config';

/* hooks are just like normal function which takes some input paramas and return some data */

  function useRestaurant(id) {
  const [restaurant,setRestaurant]=useState(null)
  // console.log("from useresturant "+id)
  async function getRestaurantsInfo(){
    const data=await fetch(`${FETCH_MENU_URL}${id}`);
    const json=await data.json();
    console.log(json.data) 
    // console.log(Object.values(restaurant?.menu?.items))
    setRestaurant(json.data);
  }
 useEffect( ()=>{
  getRestaurantsInfo();
 },[])
  return restaurant;
}

export default useRestaurant