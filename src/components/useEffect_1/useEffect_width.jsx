import React, { useState, useEffect } from "react";

export default function UseEffect_width() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleResize = () =>{
        setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    //clean up function
    return () =>{
        window.removeEventListener('resize', handleResize)

    }
  }, [])
  return (
    <div>
      useEffect_width
      <h1> {width}</h1>
    </div>
  );
}
