import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { StoryForm } from 'components/molecules';

export default {
  title: 'Molecules/StoryForm',
  component: StoryForm,
  decorators: [withDesign],
};

const Template: Story<ComponentProps<typeof StoryForm>> = (args) => <StoryForm {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/eS4mxbgUESn2Tv2OSNTpDa/ReusableComponents?node-id=1%3A21',
  },
};
