import TodoItem from "./TodoItem";
import { TaskType } from "./Types";
interface TodoListProps {
  tasks: TaskType[];
  changeStatusHandler: (id: number) => void;
  completeNameBtn: string;
}
const TodoList = ({
  tasks,
  changeStatusHandler,
  completeNameBtn,
}: TodoListProps) => {
  return (
    <ul className="todo-list">
      {tasks.map(({ id, text, status }) => (
        <TodoItem
          completeNameBtn={completeNameBtn}
          classNameBtn={status === "completed" ? "-disabled" : ""}
          isDisable={status === "completed"}
          key={id}
          changeStatusHandler={() => changeStatusHandler(id)}
        >
          {text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
