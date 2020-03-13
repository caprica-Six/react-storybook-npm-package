import React from 'react';
import {storiesOf} from '@storybook/react';

import {CustomButton} from '../../src/custom-button';

storiesOf('Custom button', module).addWithJSX('simple', () => <CustomButton />);

const LocationCard = ({
  background = '#f5f5f5',
  fontSize = 1,
  fontFamily = 'Helvetica',
  align = 'left',
  color = 'black',
  minWidth = 275,
  margin = 'auto',
  padding = '1em',
  children
}) => (
  <div
    style={{
      background,
      color,
      fontFamily,
      fontSize,
      textAlign: align,
      width: minWidth,
      margin,
      padding
    }}
  >
    {children}
  </div>
);

storiesOf('Location card', module)
  .addWithJSX('Paris', () => (
    <LocationCard
      fontSize={25}
      fontFamily="Arial"
      align="center"
      color="#000"
      padding="1em 2em"
    >
      Location
    </LocationCard>
  ))

  .addWithJSX('London', () => (
    <LocationCard
      fontSize={25}
      fontFamily="Helvetica"
      align="center"
      color="#ee3939"
      padding=".5em 1em"
    >
      Location
    </LocationCard>
  ));
