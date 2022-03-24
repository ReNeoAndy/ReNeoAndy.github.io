import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
import Particle from "../Components/Particle";
import { Typewriter } from 'react-simple-typewriter'




function HomePage() {
  return (
    
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
        <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
      </div>
      <div className="typography">

        
      <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>Hi, I'm {' '}
        
        
        <h2><span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['ReNeoAndy_', '']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span></h2>
        
        </h1>
    


        
      </div>///este div no se borra.
    </HomePageStyled>
  );
}



const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .arrows {
    width: 60px;
    height: 72px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    bottom: 150px;
  }
  
  .arrows path {
    stroke: #2994D1;
    fill: transparent;
    stroke-width: 1px;	
    animation: arrow 2s infinite;
    -webkit-animation: arrow 2s infinite; 
  }
  
  @keyframes arrow
  {
  0% {opacity:0}
  40% {opacity:1}
  80% {opacity:0}
  100% {opacity:0}
  }
  
  @-webkit-keyframes arrow /*Safari and Chrome*/
  {
  0% {opacity:0}
  40% {opacity:1}
  80% {opacity:0}
  100% {opacity:0}
  }
  
  .arrows path.a1 {
    animation-delay:-1s;
    -webkit-animation-delay:-1s; /* Safari 和 Chrome */
  }
  
  .arrows path.a2 {
    animation-delay:-0.5s;
    -webkit-animation-delay:-0.5s; /* Safari 和 Chrome */
  }
  
  .arrows path.a3 {	
    animation-delay:0s;
    -webkit-animation-delay:0s; /* Safari 和 Chrome */
  }


  
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
