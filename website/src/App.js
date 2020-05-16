import React, { useReducer } from 'react';

const Home = (props) => {
  const handleChange = (event) => {
    props.setName(event.target.value);
  };

  const handleChangeAge = (event) => {
    props.setAge(event.target.value);
  };

  return (
    <div>
      Name: <input value={props.name} onChange={handleChange} />
      <br />
      Age: <input value={props.age} onChange={handleChangeAge} />
      <br />
    </div>
  );
};

const Chat = (props) => {
  return <div>Name: {props.name}</div>;
};

// action = { type: 'SET_NAME', payload: 'John Doe' };
const reducer = (state, action) => {
  console.log('Wywolanie reducer: ', { state, action });

  // rozpoznajemy akcje
  switch (action.type) {
    case 'SET_NAME':
      // zmien name w stanie
      return { ...state, name: action.payload };

    case 'SET_AGE':
      return { ...state, age: action.payload };

    default:
      return state;
  }
};

// domyślny stan aplikacji
const initialState = {
  name: 'John Doe',
  age: 20,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <Home
        name={state.name}
        age={state.age}
        setName={(value) => dispatch({ type: 'SET_NAME', payload: value })}
        setAge={(value) => dispatch({ type: 'SET_AGE', payload: value })}
      />
      <Chat name={state.name} />
    </section>
  );
};

export default App;
