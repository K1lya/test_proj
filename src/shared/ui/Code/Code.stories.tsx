import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'export default {\n'
    + "  title: 'CHANGE!!!/Code',\n"
    + '  component: Code,\n'
    + '  argTypes: {\n'
    + "    backgroundColor: { control: 'color' },\n"
    + '  },\n'
    + '} as ComponentMeta<typeof Code>;',
};
Primary.decorators = [ThemeDecorator(ThemeEnum.DARK)];
