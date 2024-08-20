import { render, screen, fireEvent  } from "@testing-library/react";
import TodoList from "./TodoList";
import { TaskType } from "../../Types";

const mockTasks: TaskType[] =  [
  { id: 1, text: 'Task 1', status: 'active' },
  { id: 2, text: 'Task 2', status: 'completed' },
];

const mockChangeStatusHandler = jest.fn();

describe('TodoList Component', () => {
  test('renders the tasks correctly', () => {
    render(<TodoList tasks={mockTasks} changeStatusHandler={mockChangeStatusHandler} completeNameBtn="✓" />);
    
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  test('calls changeStatusHandler when the button is clicked', () => {
    render(<TodoList tasks={mockTasks} changeStatusHandler={mockChangeStatusHandler} completeNameBtn="✓" />);

    const button = screen.getAllByText('✓')[0];
    fireEvent.click(button);

    expect(mockChangeStatusHandler).toHaveBeenCalledWith(1);
  });

  test('does not call changeStatusHandler for completed tasks', () => {
    render(<TodoList tasks={mockTasks} changeStatusHandler={mockChangeStatusHandler} completeNameBtn="✓" />);

    const button = screen.getAllByText('✓')[1];
    fireEvent.click(button);

    expect(mockChangeStatusHandler).not.toHaveBeenCalledWith(2);
  });
});
