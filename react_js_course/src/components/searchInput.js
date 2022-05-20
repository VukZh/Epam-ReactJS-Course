import React from 'react';

import {TextField} from "@mui/material";
import Button from "@mui/material/Button";


export default class SearchInput extends React.PureComponent {

  render() {
    return (
      <>
        <TextField label="Search" variant="outlined" id="raised-button-file"/>
        <div/>
        <label htmlFor="Search">
          <Button variant="contained">
            Search
          </Button>
        </label>
      </>

  )
  }
}