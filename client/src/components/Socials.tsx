import React from 'react';
import styled from "styled-components";
import SocialIcon from "../UI/SocialIcon";



const CustomSocials = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 5%;
`


const Socials = () => {
    return (
        <CustomSocials>
            <SocialIcon type={'Linkedin'}/>
            <SocialIcon type={'Twitter'}/>
            <SocialIcon type={'Facebook'}/>
            <SocialIcon type={'Pinterest'}/>
        </CustomSocials>
    );
};

export default Socials;