import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

import retrospectives from '../fixtures/retrospectives';

export default function RetrospectivesContainer() {
  // const retrospectives = useSelector(get('retrospectives'));

  return (
    <li>
      {retrospectives.map((retrospective) => (
        <ul key={retrospective.id}>
          <div>
            주제 :
            {` ${retrospective.subject}`}
          </div>
          <div>
            사실(fact) :
            {` ${retrospective.fact}`}
          </div>
          <div>
            느낌(feeling) :
            {` ${retrospective.feeling}`}
          </div>
          <div>
            교훈(finding) :
            {` ${retrospective.finding}`}
          </div>
          <div>
            향후 행동(future action) :
            {` ${retrospective.future_action}`}
          </div>
          <div>
            피드백(feedback) :
            {` ${retrospective.feedback}`}
          </div>
        </ul>
      ))}
    </li>
  );
}
