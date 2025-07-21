import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const {pathname} = useLocation()

    useEffect(()=>{
        // Scrolls to top smoothly when path changes
        window.scrollTo({ top: 0, behavior: "smooth" });
    },[pathname])

  return (
    null
  )
}

export default ScrollToTop