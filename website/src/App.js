import React, { createContext, useContext, useReducer } from 'react';

const ACTIONS = {
  SET_NAME: 'SET_NAME',
  SET_AGE: 'SET_AGE',
};

const Home = () => {
  const { state, dispatch } = useContext(ReduxContext);

  const handleChangeName = (event) => {
    dispatch({ type: ACTIONS.SET_NAME, payload: event.target.value });
  };

  const handleChangeAge = (event) => {
    dispatch({ type: ACTIONS.SET_AGE, payload: event.target.value });
  };

  return (
    <div>
      Name: <input value={state.name} onChange={handleChangeName} />
      <br />
      Age: <input value={state.age} onChange={handleChangeAge} />
      <br />
    </div>
  );
};

const Chat = () => {
  const { state } = useContext(ReduxContext);
  return <div>Name: {state.name}</div>;
};

// action = { type: 'SET_NAME', payload: 'John Doe' };
const reducer = (state, action) => {
  console.log('Wywolanie reducer: ', { state, action });

  // rozpoznajemy akcje
  switch (action.type) {
    case ACTIONS.SET_NAME:
      // zmien name w stanie
      return { ...state, name: action.payload };

    case ACTIONS.SET_AGE:
      return { ...state, age: action.payload };

    default:
      return state;
  }
};

// domyślny stan aplikacji
const initialState = {
  name: 'John Doe',
  age: 30,
};

const ReduxContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <ReduxContext.Provider value={{ state, dispatch }}>
        <Home />
        <Chat />
      </ReduxContext.Provider>
    </section>
  );
};

export default App;
