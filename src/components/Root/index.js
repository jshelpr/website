import React from "react";
import styled from "styled-components";

import NavBar from "../NavBar";
import Main from "../Main";

const RootWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background: #FFFFFF90;
`;

// Graphic Component 
const Svg = styled.svg`
  height: ${props => props.height};
  width: ${props => props.width};
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  z-index: -1;
  animation: rotate 3s linear infinite;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default class Root extends React.Component {
    render() {
        return(
            <RootWrapper>
            <Svg 
             bottom="100px"
             left="30px"
             width="148" 
             height="154" 
             viewBox="0 0 148 154" 
             fill="none" 
             xmlns="http://www.w3.org/2000/svg">
              <path 
              d="M81.3765 7.72681C102.141 -8.20643 132.367 4.31366 135.783 30.263L146.922 114.87C150.338 140.819 124.383 160.736 100.202 150.72L21.3606 118.063C-2.8203 108.047 -7.09061 75.61 13.674 59.6768L81.3765 7.72681Z" 
              fill="#166edc"/>
            </Svg>
            <Svg 
             style={{
                 transform: "rotate(-45deg)"
             }}
             width="348" 
             height="254"
             right="500px"
             top="100px"
             viewBox="0 0 148 154" 
             fill="none" 
             xmlns="http://www.w3.org/2000/svg">
              <path 
              d="M81.3765 7.72681C102.141 -8.20643 132.367 4.31366 135.783 30.263L146.922 114.87C150.338 140.819 124.383 160.736 100.202 150.72L21.3606 118.063C-2.8203 108.047 -7.09061 75.61 13.674 59.6768L81.3765 7.72681Z" 
              fill="#72c"/>
            </Svg>
            <Svg 
             style={{
                 transform: "rotate(25deg)"
             }}
             bottom="100px"
             width="148" 
             height="54"
             right="100px"
             viewBox="0 0 148 154" 
             fill="none" 
             xmlns="http://www.w3.org/2000/svg">
              <path 
              d="M81.3765 7.72681C102.141 -8.20643 132.367 4.31366 135.783 30.263L146.922 114.87C150.338 140.819 124.383 160.736 100.202 150.72L21.3606 118.063C-2.8203 108.047 -7.09061 75.61 13.674 59.6768L81.3765 7.72681Z" 
              fill="#107aaf"/>
            </Svg>
             <NavBar />
             <Main />
            </RootWrapper>
        );
    }
}