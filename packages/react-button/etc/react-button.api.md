## API Report File for "@fluentui/react-button"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ARIAButtonShorthandProps } from '@fluentui/react-aria';
import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import { ForwardRefComponent } from '@fluentui/react-utilities';
import type { IntrinsicShorthandProps } from '@fluentui/react-utilities';
import type { ObjectShorthandProps } from '@fluentui/react-utilities';
import * as React_2 from 'react';

// @public
export const Button: ForwardRefComponent<ButtonProps>;

// @public (undocumented)
export const buttonClassName = "fui-Button";

// @public (undocumented)
export type ButtonCommons = {
    appearance?: 'primary' | 'outline' | 'subtle' | 'transparent';
    block: boolean;
    disabledFocusable: boolean;
    disabled: boolean;
    iconPosition?: 'before' | 'after';
    shape: 'rounded' | 'circular' | 'square';
    size: 'small' | 'medium' | 'large';
};

// @public (undocumented)
export type ButtonProps = ComponentProps<ButtonSlots> & Partial<ButtonCommons>;

// @public (undocumented)
export type ButtonSlots = {
    root: ARIAButtonShorthandProps;
    icon?: IntrinsicShorthandProps<'span'>;
};

// @public (undocumented)
export type ButtonState = ComponentState<ButtonSlots> & ButtonCommons & {
    iconOnly: boolean;
};

// @public
export const CompoundButton: ForwardRefComponent<CompoundButtonProps>;

// @public (undocumented)
export const compoundButtonClassName = "fui-CompoundButton";

// @public (undocumented)
export type CompoundButtonProps = ComponentProps<CompoundButtonSlots> & Partial<ButtonCommons>;

// @public (undocumented)
export type CompoundButtonSlots = ButtonSlots & {
    secondaryContent?: IntrinsicShorthandProps<'span'>;
    contentContainer: IntrinsicShorthandProps<'span'>;
};

// @public (undocumented)
export type CompoundButtonState = ComponentState<CompoundButtonSlots> & Omit<ButtonState, keyof ButtonSlots | 'components'>;

// @public
export const MenuButton: ForwardRefComponent<MenuButtonProps>;

// @public (undocumented)
export const menuButtonClassName = "fui-MenuButton";

// Warning: (ae-forgotten-export) The symbol "MenuTriggerChildProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type MenuButtonProps = ComponentProps<MenuButtonSlots> & Partial<Omit<ButtonCommons, 'iconPosition'>> & Partial<MenuTriggerChildProps>;

// @public (undocumented)
export type MenuButtonSlots = ButtonSlots & {
    menuIcon?: IntrinsicShorthandProps<'span'>;
};

// @public (undocumented)
export type MenuButtonState = ComponentState<MenuButtonSlots> & Omit<ButtonState, keyof ButtonSlots | 'components' | 'iconPosition'>;

// @public
const renderButton: (state: ButtonState) => JSX.Element;
export { renderButton }
export { renderButton as renderToggleButton }

// @public
export const renderCompoundButton: (state: CompoundButtonState) => JSX.Element;

// @public
export const renderMenuButton: (state: MenuButtonState) => JSX.Element;

// @public
export const renderSplitButton: (state: SplitButtonState) => JSX.Element;

// @public
export const SplitButton: ForwardRefComponent<SplitButtonProps>;

// @public (undocumented)
export const splitButtonClassName = "fui-SplitButton";

// @public (undocumented)
export type SplitButtonProps = ComponentProps<SplitButtonSlots> & Omit<ButtonProps, 'root'> & Omit<MenuButtonProps, 'root'>;

// @public (undocumented)
export type SplitButtonSlots = {
    root: IntrinsicShorthandProps<'div'>;
    menuButton?: ObjectShorthandProps<MenuButtonProps>;
    primaryActionButton?: ObjectShorthandProps<ButtonProps>;
};

// @public (undocumented)
export type SplitButtonState = ComponentState<SplitButtonSlots> & Omit<ButtonState, 'components' | 'iconOnly' | 'root'> & Omit<MenuButtonState, 'components' | 'iconOnly' | 'root'>;

// @public
export const ToggleButton: ForwardRefComponent<ToggleButtonProps>;

// @public (undocumented)
export const toggleButtonClassName = "fui-ToggleButton";

// @public (undocumented)
export type ToggleButtonCommons = {
    checked: boolean;
};

// @public (undocumented)
export type ToggleButtonProps = ButtonProps & Partial<ToggleButtonCommons> & {
    defaultChecked?: boolean;
};

// @public (undocumented)
export type ToggleButtonState = ButtonState & ToggleButtonCommons;

// @public
export const useButton: (props: ButtonProps, ref: React_2.Ref<HTMLButtonElement | HTMLAnchorElement>) => ButtonState;

// @public (undocumented)
export const useButtonStyles: (state: ButtonState) => ButtonState;

// @public
export const useCompoundButton: ({ contentContainer, secondaryContent, ...props }: CompoundButtonProps, ref: React_2.Ref<HTMLButtonElement | HTMLAnchorElement>) => CompoundButtonState;

// @public (undocumented)
export const useCompoundButtonStyles: (state: CompoundButtonState) => CompoundButtonState;

// @public
export const useMenuButton: ({ menuIcon, ...props }: MenuButtonProps, ref: React_2.Ref<HTMLButtonElement | HTMLAnchorElement>) => MenuButtonState;

// @public (undocumented)
export const useMenuButtonStyles: (state: MenuButtonState) => MenuButtonState;

// @public
export const useSplitButton: (props: SplitButtonProps, ref: React_2.Ref<HTMLButtonElement | HTMLAnchorElement>) => SplitButtonState;

// @public (undocumented)
export const useSplitButtonStyles: (state: SplitButtonState) => SplitButtonState;

// @public
export const useToggleButton: ({ checked, defaultChecked, ...props }: ToggleButtonProps, ref: React_2.Ref<HTMLButtonElement | HTMLAnchorElement>) => ToggleButtonState;

// @public (undocumented)
export const useToggleButtonStyles: (state: ToggleButtonState) => ToggleButtonState;

// (No @packageDocumentation comment for this package)

```
