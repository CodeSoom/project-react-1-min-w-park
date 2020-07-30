import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

test('App', () => {
  const { container } = render((
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('함께 회,고(Go) 해요.');
});
