import React, {useState} from 'react';
import styled from 'styled-components';
import {useInterval} from "react-use";
import 'animate.css';
import Sparkles from 'react-sparkle'
import Particle from "../Components/Particle";



function ShitRain() {
  
  
    return (
     
      
      <SuperContainer  >
        <div className="particle-con">
        <Particle />
      </div>
          <div className="typography" >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
              <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
              <EmojiContainer >
              <span className={"container"} >
                  <h3>  Keep scrolling  ✨🔮 (｡･ω･｡)つ━☆・*・゜+.</h3>
                  <Sparkles
      color="red"
      count={60}
      minSize={7}
      maxSize={12}
      overflowPx={10}
      fadeOutSpeed={30}
      flicker={false}
    />
              </span>
              </EmojiContainer>
              </h1>
            </div>  
          
          </div>
                
            
            
          
       
      </SuperContainer>
     
      
        

    );
  }

 
  
const SuperContainer = styled.div`
background: #E6E6FA;
.typography {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 80%;


display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;

const EmojiContainer = styled.div`
@keyframes falldown {
  0% { margin-top: 0; }
  100% { margin-top: 600px; }
}



font-size: 48px;
animation-name: falldown;
animation-duration: 4s;
animation-fill-mode: forwards;

.container {
  position: relative; /* mandatory */
}
.container2{ 
  position: relative;
  top: -70px;
  width: 500px;
  height: 500px;
}

.arc {
  position: absolute;
  right: -3rem;
  width: 120%;
  height: 100%;
  
  circle {
    cx: 50%;
    cy: 100%;
    r: 53.5%;
    fill: transparent;
    stroke-width: 2;
    stroke: white;
    transform-origin: 50% 50%;
    transform-box: fill-box;
    stroke-dasharray: 1870;
    stroke-dashoffset: 1870;
    animation: offset 2.5s ease-out 1s forwards;
  }
}

@keyframes offset {
  to { stroke-dashoffset: 0 }
}
`;




export default ShitRain;

