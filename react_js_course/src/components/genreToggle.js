import React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default class GenreToggle extends React.Component {

  render() {
    return (
      <ToggleButtonGroup
        color="primary"
        value="left"

        exclusive
        onChange={() => {}}
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="comedy">Comedy</ToggleButton>
        <ToggleButton value="crime">Crime</ToggleButton>
      </ToggleButtonGroup>
    )
  }
}
