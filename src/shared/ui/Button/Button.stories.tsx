import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  theme: ButtonThemeEnum.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Button',
  theme: ButtonThemeEnum.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  theme: ButtonThemeEnum.OUTLINE,
};

export const OutlineM = Template.bind({});
OutlineM.args = {
  children: 'Button',
  theme: ButtonThemeEnum.OUTLINE,
  size: ButtonSizeEnum.M,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
  children: 'Button',
  theme: ButtonThemeEnum.OUTLINE,
  size: ButtonSizeEnum.L,
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
  children: 'Button',
  theme: ButtonThemeEnum.OUTLINE,
  size: ButtonSizeEnum.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
OutlineDark.args = {
  children: 'Button',
  theme: ButtonThemeEnum.OUTLINE,
};

export const Background = Template.bind({});
Background.args = {
  children: 'Button',
  theme: ButtonThemeEnum.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Button',
  theme: ButtonThemeEnum.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonThemeEnum.BACKGROUND_INVERTED,
  square: true,
};

export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  theme: ButtonThemeEnum.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSizeEnum.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  theme: ButtonThemeEnum.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSizeEnum.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  theme: ButtonThemeEnum.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSizeEnum.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  theme: ButtonThemeEnum.OUTLINE,
  disabled: true,
};

export const DisabledDark = Template.bind({});
DisabledDark.args = {
  children: 'Button',
  theme: ButtonThemeEnum.OUTLINE,
  disabled: true,
};
DisabledDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
