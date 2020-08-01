import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import RetrospectivesPage from './RetrospectivesPage';
import WritingPage from './WritingPage';

const GlobalStyles = css`
  @font-face { 
    font-family: 'MapoFlowerIsland'; 
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoFlowerIslandA.woff') 
    format('woff'); 
    font-weight: normal; 
    font-style: normal; 
  }

  * {
    font-family: 'MapoFlowerIsland';
  }
`;

const Header = styled.div({
  margin: '5em 10em',
});

export default function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header>
        <h1>
          <Link to="/">함께 회,고(Go) 해요.</Link>
        </h1>
        <h2>
          회고를 작성하고, 같은 고민을 가진 사람들과 나누어 보세요.
        </h2>
        <div>
          <ul>
            <li><Link to="/">회고</Link></li>
            <li><Link to="/writes">작성</Link></li>
          </ul>
        </div>
      </Header>
      <Switch>
        <Route exact path="/" component={RetrospectivesPage} />
        <Route exact path="/writes" component={WritingPage} />
      </Switch>
    </>
  );
}
