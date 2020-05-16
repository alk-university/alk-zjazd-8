import React, { useState } from 'react';

const Home = (props) => {
  const handleChange = (event) => {
    props.setName(event.target.value);
  };

  return (
    <div>
      Name: <input value={props.name} onChange={handleChange} />
    </div>
  );
};

const Chat = (props) => {
  return <div>Name: {props.name}</div>;
};

const App = () => {
  const [name, setName] = useState('John Doe');

  return (
    <section>
      <Home name={name} setName={setName} />
      <Chat name={name} />
    </section>
  );
};

export default App;
