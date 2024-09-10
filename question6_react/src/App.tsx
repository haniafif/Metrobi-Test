import React, { useState, useRef, useEffect } from 'react'
import { Track, Achilles, Tortoise } from "./styled.ts"; // Import the styled components

function ZenoParadox() {
  const [achillesPosition, setAchillesPosition] = useState(0);
  const [tortoisePosition, setTortoisePosition] = useState(100);
  const achillesRef = useRef(null);
  const tortoiseRef = useRef(null);

  useEffect(() => {
    let animationId:any = null;

    function animate() {
      let newAchillesPosition = 0;
      let newTortoisePosition = 0;
      if (achillesPosition >= tortoisePosition/2 && achillesPosition < tortoisePosition - 15) {
        newAchillesPosition = achillesPosition + 1;
        newTortoisePosition = tortoisePosition + 0.8;
      } else if(achillesPosition >= tortoisePosition -15){
        newAchillesPosition = achillesPosition + 1;
        newTortoisePosition = tortoisePosition + 1.2;
      } else {
        newAchillesPosition = achillesPosition + 1;
        newTortoisePosition = tortoisePosition + 0.5;
      }

      console.log(newAchillesPosition,newTortoisePosition)

      

      setAchillesPosition(newAchillesPosition);
      setTortoisePosition(newTortoisePosition);
    }
    animationId= setInterval(() => animate(), 60); // 16ms = 60fps

    return () => {
      clearTimeout(animationId);
    };
  });

  return (
    <Track>
      <Achilles ref={achillesRef} style={{ left: `${achillesPosition}px` }} />
      <Tortoise ref={tortoiseRef} style={{ left: `${tortoisePosition}px` }} />
    </Track>
  );
}

export default ZenoParadox;