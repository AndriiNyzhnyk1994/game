import {combineReducers, createStore} from "redux";
import {reducer} from "./reducer";

const rootReducer = combineReducers({
    reducer: reducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>


//@ts-ignore
window.store = store