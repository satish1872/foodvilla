import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useRestaurant from '../utils/useRestaurant';
import { IMG_CDN_URL } from './config';
import Shimmer from './Shimmer';
function RestaurantMenu() {
  const {id}=useParams();
  console.log("from restumenu"+id)
   const restaurant= useRestaurant(id);

/* area, restaurantSlug.city , restaurantSlug.restaurant  , avgRating ,costForTwo */
  return !restaurant?(
   <Shimmer/>
  ):
  <>
  <div>{`Id : ${id}`}</div>
  <div>{`Restaurant name: ${restaurant?.name}`}</div>
  <img src={`${IMG_CDN_URL}/${restaurant?.cloudinaryImageId}`}/>
  <div>{`Area: ${restaurant?.area}`}</div>
  <div>{`City: ${restaurant?.restaurantSlug?.city}`}</div>
  <div>{`avgRating: ${restaurant?.avgRating}`}</div>
  <div>{`costForTwo: ${restaurant?.costForTwo}`}</div>
   <ul>{Object.values(restaurant?.menu?.items)
    .map(item=><li key ={item?.id}>{item?.name}</li>)
   }</ul>
  </>
}   

export default RestaurantMenu