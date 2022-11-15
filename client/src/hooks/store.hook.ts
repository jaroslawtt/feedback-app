import {StoreModel} from "../types";
import { createTypedHooks } from 'easy-peasy'

const { useStore, useStoreActions, useStoreState, useStoreDispatch } = createTypedHooks<StoreModel>();

export { useStore, useStoreState, useStoreActions, useStoreDispatch };
