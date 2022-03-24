import React from 'react'
import styled from 'styled-components';

import { Typewriter } from 'react-simple-typewriter'
import Particle from "../Components/Particle";
import Sparkles from 'react-sparkle'

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


import { ParallaxProvider } from "react-scroll-parallax"

import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'

import Parallaximg from '../Components/ParallaxImg';

import nasabh from "../img/wp-png.png";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());




function AboutPage() {
    return (
      <ScrollContainer>        
        
        <AboutStyled >
            
            <div className="particle-con" style={{
        backgroundColor: '#F8F8F8',}}>
               
              <ParallaxProvider>
                <Parallaximg imgsrc={nasabh} width="100%" height="100%" blur={{ min : -1, max: 5}}>

                <Particle />

                </Parallaximg>

              </ParallaxProvider>
             
                <div className="typography"> 
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
                  <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
                  {' '}
                    


                    
        <h1  className="split left"><span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Site under construction ', 'Keep scrolling']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          <Sparkles
      color="red"
      count={60}
      minSize={7}
      maxSize={12}
      overflowPx={10}
      fadeOutSpeed={30}
      flicker={false}
    />
        </span></h1>
        
        </h1>

                  </div>
                </div>
                
              
            </div>

        </AboutStyled >
        
      </ScrollContainer> 
        
        
    )
}




const AboutStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%; 
  }

  .split {
    position: fixed;
    top: 0;
    padding-top: 20px;
  }
  
  .left {
    left: 0;
  }
  
  .right {
    right: 0;

  }
  
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .centered img {
    width: 150px;
    border-radius: 50%;
  }

  .Example {
    display: flex;
    font-size: 30px;
    margin-bottom: 20px;
    font-family: 'Trebuchet MS';
  
    &__blinker {
      animation: blinker 0.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
      
      @keyframes blinker {
        to {
          opacity: 0;
        }
      }
    }
  }
`;

export default AboutPage;
