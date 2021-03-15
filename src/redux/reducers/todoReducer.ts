import {useState} from 'react';
import {initState} from '../../../App';

function todoReducer<State>(state: initState, action: any) {
  switch (action.type) {
    case 'add':
      return {...state, todoList: action.payload};
    default:
      return state;
  }
}

function useReducer(reducer: (arg0: any, arg1: any) => any, initialState: any) {
  const [state, setState] = useState(initialState);

  function dispatch(action: any) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}

export {todoReducer, useReducer};
