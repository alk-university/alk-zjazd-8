import React, { Component, useState } from 'react';

// moj customowy hook setState sklejajacy stan
const useStateCustom = (initialState) => {
  const [state, setState] = useState(initialState);

  const updateState = (value) => {
    // {name: 'Jane Doe'}
    setState({ ...state, ...value });
  };

  return [state, updateState];
};

const App = () => {
  const [state, setState] = useStateCustom({
    name: 'John Doe',
    age: 20,
  });

  // const [name, setName] = useState('John Doe');
  // const [age, setAge] = useState(20);

  // console.log(name, age);
  // setAge(40);
  // setName('Jane Doe');

  const changeState = () => {
    // state.name = 'Jane Doe';
    // this.forceUpdate();

    setState({ name: 'Jane Doe' });

    console.log(state);
  };

  const changeAge = () => {
    setState({ age: 40 });
    console.log(state);
  };

  return (
    <section>
      <div onClick={changeAge}>{state.name}</div>
      <button onClick={changeState}>zmien stan</button>
    </section>
  );
};

class _App extends Component {
  state = {
    name: 'John Doe',
    age: 20,
  };

  changeState = () => {
    // this.state.name = 'Jane Doe';
    // this.forceUpdate();

    this.setState({ name: 'Jane Doe' });

    console.log(this.state);
  };

  render() {
    return (
      <section>
        <div>{this.state.name}</div>
        <button onClick={this.changeState}>zmien stan</button>
      </section>
    );
  }
}

export default App;
