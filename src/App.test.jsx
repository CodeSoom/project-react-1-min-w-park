import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { container } = render((
    <App />
  ));

  expect(container).toHaveTextContent('함께 회,고(Go) 해요.');
});
