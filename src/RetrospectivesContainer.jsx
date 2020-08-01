import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';

import retrospectives from '../fixtures/retrospectives';

// import {
//   lightShadeGray,
//   black,
// } from './styles/constants';

const List = styled.ul({
  margin: '3em 10em',
  padding: '.4em 0',
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1em',
  padding: '1.4em 1em',
  borderBottom: '1px solid #ccc',
  background: 'transparent',
  textDecoration: 'none',
});

const SpanItem = styled.span({
  fontWeight: 'bold',
  fontSize: '1.3em',
});

const Content = styled.div({
  padding: '.3em',
});

const Span = styled.span({
  paddingLeft: '0.5em',
  fontWeight: 'bold',
  fontSize: '1.1em',
  cursor: 'pointer',
});

export default function RetrospectivesContainer() {
  // const retrospectives = useSelector(get('retrospectives'));

  return (
    <List>
      {retrospectives.map((retrospective) => (
        <Item key={retrospective.id}>
          <Content>
            <SpanItem>주제 :</SpanItem>
            {` ${retrospective.subject} `}
            {retrospective.filter.map((item) => (
              // TODO : key should be added
              <Span>
                #
                {item}
              </Span>
            ))}
          </Content>
          <Content>
            <SpanItem>사실(Fact) :</SpanItem>
            {` ${retrospective.fact}`}
          </Content>
          <Content>
            <SpanItem>느낌(Feeling) :</SpanItem>
            {` ${retrospective.feeling}`}
          </Content>
          <Content>
            <SpanItem>교훈(Finding) :</SpanItem>
            {` ${retrospective.finding}`}
          </Content>
          <Content>
            <SpanItem>향후 행동(Future action) :</SpanItem>
            {` ${retrospective.future_action}`}
          </Content>
          <Content>
            <SpanItem>피드백(Feedback) :</SpanItem>
            {` ${retrospective.feedback}`}
          </Content>
        </Item>
      ))}
    </List>
  );
}
