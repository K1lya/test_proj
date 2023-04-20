import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ProfilePageHeader } from './ProfilePageHeader';

export default {
  title: 'pages/ProfilePageHeader',
  component: ProfilePageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePageHeader>;

const Template: ComponentStory<typeof ProfilePageHeader> = (args) => <ProfilePageHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [ThemeDecorator(ThemeEnum.DARK)];
