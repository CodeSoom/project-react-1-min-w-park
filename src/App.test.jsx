import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  it('renders App', () => {
    const { container } = renderApp({ path: '/' });
    expect(container).toHaveTextContent('함께 회,고(Go) 해요.');
  });

  context('with path /', () => {
    it('renders the initial Retrospectives page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('무엇을 하셨나요?');
    });
  });

  context('with path /writes', () => {
    it('renders the writing page', () => {
      const { container } = renderApp({ path: '/writes' });

      expect(container).toHaveTextContent('회고 작성');
    });
  });
});
