// Title 컴포넌트를 불러옴
import Title from './Title';

// title : 컴포넌트 이름으로, '/'를 넣어 카테고리화 할 수 있음
// component : 어떤 컴포넌트를 가져와서 스토리로 만들 것인지 명시함
// argTypes : 컴포넌트에 필요한 전달인자의 종류와 타입을 정해줌

//title, textColor이라는 전달인자에 text 타입이 필요함을 의미
export default {
  title: 'Web/Title',
  component: Title,
  argTypes: {
    title: { control: 'text' },
    textColor: { control: 'text' },
  },
};

// 템플릿 만들기
// Title 컴포넌트가 args를 전달받아 props로 내려줌
const Template = args => <Title {...args} />;

// Storybook에서 확인하고 싶은 컴포넌트는 export const로 작성
// Template.bind({}); 는 정해진 문법
export const RedTitle = Template.bind({});

// 만들어준 스토리의 전달인자를 작성
RedTitle.args = {
  title: 'Red Title',
  textColor: 'red',
};

export const BlueTitle = Template.bind({});

BlueTitle.args = {
  title: 'Blue Title',
  textColor: 'blue',
};

//템플릿을 활용하지 않고 바로 전달인자를 직접 받는 스토리
export const StorybookTitle = args => {
  return <Title {...args} />;
};
