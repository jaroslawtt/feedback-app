import React, { FC } from 'react';
import styled from "styled-components";

const CustomInput = styled.input`
    width: 100%;
    height: 95px;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    color: #2D2D2D;
    border-radius: 10px;
    font-size: 18px;
    padding-left: 5%;
  
    &::placeholder{
      font-size: 16px;
      color: #2D2D2D; 
    }
`

interface FormInput{
    id?: string;
    placeholder?: string;
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>)=>void;
    value?: string,
}


const FormInput: FC<FormInput> = (props) => {
    return (
        <CustomInput {...props}></CustomInput>
    );
};

export default FormInput;