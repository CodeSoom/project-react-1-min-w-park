import React from 'react';

import { render } from '@testing-library/react';

import WritingPage from './WritingPage';

describe('WritingPage', () => {
  it('renders retrospective writing page', () => {
    const { container } = render((
      <WritingPage />
    ));

    expect(container).toHaveTextContent('회고 작성');
  });
});
