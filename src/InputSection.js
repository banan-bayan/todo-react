import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "./Button";
import Input from "./Input";
const InputSection = ({ addTaskHandler, buttonAddTaskName, type, inputValue, handlerInput, keyPressHandler, placeholderInput, }) => {
    return (_jsxs("div", { className: "todo-app__input-section", children: [_jsx(Input, { placeholder: placeholderInput, className: "todo-app__input", keyPressHandler: keyPressHandler, type: type, value: inputValue, handlerInput: handlerInput }), _jsx(Button, { className: "todo-app__add-button", clickHandler: addTaskHandler, children: buttonAddTaskName })] }));
};
export default InputSection;
