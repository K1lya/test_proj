import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ArticleList } from './ArticleList';

export default {
  title: 'CHANGE!!!/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [ThemeDecorator(ThemeEnum.DARK)];
