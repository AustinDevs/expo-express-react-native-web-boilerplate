import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SampleButton from '.';

storiesOf('SampleButton', module)
  .add('Default', () =>
    <SampleButton
      onPress={action('hello')}
      title='Default'
    />
  )
  .add('Blue', () =>
    <SampleButton
      onPress={() => action('hello')}
      title='Default'
      color='blue'
    />
  );