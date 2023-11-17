import { useEffect, useState } from "react";

const useObserver = (colorMenu: any)=>{
  const [showClass, toggleShowClass] = useState(false)

    useEffect(()=>{
        if(colorMenu && colorMenu.current){ let observer = new IntersectionObserver((entry)=>{
         entry.forEach((x)=>{
           console.log(x)
           if(x.isIntersecting)toggleShowClass(!showClass)  
     
         })
         });
         observer.observe(colorMenu.current)}
       }, [colorMenu])
       return(showClass);
}
export default useObserver;