import React from 'react';
import styled from "styled-components";
import Socials from "./Socials";
import Cartoon from "../UI/Cartoon";
import Smile from "../UI/Smile";


const CustomFooter = styled.footer`
    width: 100%;
    height: 200px;
    display: flex;
    background: #FAFAFA;
    border: 1px solid #D8D8D8;
    overflow: hidden;
    justify-content: space-between;
`


const Footer = () => {
    return (
        <CustomFooter>
            <Cartoon borderRadius={'50%'} background={'#F472B7'} width={'214px'} height={'208px'} top={'2%'} left={'2%'}>
                <Smile top={'70px'} left={'40px'}/>
                <Smile top={'45px'} left={'5px'} width={'19px'} height={'15px'} transform={'rotate(-180deg)'} />
                <Smile top={'45px'} left={'10px'} width={'19px'} height={'15px'} transform={'rotate(-180deg)'}/>
            </Cartoon>
            <Socials/>
            <Cartoon borderRadius={'500px 500px 0px 0px'} background={'#46EBB0'} width={'78px'}  height={'97px'} transform={'rotate(-180deg)'} left={'20%'}>
                <Smile top={'15px'} left={'40px'} width={'19px'} height={'15px'} transform={'rotate(-180deg)'}/>
                <Smile top={'15px'} right={'5px'} width={'19px'} height={'15px'} transform={'rotate(-180deg)'}/>
                <Smile top={'38px'} right={'15px'} width={'23px'}/>
            </Cartoon>
            <Cartoon borderRadius={'50%'} background={'#FAD34F'} width={'85px'}  height={'88px'} right={`-1%`} margin={'auto 0'} transform={'rotate(-35.19deg)'}>
                <Smile top={'15px'} left={'35px'} width={'15px'} height={'15px'} transform={'rotate(-180deg)'}/>
                <Smile top={'15px'} left={'40px'} width={'15px'} height={'15px'} transform={'rotate(-180deg)'}/>
                <Smile top={'35px'} left={'15px'} width={'20px'}/>
            </Cartoon>
        </CustomFooter>
    );
};

export default Footer;