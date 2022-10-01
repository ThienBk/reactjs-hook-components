import React, { useState, useEffect } from "react";


export default function UseEffect_height() {

    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() =>{

        const handleResize = () =>{
            setHeight(window.innerHeight)
        }
        window.addEventListener('resize', handleResize)

        //Clean up function
        return () =>{
        window.removeEventListener('resize', handleResize)
        }
    }, [])
  return (
    <div>useEffect_height
        <h1>
            {height}
        </h1>
    </div>
  )
}
