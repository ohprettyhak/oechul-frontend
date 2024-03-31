import { parameters as baseParameters } from '../../../.storybook/preview';

export const parameters = {
  ...baseParameters,
  backgrounds: {
    default: 'web',
    values: [
      { name: 'web', value: '#333' },
      { name: 'light', value: '#fff' },
    ],
  },
};
