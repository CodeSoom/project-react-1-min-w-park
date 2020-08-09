import React from 'react';

import { render, screen } from '@testing-library/react';

import RetrospectivesPage from './RetrospectivesPage';

const { queryByText } = screen;

describe('RetrospectivesPage', () => {
  it('renders retrospectives page', () => {
    render((
      <RetrospectivesPage />
    ));

    expect(queryByText('무엇을 하셨나요?')).toBeInTheDocument();
  });
});
