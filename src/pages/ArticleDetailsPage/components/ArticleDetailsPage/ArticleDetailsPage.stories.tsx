import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [ThemeDecorator(ThemeEnum.DARK)];
