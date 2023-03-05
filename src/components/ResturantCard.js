 import {IMG_CDN_URL} from './config'
 const  ResturantCard=({name,cuisines,avgRating,cloudinaryImageId})=>{
  // console.log(cousine)
  // const {name,cousine,rating,image}=props.data
  // https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/
  return <>
    <div className='card'>
    <img src={`${IMG_CDN_URL}/${cloudinaryImageId}`}/>
    <h2>{name}</h2>
    <h3>{cuisines.join(" ")}</h3>
    <h4>{`${avgRating} stars`}</h4> 
    </div>
  </>
 }

 export default ResturantCard
