import { Box, Button, TextField } from "@mui/material";

function Input() {

  const mainBoxStyle = { 
    display: 'flex', 
    justifyContent: 'center', 
    gap: 1, 
    height: 56 
  }

  const textFieldStyle = { 
    width: 600 
  }

  const buttonStyle = { 
    width: 150 
  }
  
  return (
    <>
    <Box sx={mainBoxStyle}>
      <TextField sx={textFieldStyle} id="outlined-basic" label="My todo" variant="outlined" />
      <Button sx={buttonStyle} variant="contained">Add Todo</Button>
      <Button sx={buttonStyle} color="secondary" variant="contained">Clear</Button>
    </Box>
    </>
  );
}

export default Input;