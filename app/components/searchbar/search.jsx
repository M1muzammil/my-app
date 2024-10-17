
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        border: "2px solid #48178C",
        borderRadius: "10px",
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          '& input::placeholder': {
            color: '#48178C', 
          },
        }}
        placeholder="Search User Here!"
        inputProps={{ "aria-label": "search User Here!" }}
      />
      <IconButton
        type="button"
        color='#48178C' 
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}

