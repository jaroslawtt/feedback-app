import React, {FC, PropsWithChildren} from 'react';
import styled from "styled-components";
import Form from "./Form";
import Map from "./Map";
import Aside from "./Aside";
import Cartoon from "../UI/Cartoon";

const CustomMain = styled.main`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


interface MainProps extends PropsWithChildren{

}


const Main: FC<MainProps> = ({ children}) => {
    return (
        <CustomMain>
            <Form/>
            <Aside/>
        </CustomMain>
    );
};

export default Main;