import React from 'react'

function Shimmer() {
  return (
    <div className='resturant-list'>
      {Array(10).fill("").map(card=>{
           return <><div className='shimmer-card'>
           </div></>
      })}
    </div>
  )
}

export default Shimmer