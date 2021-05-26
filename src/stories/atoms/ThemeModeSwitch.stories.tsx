/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Theme, ThemeCtxProvider } from 'context/ThemeCtx';
import { ThemeModeSwitch } from 'components/atoms';

export default {
  title: 'Atoms/ThemeModeSwitch',
  component: ThemeModeSwitch,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    (StoryFn: any) => {
      return (
        <ThemeCtxProvider>
          <Theme>
            <StoryFn />
          </Theme>
        </ThemeCtxProvider>
      );
    },
  ],
};

const Template: Story<ComponentProps<typeof ThemeModeSwitch>> = (args) => <ThemeModeSwitch />;

export const DefaultStory = Template.bind({});
