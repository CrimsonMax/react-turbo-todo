import { Box, Button, Checkbox, Typography } from '@mui/material';

function Todo() {

  const mainBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: 1,
    height: 'fit-content'
  }

  const checkBoxStyle = {
    '& .MuiSvgIcon-root': { fontSize: 28 },
    width: 56,
    height: 56,
    alignSelf: 'center'
  }

  const textStyle = { 
    height: '100%', 
    backgroundColor: 'gold', 
    width: 695, 
    wordBreak: 'break-word', 
    borderRadius: 4 
  }

  const buttonStyle = { 
    width: 150, 
    height: 56, 
    alignSelf: 'center' 
  }

  return (
    <>
      <Box sx={mainBoxStyle}>
        <Checkbox sx={checkBoxStyle} color="success" />
        <Typography sx={textStyle} align='center' variant="h6" component="div">
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Button sx={buttonStyle} color="error" variant="contained">Delete</Button>
      </Box>
    </>
  );
}

export default Todo;