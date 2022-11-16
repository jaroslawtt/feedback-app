import React, { FC } from 'react';

import styled from "styled-components";


const CustomSvg = styled.svg`
  position: relative;
`

interface SmileProps {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    transform?: string;
    height?: string;
    width?: string;
}


const Smile: FC<SmileProps> = (props) => {
    return (
        <CustomSvg style={{...props}} width="31" height="19" viewBox="0 0 31 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.4969 3.61362C30.4969 11.9787 23.7151 18.7563 15.3543 18.7563C6.99346 18.7563 0.21167 11.9745 0.21167 3.61362C0.21167 -4.74722 6.99346 4.19782 15.3543 4.19782C23.7151 4.19782 30.4969 -4.74722 30.4969 3.61362Z" fill="white"/>
        </CustomSvg>
    );
};

export default Smile;