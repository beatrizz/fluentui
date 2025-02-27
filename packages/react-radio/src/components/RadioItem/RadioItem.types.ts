import type { InputHTMLAttributes } from 'react';
import type { LabelProps } from '@fluentui/react-label';
import type {
  ComponentProps,
  ComponentState,
  IntrinsicShorthandProps,
  ObjectShorthandProps,
} from '@fluentui/react-utilities';

export type RadioItemSlots = {
  root: IntrinsicShorthandProps<'span'>;
  /**
   * Renders the radio indicator.
   */
  indicator: IntrinsicShorthandProps<'div'>;
  /**
   * Hidden input that handles the checkbox's functionality.
   */
  input: IntrinsicShorthandProps<'input'>;
  /**
   * Label to be associated with Radio element.
   */
  label: ObjectShorthandProps<LabelProps>;

  /**
   * Subtext added below label.
   */
  subtext?: IntrinsicShorthandProps<'span'>;
};

export type RadioItemCommons = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Determines whether the label should be positioned bellow the indicator or next to it.
   * @defaultvalue 'inline'
   */
  labelPosition?: 'bottom' | 'inline';
  /**
   * Field required to pass className to container instead of input
   * this will be solved by https://github.com/microsoft/fluentui/pull/18983
   */
  containerClassName?: string;
};

/**
 * RadioItem Props
 */
export type RadioItemProps = ComponentProps<RadioItemSlots> &
  RadioItemCommons & {
    /**
     * ID of the native element that represents the checkbox.
     */
    id?: string;
  };

/**
 * State used in rendering RadioItem
 */
export type RadioItemState = ComponentState<RadioItemSlots> & RadioItemCommons;
