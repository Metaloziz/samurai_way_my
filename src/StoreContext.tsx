import React from "react";
import {actionPT, statePT} from "./redux/store";


type storePT = {
    _state: statePT
    _callSubscriber: () => void
    getState: () => statePT
    subscribe: (props: () => void) => void
    dispatch: (action: actionPT) => void
}
type ProviderPT = {
    store: storePT
    children: React.ReactNode
}

export const StoreContext = React.createContext({} as storePT)

export const Provider = (props: ProviderPT) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>)
}