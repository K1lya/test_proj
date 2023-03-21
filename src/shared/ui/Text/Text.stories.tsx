import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Asdasd asd a asd',
  children: 'Asdasd asd a asd ddddddasdqd sgv dfg dfgggg dfggdfg',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Asdasd asd a asd',
  children: 'Asdasd asd a asd ddddddasdqd sgv dfg dfgggg dfggdfg',
};
PrimaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const PrimaryOnlyTitle = Template.bind({});
PrimaryOnlyTitle.args = {
  title: 'Asdasd asd a asd',
};

export const PrimaryOnlyChildren = Template.bind({});
PrimaryOnlyChildren.args = {
  children: 'Asdasd asd a asd',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Asdasd asd a asd',
  children: 'Asdasd asd a asd ddddddasdqd sgv dfg dfgggg dfggdfg',
  theme: 'error',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Asdasd asd a asd',
  children: 'Asdasd asd a asd ddddddasdqd sgv dfg dfgggg dfggdfg',
  theme: 'error',
};
ErrorDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
