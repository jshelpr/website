import React from "react";
import styled from "styled-components";

import TextField from "../TextInput";
import { Text } from "../Text";
import { Button } from "../Button";

const MainWrapper = styled.main`
  height: calc(100vh - 100px);
  width: 100%;
  padding: 60px;
`;

const FlexLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 60px;
  padding: 5px;
`;

export default class Main extends React.Component {
    render() {
        return(
            <MainWrapper>
                <FlexLeft>
                 <Text 
                  width="702px"
                  fontFamily="Circular Bold" 
                  fontSize="67px" 
                  color="#000"
                 >
                     Create Unique QR Codes in seconds.
                 </Text>
                 <Text 
                  padding="10px"
                  width="500px"
                  fontSize="20px"
                  fontWeight="100"
                  color="#A8A8A8" 
                  fontFamily="Circular Book"
                 >
                    Build Interactive Digital experiences with your customers with just few clicks. Try it now!
                 </Text>
                 <FastSignUpField />
                </FlexLeft>
            </MainWrapper>
        );
    }
};

const DivSignUpField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

class FastSignUpField extends React.Component {
    render() {
        return(
            <DivSignUpField>
             <TextField 
              isEmailField={true}
              marginLeft="100px"
              type="text" 
              placeholder="Enter you email" 
             />
             <Button 
              hoverBackground="#166edcaf"
              margin="10px"
              homePageSignUpField={true}
             >
                 Sign Up
            </Button>
            </DivSignUpField>
            
        );
    }
}