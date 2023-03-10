import React from "react"

class Profile extends React.Component{
constructor(props){
  super(props);
  // best place to C reate state
  this.state={
    count:0,
    count2:0,
    userInfo:{
      login:"dummy Name",
      id:"dummy id",
    }
  };
  console.log("Constructor");

}

async componentDidMount(){
  console.log("perform action after first render like api calls");
  const userData= await fetch("https://api.github.com/users/satish1872") ;
  const json= await userData.json();
  console.log(json);
  this.setState({
    userInfo:{
      login:json.login,
      id:json.id, 
    }
  })
  this.timer=setInterval(() => {
    console.log("Namaste React Op")
  }, 1000);
}

componentDidUpdate(prevProps,prevState){
  if(this.state.count!=prevState.count){
    prevState.count=this.state.count
  }
  console.log("Component did update");
}

componentWillUnmount(){
  console.log("Component will unmount");
  clearInterval(this.timer);   
}
 
render (){
  return <div>
   <h1>Profile class Component</h1>
   <h2>{this.props.name}</h2>
   <h3>{this.state?.userInfo?.login}</h3>
   <h3>{`id = ${this.state?.userInfo?.id}`}</h3>
   <h5>count from Profile Class Component :{this.state.count}</h5>
   <button onClick={()=>{
    this.setState({
      count:1,
      count2:1
    })
   }}>counterClass</button>
  </div>
}

}

export default Profile