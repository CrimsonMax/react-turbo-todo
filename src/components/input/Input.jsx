import { Button, Container, TextField } from "@mui/material";

function Input() {
  return (
    <>
    <Container sx={{ display: 'flex', justifyContent: 'center', gap: 1, height: 56 }}>
      <TextField sx={{ width: 600 }} id="outlined-basic" label="My todo" variant="outlined" />
      <Button sx={{ width: 150 }} variant="contained">Add Todo</Button>
      <Button sx={{ width: 150 }} color="secondary" variant="contained">Clear</Button>
    </Container>
    </>
  );
}

export default Input;