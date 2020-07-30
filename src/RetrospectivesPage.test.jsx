import React from 'react';

import { render } from '@testing-library/react';

import RetrospectivesPage from './RetrospectivesPage';

describe('RetrospectivesPage', () => {
  it('renders retrospectives page', () => {
    render((
      <RetrospectivesPage />
    ));
  });
});
