import './App.css';
import Container from '@mui/material/Container';
import Input from './components/input/Input';
import Todo from './components/todo/Todo';

function App() {
  return (
    <div className="App">
      <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: 1 }}>
        <Input />
        <Todo />
      </Container>
    </div>
  );
}

export default App;