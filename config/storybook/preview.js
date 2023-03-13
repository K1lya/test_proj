import { addDecorator } from '@storybook/react';
import {
  StyleDecorator,
} from '../../src/shared/config/storybook/decorators/StyleDecorator';
import {
  ThemeDecorator,
} from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from '../../src/app/providers/ThemeProvider';
import {
  RouterDecorator,
} from '../../src/shared/config/storybook/decorators/RouterDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Decorators
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(ThemeEnum.LIGHT));
addDecorator(RouterDecorator);
