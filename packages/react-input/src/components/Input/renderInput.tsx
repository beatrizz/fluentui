import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { InputSlots, InputState } from './Input.types';

/**
 * Render the final JSX of Input
 */
export const renderInput = (state: InputState) => {
  const { slots, slotProps } = getSlots<InputSlots>(state);
  return (
    <slots.root {...slotProps.root}>
      <slots.contentBefore {...slotProps.contentBefore} />
      <slots.input {...slotProps.input} />
      <slots.contentAfter {...slotProps.contentAfter} />
    </slots.root>
  );
};
