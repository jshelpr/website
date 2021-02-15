import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 353px;
  height: 60px;
  background: #FFFFFF;
  border: 2px solid #C4C4C4;
  border-radius: 14px;
  padding: 1.5rem 2rem;
  padding-left: 30px;
  font-size: 18px;
  margin: ${props => props.margin};
  margin-left: ${props => props.marginLeft};
  outline: none;
  transition: box-shadow 0.35s;
  &::placeholder {
      font-size: 18px;
      color: #c4c4c4;
      user-select: none;
  }
  &:focus {
      box-shadow: 0 0 0 4px #166edc20;
  }
`;

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        if (this.props.isEmailField === true) {
            this.setState({
            input: event.target.value.toLowerCase().trim()
        });
        } else {
            this.setState({
                input: event.target.value
            });
        }
        
    }
    render() {
        return(
            <Input 
             value={this.state.input}
             onChange={this.handleChange}
             type={this.props.type} 
             placeholder={this.props.placeholder}
             primary={this.props.isPrimary}
            />
        );
    }
}

export { Input };