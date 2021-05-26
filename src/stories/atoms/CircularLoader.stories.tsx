import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { CircularLoader } from 'components/atoms';

export default {
  title: 'Atoms/CircularLoader',
  component: CircularLoader,
};

const Template: Story<ComponentProps<typeof CircularLoader>> = (args) => <CircularLoader {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.args = {
  size: 60,
};
