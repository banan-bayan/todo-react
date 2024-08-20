import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "./Button";
const TodoItem = ({ children, changeStatusHandler, isDisable, classNameBtn, completeNameBtn, }) => {
    return (_jsxs("li", { className: "todo-item", children: [_jsx("span", { className: "todo-item__text", children: children }), _jsx(Button, { isDisable: isDisable, className: `todo-item__complete-button${classNameBtn}`, clickHandler: changeStatusHandler, children: completeNameBtn })] }));
};
export default TodoItem;
