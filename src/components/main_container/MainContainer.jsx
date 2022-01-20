import { Container } from "@mui/material";
import Input from "../input/Input";
import TodoContainer from "../todo_container/TodoContainer";
import { mainContainerStyle } from "./mainContainerStyle";

function MainContainer(props) {

  return (
    <>
      <Container sx={mainContainerStyle.mainContainerStyle}>
        <Input
          inputText={props.inputText}
          setInputText={props.setInputText}
          todoArray={props.todoArray}
          setTodoArray={props.setTodoArray}
        />
        <TodoContainer
          todoArray={props.todoArray}
          setTodoArray={props.setTodoArray}
        />
      </Container>
    </>
  );
}

export default MainContainer;