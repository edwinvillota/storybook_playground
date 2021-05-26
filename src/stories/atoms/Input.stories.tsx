import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Input } from 'components/atoms';

export default {
  title: 'Atoms/Input',
  component: Input,
  decorators: [withDesign],
};

const Template: Story<ComponentProps<typeof Input>> = (args) => <Input {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/eS4mxbgUESn2Tv2OSNTpDa/Untitled?node-id=1%3A2',
  },
};
