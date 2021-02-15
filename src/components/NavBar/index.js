import React from "react";
import styled from "styled-components";

import Icon from "./Icon";
import { Text } from "../Text";
import { Button } from "../Button";

const Nav = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-evenly;
`;

export default class NavBar extends React.Component {
    render() {
        return(
            <Nav>
               <Header />
               <RelatedLinks />
            </Nav>
        );
    }
}

const DivHeader = styled.div`
  max-height: 100%;
  width: 30%;
  padding: 20px;
  display: flex;
  margin: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

const TextDiv = styled.div`
  display: flex;
  align-items: center;
`;

class Header extends React.Component {
    render() {
        return(
            <DivHeader>
           <Icon />
           <TextDiv>
            <Text 
             fontFamily="Circular Bold"
             style={{ display: "flex", flexDirection: "row" }} 
             fontSize="30px" 
             fontWeight="900"
            >
                Ever Code
            </Text>
            <Text marginLeft="10px" fontWeight={500}>QRCode Creator</Text>
           </TextDiv>
           </DivHeader>
        );
    }
}

const DivLinks = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
`;

class RelatedLinks extends React.Component {
    render() {
        return(
            <DivLinks>
                <Text isLink={true}>Products</Text>
                <Text isLink={true}>Solutions</Text>
                <Text isLink={true}>Blog</Text>
                <Text isLink={true}>Pricing</Text>
                <Button secondary>Try for free</Button>
                <Button hoverBackground="#166edcaf">Sign In</Button>
            </DivLinks>
        );
    }
};