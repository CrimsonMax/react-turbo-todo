import './App.css';
import Container from '@mui/material/Container';
import Input from './components/input/Input';
import Todo from './components/todo/Todo';
import { Box } from '@mui/material';

function App() {

  const mainContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 1
  }

  const todoBoxStyle = {
    maxHeight: 500,
    overflowY: 'overlay',
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    gap: 1
  }

  return (
    <div className="App">
      {/* <div className="max"> */}
      <Container sx={mainContainerStyle}>
        <Input />
        <Box sx={todoBoxStyle}>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </Box>
      </Container>
      {/* </div> */}

    </div>
  );
}

export default App;