import React, {FC, PropsWithChildren} from 'react';
import styled from "styled-components";

const CustomDiv = styled.div`
   position: relative;
`

interface CartoonProps extends PropsWithChildren{
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    width?: string;
    height?: string;
    background?: string;
    borderRadius?: string;
    transform?: string;
    margin?: string;
    zIndex?: string,
}


const Cartoon:FC<CartoonProps> = (props) => {
    return (
        <CustomDiv style={{...props,}}>
            { props.children }
        </CustomDiv>
    );
};

export default Cartoon;