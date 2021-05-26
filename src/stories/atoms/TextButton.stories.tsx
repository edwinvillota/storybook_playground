import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { TextButton } from 'components/atoms';
import { ButtonSizeVariants, ButtonColorVariants } from 'ts/enums';

export default {
  title: 'Atoms/TextButton',
  component: TextButton,
  argTypes: {
    sizeVariant: {
      control: {
        type: 'select',
        options: Object.keys(ButtonSizeVariants),
      },
    },
    colorVariant: {
      control: {
        type: 'select',
        options: Object.keys(ButtonColorVariants),
      },
    },
  },
};

const Template: Story<ComponentProps<typeof TextButton>> = (args) => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Test',
  sizeVariant: ButtonSizeVariants.normal,
  colorVariant: ButtonColorVariants.primary,
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'Disabled button',
  sizeVariant: ButtonSizeVariants.normal,
  colorVariant: ButtonColorVariants.primary,
  disabled: true,
};
