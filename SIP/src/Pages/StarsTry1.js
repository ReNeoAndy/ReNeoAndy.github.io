import styled from "styled-components";
import React, { useState } from 'react';


import { Typewriter } from 'react-simple-typewriter'

import BackgroundStar from "../Components/BackgroundStar";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";



function HomePage() {
   
    
  return (
    <Wrapper className="App">
    <BackgroundStar />
    
    </Wrapper>
   
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
  }
`;


export default HomePage;