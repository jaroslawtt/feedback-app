import React from 'react';
import styled from "styled-components";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Push from "./UI/Push";
import { useStoreState } from "./hooks";


const CustomApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`



function App() {

    const state = useStoreState(state => state);

    const renderPush = () => {
        if(state.error){
            return <Push type={'Fault'}>{state.error.message}</Push>
        }
        if(state.success){
            return <Push type={'Success'}>Submitted successfully</Push>
        }
        return;
    }
    return (
        <CustomApp>
            <Main/>
            <Footer/>
            {
                renderPush()
            }
        </CustomApp>
    );
}

export default App;
