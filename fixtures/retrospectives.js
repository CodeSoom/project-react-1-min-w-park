const retrospectives = [
  {
    id: 1,
    user_name: 'min-w-park',
    subject: '7주차 코드숨 회고',
    fact: `TDD는 여전히 어렵습니다. 더군다나 Container와 
           그 안에 있는 컴포넌트에 대해 테스트를 작성 할 때
           테스트가 중복 되지 않기를 바라며 동시에 각 컴포넌트가
           어떤 테스트를 하는 것이 맞을지 고민이 많이 되었습니다.`,
    feeling: `테스트를 고민을 하는 과정 자체가 즐거웠습니다. 
              나중에는 저만의 관점이 생기리라 생각합니다.
              다른 분들의 회고가 도움이 되었습니다.`,
    finding: `컴포넌트에 대해 테스트를 작성 할 때, 
              과정 자체가 매끄럽지 못하다면 올바른 테스트가 아닐 수 있다고 합니다.`,
    future_action: '좀 더 다양한 테스트를 작성 해 보아야 겠습니다.',
    feedback: '',
    filter: ['리액트'],
    created_at: '2020-07-14',
    updated_at: '2020-07-21',
  },
  {
    id: 2,
    user_name: 'min-w-park',
    subject: '8주차 코드숨 회고',
    fact: 'CSS를 컴포넌트화 하는 것이 굉장히 흥미로웠습니다.',
    feeling: 'CSS는 어려웠지만 그래도 사이트가 이뻐지는 것 같아 좋았습니다.',
    finding: '좀 더 이쁘게 만들어서 사용자에게 보는 즐거움을 더 줄 수 없을까 고민해 보았습니다.',
    future_action: '다른 사이트들의 디자인은 어떤가 유심히 봐야겠습니다.',
    feedback: '',
    filter: ['리액트', 'CSS', 'Styled'],
    created_at: '2020-07-21',
    updated_at: null,
  },
  {
    id: 3,
    user_name: 'steph',
    subject: '삶의 43682주차 회고',
    fact: `회사에서 DDD를 도입해야 할 것 같은데, 개념적으로도 부족하게 알고 있어서 막막하다.
           강의들을 보며 공부를 시작했다. Pluralsight의 Vladimir님의 강의가 좋은 것 같다.`,
    feeling: '공부를 하면서 개념적으로 아는 것이 실전에 잘 적용될 지 아직은 감이 오지 않는다.',
    finding: `어떤 도메인에 대해 컨텍스트에 따라 Value Object가 될 수도, 엔티티가 될수도 있다.
              Business logic은 불변성을 갖고 있는 VO에 최대한 작성해야 한다.`,
    future_action: 'Bounded context를 나누고 VO, Entity, Aggregate을 찾아보자.',
    feedback: '',
    filter: ['DDD', 'Java'],
    created_at: '2020-07-14',
    updated_at: null,
  },
];

export default retrospectives;
