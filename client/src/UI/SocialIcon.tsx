import React, {FC} from 'react';
import styled from "styled-components";
import { IconType } from "../types";
// @ts-ignore
import { ReactComponent as FacebookLogo} from "./socials/VectorFacebook.svg";
// @ts-ignore
import { ReactComponent as PinterestLogo} from "./socials/VectorPinterest.svg";
// @ts-ignore
import { ReactComponent as TwitterLogo} from "./socials/VectorTwitter.svg";
// @ts-ignore
import { ReactComponent as LinkedLogo} from "./socials/VectorLinedIn.svg";

const CustomIcon = styled.a`
  
`

interface SocialIconProps {
    type: IconType,
}



const SocialIcon: FC<SocialIconProps> = ({ type }) => {

    const renderIcon = () => {
       switch (type) {
           case "Facebook":
               return (<FacebookLogo/>);
           case "Linkedin":
               return (<LinkedLogo/>);
           case "Twitter":
               return (<TwitterLogo/>);
           case "Pinterest":
               return (<PinterestLogo/>);
       }
    };


    return (<CustomIcon href={'#'}>
        { renderIcon() }
    </CustomIcon>);
};

export default SocialIcon;