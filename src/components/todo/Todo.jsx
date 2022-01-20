import { Box, Button, Checkbox, Typography } from '@mui/material';
import { todoStyle } from './todoStyle';

function Todo(props) {

  const checkHandler = () => {
    props.setTodoArray(
      props.todoArray.map((elem) => {
        if (elem.id === props.todo.id) {
          return {
            ...elem,
            checked: !elem.checked
          }
        }
        return elem
      })
    )
  }

  const deleteHandler = () => {
    props.setTodoArray(
      props.todoArray.filter((elem) => elem.id !== props.todo.id)
    )
  }

  return (
    <>
      <Box sx={todoStyle.mainBoxStyle}>
        <Checkbox onChange={checkHandler} checked={props.checked} sx={todoStyle.checkBoxStyle} color="success" />
        <Typography sx={props.checked ? todoStyle.textStyle2 : todoStyle.textStyle1} align='center' variant="h6" component="div">
          {props.text}
        </Typography>
        <Button onClick={deleteHandler} sx={todoStyle.buttonStyle} disabled={!props.checked && true} color="error" variant="contained">
          Delete
        </Button>
      </Box>
    </>
  );
}

export default Todo;