import React from "react";
import {Store} from "redux";    //???


type ProviderPT = {
    store: Store              // store reads type of Store from store_redux
    children: React.ReactNode
}

export const StoreContext = React.createContext({} as Store)  //    ???

export const Provider = (props: ProviderPT) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}