import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import RetrospectivesPage from './RetrospectivesPage';
import WritingPage from './WritingPage';

export default function App() {
  return (
    <div>
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

      <Switch>
        <Route exact path="/" component={RetrospectivesPage} />
        <Route exact path="/writes" component={WritingPage} />
      </Switch>
    </div>
  );
}
