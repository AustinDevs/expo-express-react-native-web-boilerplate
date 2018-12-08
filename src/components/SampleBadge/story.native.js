import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SampleBadge from '.';

storiesOf('SampleBadge', module)
  .add('Default', () =>
    <SampleBadge
      text='42'
    />
  )
  .add('Blue', () =>
    <SampleBadge
      text='B'
      backgroundColor='blue'
      textColor='white'
    />
  );