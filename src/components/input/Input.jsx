import { Box, Button, TextField } from "@mui/material";
import { inputStyle } from "./inputStyle";

function Input(props) {

  const inputHandler = (e) => {
    props.setInputText(e.target.value)
  }

  const addTodoHandler = () => {
    let trimmeredInput = props.inputText.trim()

    if (trimmeredInput !== '') {
      props.setTodoArray([
        ...props.todoArray,
        {
          text: props.inputText,
          checked: false,
          id: Date.now()
        }
      ])
    }

    props.setInputText('')
  }
  
  const enterHandler = (e) => {
    if (e.key === 'Enter') return addTodoHandler()
  }

  const clearHandler = () => {
    props.setInputText('')
  }

  return (
    <>
      <Box sx={inputStyle.mainBoxStyle}>
        <TextField
          onChange={inputHandler}
          onKeyPress={enterHandler}
          value={props.inputText}
          sx={inputStyle.textFieldStyle}
          id="outlined-basic"
          label="My todo"
          variant="outlined"
        />
        <Button onClick={addTodoHandler} sx={inputStyle.buttonStyle} variant="contained">
          Add Todo
        </Button>
        <Button onClick={clearHandler} sx={inputStyle.buttonStyle} color="secondary" variant="contained">
          Clear
        </Button>
      </Box>
    </>
  );
}

export default Input;