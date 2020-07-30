import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RetrospectivesContainer from './RetrospectivesContainer';

jest.mock('react-redux');

describe('RetrospectivesContainer', () => {
  beforeEach(() => {
    // TODO : uncomment when API for retrospectives prepared
    // useSelector.mockImplementation((selector) => selector({
    //   retrospectives: [
    //     {
    //       id: 1,
    //       user_name: 'min-w-park',
    //       subject: '7주차 코드숨 회고',
    //       fact: `TDD는 여전히 어렵습니다. 더군다나 Container와
    //              그 안에 있는 컴포넌트에 대해 테스트를 작성 할 때
    //              테스트가 중복 되지 않기를 바라며 동시에 각 컴포넌트가
    //              어떤 테스트를 하는 것이 맞을지 고민이 많이 되었습니다.`,
    //       feeling: `테스트를 고민을 하는 과정 자체가 즐거웠습니다.
    //                 나중에는 저만의 관점이 생기리라 생각합니다.
    //                 다른 분들의 회고가 도움이 되었습니다.`,
    //       finding: `컴포넌트에 대해 테스트를 작성 할 때,
    //                 과정 자체가 매끄럽지 못하다면 올바른 테스트가 아닐 수 있다고 합니다.`,
    //       future_action: '좀 더 다양한 테스트를 작성 해 보아야 겠습니다.',
    //       feedback: '',
    //       filter: ['리액트'],
    //       created_at: '2020-07-14',
    //       updated_at: '2020-07-21',
    //     },
    //   ],
    // }));
  });

  context('when retrospectives exist', () => {
    const { container } = render((
      <RetrospectivesContainer />
    ));

    it('displays retrospective', () => {
      expect(container).toHaveTextContent('7주차 코드숨 회고');
    });
  });
});
