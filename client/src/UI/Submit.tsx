import React, { FC, PropsWithChildren } from 'react';
import styled from "styled-components";

const CustomButton = styled.button`
    background-color: #FAD34F;
    width: 218px;
    height: 73px;
    font-size: 1.1em;
    border-radius: 500px;
    margin-top: 25px;
    border: 0 solid;
    color: #FFFFFF;
    text-align: center;
    align-self: start;
    cursor: pointer;
`

interface SubmitProps extends PropsWithChildren{

}


const Submit: FC<SubmitProps> = ({children}) => {
    return (
        <CustomButton>
            {children}
        </CustomButton>
    );
};

export default Submit;