import React, {FC} from 'react';
import styled from "styled-components";

const CustomTextArea = styled.textarea`
    width: 100%;
    min-height: 190px;
    padding: 5% 5%;
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    font-size: 18px;
    resize: none;
    &::placeholder{
      font-size: 16px;
      color: #2D2D2D;
    }
`


interface FormTextArea {
    placeholder?: string;
    id?: string;
    onChange?: (evt: React.ChangeEvent<HTMLTextAreaElement>)=>void;
    value?: string;
}


const FormTextArea: FC<FormTextArea> = (props) => {
    return (
        <CustomTextArea {...props}/>
    );
};

export default FormTextArea;