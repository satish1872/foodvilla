import React from "react";

/* utils/ helper/ common/ shared  */
export function filterData(searchTxt,restaurants){
  return restaurants.filter(restaurant=>{
        // console.log(restaurant)
        const name=restaurant?.data?.name.split(" ");
        for(let word of name){
          if(word?.toLowerCase()==searchTxt.toLowerCase())
         return restaurant
        }
      })
}

