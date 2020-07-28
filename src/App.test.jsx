import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { container } = render((
    <App />
  ));

  expect(container).toHaveTextContent('회고(Go)록');
});
