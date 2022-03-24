import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import EmojiRain from "./Pages/EmojiRain";


import { Canvas, useFrame } from 'react-three-fiber'

import { Route, Switch as Switching } from "react-router";
import Switch from "@material-ui/core/Switch";
import { IconButton } from "@material-ui/core";


//Scroll
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import StarsTry1 from "./Pages/StarsTry1";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());



function App() {
  
  return (
    <ScrollContainer>
      <ScrollPage page = {0}>
      <Animator animation={batch(Fade())}>
        <div style={{autoHeight: true, autoWidth: true}}>
          <HomePage/>
        </div>
      </Animator>
      </ScrollPage>

      <ScrollPage page = {1} >
      <Animator animation={batch(Fade())}>
        <div style={{autoHeight: true, autoWidth: true}}>
          <AboutPage/>
        </div>
        </Animator>
      </ScrollPage>
      
      <ScrollPage page = {2} >
      <Animator animation={batch(Fade())}>
        <div style={{autoHeight: true, autoWidth: true}}>
          <EmojiRain/>
        </div>
        </Animator>
      </ScrollPage>
      
      <ScrollPage page = {3} >
      <Animator animation={batch(Fade())}>
        <StarsTry1/>
      </Animator>
      </ScrollPage>



    </ScrollContainer>
       
  );
}

export default App;
