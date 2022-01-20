import { Box } from "@mui/material";
import Todo from "../todo/Todo";
import { todoContainerStyle } from "./todoContainerStyle";

function TodoContainer(props) {

  return (
    <>
      <Box sx={todoContainerStyle.todoBoxStyle}>
        {props.todoArray.map((elem) => (
          <Todo
            todoArray={props.todoArray}
            setTodoArray={props.setTodoArray}
            todo={elem}
            text={elem.text}
            checked={elem.checked}
            key={elem.id}
          />
        ))}
      </Box>
    </>
  );
}

export default TodoContainer;