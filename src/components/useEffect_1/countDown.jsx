import React, { useState, useEffect } from "react";


export default function CountDown() {
    const [countDown, setCountDown] = useState(180)

    useEffect(() =>{
        const timerId = setInterval(() => {
            // setCountDown(prevState => prevState - 1)
        }, 1000)
        return () => clearInterval(timerId)
    }, [])
    
  return (
    <div>countDown
        <h1>
            {countDown}
        </h1>
    </div>
  )
}
