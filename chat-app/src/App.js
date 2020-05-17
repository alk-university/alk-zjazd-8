/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useReducer, useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const Section = styled.section`
  background-color: #000;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 200px;
  height: 150px;
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
`;

const HyperLink = styled.span`
  display: block;
  margin-top: 30px;
  text-align: center;
`;

const Home = () => {
  return (
    <Section>
      <Box>
        <label>Name:</label>
        <input />
        <Link to="/chat">
          <HyperLink
            css={css`
              color: red;
            `}
          >
            Przejdź dalej >
          </HyperLink>
        </Link>
      </Box>
    </Section>
  );
};

// stan poczatkowy
const initialState = {
  name: '',
  messages: [
    { authorId: 'Wojtek', text: 'Wiadomość 1' },
    { authorId: 'Wojtek', text: 'Wiadomość 2' },
  ],
};

// definiujemy dostepne typy akcji
const ACTIONS = {
  ADD_MESSAGE: 'ADD_MESSAGE',
};

// definiujemy reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };

    default:
      return state;
  }
};

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSendClick = (event) => {
    dispatch({
      type: ACTIONS.ADD_MESSAGE,
      payload: { authorId: 'Wojtek', text },
    });
    setText('');
  };

  return (
    <Section>
      <Box>
        <div>Nick: ...</div>
        <div>
          <input
            value={text}
            onChange={handleTextChange}
            placeholder="Your message"
          />
          <button onClick={handleSendClick}>send</button>
        </div>
        <ul>
          {state.messages.map((message, index) => (
            <li key={index}>
              <b>{message.authorId}:</b>
              {message.text}
            </li>
          ))}
        </ul>
      </Box>
    </Section>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
      </BrowserRouter>
    </div>
  );
};

export default App;
