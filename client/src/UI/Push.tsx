import React, { FC, PropsWithChildren } from 'react';
import styled from "styled-components";

const CustomDiv = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 150px;
  font-size: 20px;
  color: white;
  border-radius: 15px;
  bottom: 15px;
  right: 15px;
`

interface PushProps extends PropsWithChildren{
    type: 'Success' | 'Fault';
}


const Push: FC<PushProps> = (props) => {
    return (
        <CustomDiv style={{background: `${props.type === 'Success' ? 'Aquamarine' : 'Red'}`}}>
            { props.children }
        </CustomDiv>
    );
};

export default Push;