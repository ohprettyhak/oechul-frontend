import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyledButton from './StyledButton';

// 이 부분은 메타데이터 정의이며 이미 올바르게 설정하셨습니다.
export default {
  title: 'stories/Button',
  component: StyledButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StyledButton>;

// 템플릿 정의
const Template: ComponentStory<typeof StyledButton> = args => (
  <StyledButton {...args} />
);

// 기본 스토리
export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  backgroundColor: '#424242',
};

// 다른 변형을 추가할 수도 있습니다.
export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  backgroundColor: '#120391',
};
