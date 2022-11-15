import React, { FormEvent, useState } from "react";
import { api } from "../api";
import { useStoreActions } from "./store.hook";



export const useForm = () => {

    const formInitialState = {
        name: ``,
        email: ``,
        message: ``,
    }

    const [formState, setFormState] = useState(formInitialState);
    const { setError, setSuccess, clearError, clearSuccess } = useStoreActions(actions => actions);
    const submitHandler = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        try {
            const response = await api.post(`test`,{
                ...formState,
            });
            if(response.status >= 200 && response.status < 300){
                setFormState(formInitialState);
                setSuccess(true);
                setTimeout(() => {
                    clearSuccess(null);
                }, 5000)
            }
        }
        catch (e: any) {
            const message = e.response.data.message.join(`/`);
            setError(message);
            setTimeout(() => {
                clearError(null);
            }, 5000)
        }
    };

    const changeHandler = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = evt.target;
        setFormState({
            ...formState,
            [id]: value,
        });
    };

    return { formState, changeHandler, submitHandler };
}