import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import AddNewComment from './AddNewComment';

export default {
  title: 'CHANGE!!!/AddNewComment',
  component: AddNewComment,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddNewComment>;

const Template: ComponentStory<typeof AddNewComment> = (args) => <AddNewComment {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [ThemeDecorator(ThemeEnum.DARK)];
