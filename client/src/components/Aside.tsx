import React from 'react';
import styled from "styled-components";
import Map from "./Map";

const CustomAside = styled.aside`
    height: 100%;
    overflow: hidden;
`


const Aside = () => {
    return (
        <CustomAside>
            <Map/>
        </CustomAside>
    );
};

export default Aside;