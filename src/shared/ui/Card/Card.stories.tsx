import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { Text } from '../Text/Text';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: <Text title="123">123</Text> };
