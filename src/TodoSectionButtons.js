import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "./Button";
const TodoSectionButtons = ({ getFilterTasks, buttonsData, activeButtonId, activeTasksCountText, }) => {
    return (_jsxs("div", { className: "todo-buttons", children: [_jsx("div", { className: 'todo-buttons__active-tasks-count', children: activeTasksCountText }), buttonsData.map(({ id, name, action }) => {
                return (_jsx(Button, { clickHandler: !action ? () => getFilterTasks(id) : () => action(id), className: id === activeButtonId && activeButtonId ? 'todo-buttons__button todo-buttons__button-active' : 'todo-buttons__button', id: id, children: name }, id));
            })] }));
};
export default TodoSectionButtons;
