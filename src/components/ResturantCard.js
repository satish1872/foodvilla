  const  ResturantCard=({name,cousine,rating,image})=>{
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

 export default ResturantCard
