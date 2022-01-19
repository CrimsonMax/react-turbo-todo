import Container from '@mui/material/Container';
import { Button, Checkbox, Typography } from '@mui/material';

function Todo() {
  return (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'center', gap: 1, height: 'fit-content' }}>
        <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, width: 56, height: 56, alignSelf: 'center' }} color="success" />
        <Typography sx={{ height: '100%', backgroundColor: 'gold', width: 695, wordBreak: 'break-word', borderRadius: 4 }} align='center' variant="h6" component="div">
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Button sx={{ width: 150, height: 56, alignSelf: 'center' }} color="error" variant="contained">Delete</Button>
      </Container>
    </>
  );
}

export default Todo;