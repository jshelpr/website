import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 48px;
  width: 45px;
  margin: ${props => props.margin};
  display: grid;
  grid-template-areas: 'top right'
                       'left bottom';
`;

const Rect = styled.span`
  height: 15px;
  width: 15px;
  margin: 2px;
  background: ${props => props.color};
  grid-area: ${props => props.gridArea};
`;

export default class Icon extends React.Component {
    render() {
        return(
            <Div>
                <Rect gridArea="top" color="#166edc" />
                <Rect gridArea="right" color="#166edc" />
                <Rect gridArea="left" color="#166edc" />
                <Rect gridArea="bottom" color="#FADABE" />
            </Div>
        );
    }
}