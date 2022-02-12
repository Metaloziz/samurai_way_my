import React from 'react';
import { Store } from 'redux';

export {};

type StoreContextPT = {
  store: Store
  children: React.ReactNode
}

const StoreContext = React.createContext({} as Store);

const Component = (props: StoreContextPT) => {

  return <StoreContext.Provider value={props.store}>
    {props.children}
  </StoreContext.Provider>;

};