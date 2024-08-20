import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
const Button = ({ clickHandler, children, isDisable, className, id, }) => {
    return (_jsx(_Fragment, { children: _jsx("button", { className: className, disabled: isDisable, onClick: () => clickHandler(id), children: children }) }));
};
export default Button;
