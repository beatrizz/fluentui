import * as React from 'react';

import { Menu, MenuItem, MenuList, MenuPopover, MenuTrigger } from '@fluentui/react-menu';
import { CalendarMonthRegular } from '@fluentui/react-icons';
import { SplitButton, MenuButtonProps } from '../../../index'; // codesandbox-dependency: @fluentui/react-button ^9.0.0-beta

export const SizeLarge = () => {
  return (
    <>
      <Menu positioning="below-end">
        <MenuTrigger>
          {(triggerProps: MenuButtonProps) => (
            <SplitButton menuButton={triggerProps} primaryActionButton={'This is a split button'} size="large" />
          )}
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <MenuItem>Item a</MenuItem>
            <MenuItem>Item b</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>

      <Menu positioning="below-end">
        <MenuTrigger>
          {(triggerProps: MenuButtonProps) => (
            <SplitButton
              menuButton={triggerProps}
              primaryActionButton={'This is a split button'}
              icon={<CalendarMonthRegular />}
              size="large"
            />
          )}
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <MenuItem>Item a</MenuItem>
            <MenuItem>Item b</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>

      <Menu positioning="below-end">
        <MenuTrigger>
          {(triggerProps: MenuButtonProps) => (
            <SplitButton menuButton={triggerProps} primaryActionButton={'This is a split button'} size="large" />
          )}
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <MenuItem>Item a</MenuItem>
            <MenuItem>Item b</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};

SizeLarge.storyName = 'Size: large';
