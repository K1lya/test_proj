import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/tests/stories.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 100,
  src: AvatarImg,
  alt: 'Neo',
};
Primary.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: AvatarImg,
  alt: 'Neo',
};
Small.decorators = [ThemeDecorator(ThemeEnum.DARK)];
