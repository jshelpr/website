import React from "react";
import styled, { css } from "styled-components";

const LinkStyling = css`
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  transition: opacity 0.25s;
  &:hover {
      opacity: 0.6;
  }
`;

const Text = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  font-family: ${props => props.fontFamily};
  width: ${props => props.width};
  ${props => props.isLink ? LinkStyling : null};
`;

export default class TextComponent extends React.Component {
    render() {
        return(
            <Text>{this.props.childern}</Text>
        );
    }
}

export { Text };