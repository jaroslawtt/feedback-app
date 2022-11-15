import { Action } from "easy-peasy";

interface FormError{
    message: string,
}

export type FormSuccess = null | true;


export interface StoreModel {
    success: FormSuccess;
    error: FormError | null;
    setSuccess: Action<this, true>;
    clearSuccess: Action<this, null>;
    setError: Action<this, string>;
    clearError: Action<this, null>;
}