
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
 import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
      width:"200px",
        // border: "2px solid #48178C",
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
        placeholder="Search Post Here!"
        inputProps={{ "aria-label": "search Post Here!" }}
      />
      <IconButton
        type="button"
        color='#48178C' 
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <TuneIcon/>
      </IconButton>
    
    </Paper>
  );
}

