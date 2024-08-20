import { jsx as _jsx } from "react/jsx-runtime";
import TodoItem from "./TodoItem";
const TodoList = ({ tasks, changeStatusHandler, completeNameBtn, }) => {
    return (_jsx("ul", { className: "todo-list", children: tasks.map(({ id, text, status }) => (_jsx(TodoItem, { completeNameBtn: completeNameBtn, classNameBtn: status === "completed" ? "-disabled" : "", isDisable: status === "completed", changeStatusHandler: () => changeStatusHandler(id), children: text }, id))) }));
};
export default TodoList;
