import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
const Input = ({ type, value, handlerInput, keyPressHandler, className, placeholder, }) => {
    return (_jsx(_Fragment, { children: _jsx("input", { className: className, type: type, value: value, placeholder: placeholder, onKeyDown: keyPressHandler, onChange: handlerInput }) }));
};
export default Input;
