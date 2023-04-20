import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Selector',
  options: [{ value: '123', title: 'First' }, { value: '1234', title: 'Second' }],
};
// Primary.decorators = [ThemeDecorator(ThemeEnum.DARK)];
