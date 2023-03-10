import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './ProfileClass'
import ProfileFunctionalComponent from './Profile'


function About() {
  return (
    <useRouteError>
    <div>About Us Page</div>
    {/* <Outlet/> */}
    <Profile name={"AkshayClass"} xyz={"abc"}/>
    <ProfileFunctionalComponent name ={"Akshay"}/>
    <p>this is react bootcamp</p>
    </useRouteError>
  )
}

export default About