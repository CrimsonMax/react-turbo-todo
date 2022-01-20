import { useEffect, useState } from 'react';
import './App.css';
import MainContainer from './components/main_container/MainContainer';

function App() {

  // Main State
  const [inputText, setInputText] = useState('')
  const [todoArray, setTodoArray] = useState([])

  // Local Storage
  useEffect(() => {
    function getLocalTodos() {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]))
      } else {
        let localTodos = JSON.parse(localStorage.getItem('todos'))
        setTodoArray(localTodos)
      }
    }

    getLocalTodos()
  }, [])

  useEffect(() => {
    function saveLocalTodos() {
      localStorage.setItem('todos', JSON.stringify(todoArray))
    }

    saveLocalTodos()
  }, [todoArray])


  return (
    <>
      <MainContainer
        inputText={inputText}
        setInputText={setInputText}
        todoArray={todoArray}
        setTodoArray={setTodoArray}
      />
    </>
  );
}

export default App;