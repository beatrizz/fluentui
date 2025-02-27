import * as React from 'react';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';
import { makeStyles } from '@fluentui/react-make-styles';
import { Input } from '../index';

const useStyles = makeStyles({
  root: {
    '& label': { display: 'block', paddingBottom: '2px' },
    '& label:not(:first-child)': { paddingTop: '20px' },
  },
});

export const Type = () => {
  const emailId = useId('input-email');
  const urlId = useId('input-url');
  const passwordId = useId('input-password');
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label htmlFor={emailId}>Email</Label>
      <Input type="email" id={emailId} />

      <Label htmlFor={urlId}>URL</Label>
      <Input type="url" id={urlId} />

      <Label htmlFor={passwordId}>Password</Label>
      <Input type="password" defaultValue="password" id={passwordId} />
    </div>
  );
};

Type.parameters = {
  docs: {
    description: {
      story:
        'An input can have a custom text-based [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types) ' +
        'such as `email`, `url`, or `password` based on the type of value the user will enter.\n\n' +
        'Note that no custom styling is currently applied for alternative types, and some types may ' +
        'activate browser-default styling which does not match the Fluent design language.',
    },
  },
};
