import React, { useEffect, useState } from 'react'

 function useOnline() {
  const [isOnline,setIsOnline]=useState(true);
  const handleIsOnline=() => {
    setIsOnline(true);
  }

  const handleIsOffline=() => {
    setIsOnline(false);
  }

  useEffect(()=>{
    /* jab online hoga to bas online wala eventListner trigger hoga else Offline wala event */
    /* these tow functions are inside effect becasue i wanted to call these only once=> useeffect(()=>{},[]) */
    window.addEventListener('online', 
    handleIsOnline)
    window.addEventListener('offline',handleIsOffline)
    /* unmounting phase  in return callback function */
    return ()=>{
      window.removeEventListener('online',handleIsOnline)
      window.removeEventListener('offline',handleIsOffline);
    }
  },[])
  console.log("window=",window)
  console.log("online="+isOnline)
  return isOnline
}  

export default useOnline