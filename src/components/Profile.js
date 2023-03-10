import React, { useEffect } from 'react'
import { useState } from 'react';

function Profile(props) {
  const {name}=props;
  const [count,setCount]=useState(0);
  const [count2,setCount2]=useState(0);
  // console.log(name)
   useEffect(()=>{
    console.log("useEffect");
    const timer=setInterval(() => {
      console.log("Namaster react from UseEffect comp")
    }, 1000);

    return ()=>{
      console.log("UseEffect return");
      clearInterval(timer);
    }
   })
   console.log("render");
  return (
    <>
    <div>Profile</div>
    <h3>Count:{count}</h3>
    <button onClick={()=>{
      setCount(1)
      setCount2(1)
    }}>Count</button>
    </>
  )
}

/* class Profile2 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  componentDidMount(){
    console.log('component did mount')
  }


  render(){
    console.log('render called')
    return (
      <>
      <div>Profile</div>
      <h3>Count:{count}</h3>
      <button onClick={()=>{
        this.setState({
          count:1
        })
      }}>Count</button>
      </>
    )
  }
} */

export default Profile