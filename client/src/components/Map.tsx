import React from 'react';
import styled from "styled-components";


// @ts-ignore
import Background from "../assets/img/Captura de Tela 2021-01-21 às 10.47 1(1).png";
import Cartoon from "../UI/Cartoon";
import Smile from "../UI/Smile";


const CustomMap = styled.div`
    position: relative;
    top: -52px;
    right: -15%;
    width: 976px;
    height: 925px;
    background-image: url("${Background}");
    border-radius: 80%;
`


const Map = () => {
    return (
        <CustomMap>
            <Cartoon width={'127px'} height={'127px'} background={'#FAD34F'} top={'55%'} right={'5%'} borderRadius={'50%'} zIndex={'999'}>
                <Smile top={'75px'}  left={'60px'} width={'15px'} height={'15px'} transform={'rotate(-180deg)'}/>
                <Smile top={'75px'}  left={'65px'} width={'15px'} height={'15px'} transform={'rotate(-180deg)'}/>
                <Smile top={'95px'} left={'35px'} width={'25px'}/>
            </Cartoon>
            <Cartoon width={'214px'} height={'208px'} background={'#F472B7'} top={'50%'} borderRadius={'50%'} transform={'matrix(-0.74, 0.67, 0.67, 0.74, 0, 0)'}>
                <Smile top={'75px'}  left={'60px'} width={'20px'} height={'18px'} transform={'rotate(-180deg)'}/>
                <Smile top={'75px'}  left={'65px'} width={'20px'} height={'18px'} transform={'rotate(-180deg)'}/>
                <Smile top={'100px'} left={'26px'} width={'30px'}/>
            </Cartoon>
        </CustomMap>
    );
};

export default Map;