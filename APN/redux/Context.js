// Context.js
import React from 'react'
import useCombinedReducers from 'use-combined-reducers';
import dataServer from '../components/dataServer';

const myServerSelected = dataServer[0]
let serverReducer = (state, action) => {
   switch (action.type) {
      case "CHANGE_SERVER":
         return action.server ;
      default:
         return state;
   }
};

const isShowDropDown = { isShow: false };
let isShowReducer = (state, action) => {
   switch (action.type) {
      case "SHOW":
         return { isShow: true };
      case "HIDE":
         return { isShow: false };
      default:
         return state;
   }
};

const CounterContext = React.createContext();
const reduceReducers = (...reducers) => (prevState, value, ...args) =>
  reducers.reduce(
    (newState, reducer) => reducer(newState, value, ...args),
    prevState
  );
function CounterProvider(props) {
   const [state, dispatch] = useCombinedReducers({
      myServerSelected: React.useReducer(serverReducer, myServerSelected),
      isShowDropDown: React.useReducer(isShowReducer, isShowDropDown),
    });
   // const [state, dispatch] = React.useReducer(reduceReducers(serverReducer, isShowReducer), {myServerSelected,isShowDropDown});
    
   return (
      <CounterContext.Provider value={{ state, dispatch }}>
         {props.children}
      </CounterContext.Provider>
   );
}
export { CounterContext, CounterProvider };