import React from "react";
import styled, { css } from "styled-components";

const SecondaryButton = css`
  background: #FFFFFF;
  border: 3px solid #166EDC;
  border-radius: 12px;
  color: #166edc;
`;

const mainPageSignUpField = css`
  height: 60px;
  width: 150px;
`;

const Button = styled.button`
  width: 131.25px;
  height: 46.25px;
  background: #166EDC;
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 17.5px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
  cursor: pointer;
  margin: ${props => props.margin};
  transition: background 0.35s, color 0.30s;
  &:hover {
      background: ${props => props.secondary ? "#166edc" : props.hoverBackground};
      color: ${props => props.secondary ? "#fff" : null};
  }
  ${props => props.secondary ? SecondaryButton : null}
  ${props => props.homePageSignUpField ? mainPageSignUpField : null}
`;

export default class ButtonComponent extends React.Component {
    render() {
        return(
            <Button>{this.props.children}</Button>
        );
    }
}

export { Button };