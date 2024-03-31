import { parameters as baseParameters } from '../../../.storybook/preview';

export const parameters = {
  ...baseParameters,
  backgrounds: {
    default: 'console',
    values: [
      { name: 'console', value: '#f0f0f0' },
      { name: 'dark', value: '#333' },
    ],
  },
};
