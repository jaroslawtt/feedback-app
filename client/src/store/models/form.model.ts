import { action } from "easy-peasy";
import { StoreModel } from "../../types";



export const model: StoreModel = {
    success: null,
    error: null,
    setSuccess: action((state, payload) => {
        state.success = payload;
    }),
    clearSuccess: action((state, payload) => {
        state.success = payload;
    }),
    setError: action((state, payload) => {
        state.error = {
            message: payload,
        };
    }),
    clearError: action((state, payload) => {
        state.error = payload;
    }),
}
