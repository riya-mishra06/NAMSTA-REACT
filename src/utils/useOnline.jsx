import { useState,useEffect } from "react";

const useOnline = () =>{
    const[isOnline,setIsonline] = useState(true);

     useEffect(()=>{
      const handleOnline = () => {
        setIsonline(true);
      };
       const handleOffline = () => {
        setIsonline(false);
      };


        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);
     

        return () => {
            window.removeEventListener("online",handleOnline)
            window.removeEventListener("offline ",handleOffline)
        }
     })

    return isOnline;
}
export default useOnline;