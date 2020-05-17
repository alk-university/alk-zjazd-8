/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
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

const Chat = () => {
  return (
    <Section>
      <Box>Nick: ...</Box>
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
