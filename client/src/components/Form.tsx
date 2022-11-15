import React, {FC, FormEvent, PropsWithChildren, useState} from 'react';
import styled from "styled-components";
import Submit from "../UI/Submit";
import FormInput from "../UI/Form-Input";
import FormTextArea from "../UI/Form-TextArea";
import FormCaption from "./FormCaption";
import {useForm} from "../hooks";
import Cartoon from "../UI/Cartoon";


const CustomForm = styled.form`
    margin: 8% 8%;
    min-width: 575px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

interface FormProps extends PropsWithChildren{

}


const Form: FC<FormProps> = () => {

    const { formState, changeHandler, submitHandler} = useForm();

    return (
        <CustomForm onSubmit={submitHandler}>
            {/*<Cartoon width={'88px'} height={'85px'} background={'#FAD34F'} left={'-200px'} top={'-150px'}/>*/}
            <FormCaption>Reach out to us!</FormCaption>
            <FormInput id={'name'} placeholder={'Your name*'} value={formState.name} onChange={changeHandler}/>
            <FormInput id={'email'} placeholder={'Your e-mail*'} value={formState.email} onChange={changeHandler}/>
            <FormTextArea id={'message'} placeholder={'Your message*'} value={formState.message} onChange={changeHandler}/>
            <Submit>Send message</Submit>
        </CustomForm>
    );
};

export default Form;