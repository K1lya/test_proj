import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';

export default {
  title: 'CHANGE!!!/ArticleListItemSkeleton',
  component: ArticleListItemSkeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleListItemSkeleton>;

const Template: ComponentStory<typeof ArticleListItemSkeleton> = (args) => <ArticleListItemSkeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [ThemeDecorator(ThemeEnum.DARK)];
