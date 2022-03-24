import React from "react";
import styled from "styled-components";
import backgroundsvg from "../img/behemoth-black-hole-found-in-an-unlikely-place.jpg";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { DragControls } from 'three/examples/jsm/controls/DragControls'

import Arreglado from "../img/gltf/Arregladoxd"

export default function HeroBackground() {

  window.addEventListener('resize', onWindowResize, false)
  function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      render()
  }
  
    return (
      
      <Wrapper>
        <Canvas className="canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Arreglado />


        </Suspense>
      </Canvas>
        
        

      </Wrapper>
    );
  }
  
  const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 1300px;
    text-align: center;
    overflow: hidden;
    margin: 0;
    background-size: 1440px;
    background-image: url(${backgroundsvg});
    .canvas {
      width: 100%;
    }
    @media (max-width: 1440px) {
      
    }

  `;
  
  const Wave = styled.div`
    position: absolute;
    width: 100%;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
    @media (max-width: 1440px) {
      width: 100%;
    }
  `;
  
  const Wave1 = styled(Wave)`
    height: 1440px;
   
    
  `;

