import React, { FC, PropsWithChildren } from 'react';
import styled from "styled-components";

const CustomCaption = styled.div`
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  margin-bottom: 5%;
  font-style: normal; 
  color: #3E3E3E;
`

interface FormCaptionProps extends PropsWithChildren{

}


const FormCaption: FC<FormCaptionProps> = ({ children }) => {
    return (
        <CustomCaption>
            { children }
        </CustomCaption>
    );
};

export default FormCaption;