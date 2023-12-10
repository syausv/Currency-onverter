import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";

const NewMySelect = ({options, defaultValue, value, onChange}) => {

  return (

    <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
      <InputLabel id="demo-simple-select-standard-label">{defaultValue}</InputLabel>
      <Select
        value={value}
        onChange={event => onChange(event.target.value)}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Age"
          >
          <MenuItem disabled value="">
          <em>{defaultValue}</em>
          </MenuItem>
        {options.map(option =>
          <MenuItem key={option.value} value={option.value}>
        {option.name}</MenuItem>
          )}
          </Select>
          </FormControl>

  );
};

export default NewMySelect;


