import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
const mockTasks = [
    { id: 1, text: 'Task 1', status: 'active' },
    { id: 2, text: 'Task 2', status: 'completed' },
];
const mockChangeStatusHandler = jest.fn();
describe('TodoList Component', () => {
    test('renders the tasks correctly', () => {
        render(_jsx(TodoList, { tasks: mockTasks, changeStatusHandler: mockChangeStatusHandler, completeNameBtn: "Complete" }));
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
    });
    test('calls changeStatusHandler when the button is clicked', () => {
        render(_jsx(TodoList, { tasks: mockTasks, changeStatusHandler: mockChangeStatusHandler, completeNameBtn: "Complete" }));
        const button = screen.getAllByText('Complete')[0];
        fireEvent.click(button);
        expect(mockChangeStatusHandler).toHaveBeenCalledWith(1);
    });
    test('does not call changeStatusHandler for completed tasks', () => {
        render(_jsx(TodoList, { tasks: mockTasks, changeStatusHandler: mockChangeStatusHandler, completeNameBtn: "Complete" }));
        const button = screen.getAllByText('Complete')[1];
        fireEvent.click(button);
        expect(mockChangeStatusHandler).not.toHaveBeenCalledWith(2);
    });
});
