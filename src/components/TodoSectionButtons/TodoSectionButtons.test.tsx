import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoSectionButtons from './TodoSectionButtons';
import { ButtonSectionDataType } from '../../Types';

describe('TodoSectionButtons Component', () => {
  const mockGetFilterTasks = jest.fn();

  const buttonsData: ButtonSectionDataType[] = [
    { id: 1, name: 'Active' },
    { id: 2, name: 'All' },
    { id: 3, name: 'Completed' },
    { id: 4, name: 'Clear Completed' },
  ];

  test('renders all buttons', () => {
    render(
      <TodoSectionButtons
        buttonsData={buttonsData}
        activeButtonId={2}
        activeTasksCountText="3 items left"
        getFilterTasks={mockGetFilterTasks}
      />
    );

    buttonsData.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test('renders active tasks count', () => {
    render(
      <TodoSectionButtons
        buttonsData={buttonsData}
        activeButtonId={2}
        activeTasksCountText="3 items left"
        getFilterTasks={mockGetFilterTasks}
      />
    );

    expect(screen.getByText('3 items left')).toBeInTheDocument();
  });

  test('calls getFilterTasks with correct id on button click', () => {
    render(
      <TodoSectionButtons
        buttonsData={buttonsData}
        activeButtonId={2}
        activeTasksCountText="3 items left"
        getFilterTasks={mockGetFilterTasks}
      />
    );

    fireEvent.click(screen.getByText('Active'));
    expect(mockGetFilterTasks).toHaveBeenCalledWith(1);
  });

  test('applies active class to the active button', () => {
    render(
      <TodoSectionButtons
        buttonsData={buttonsData}
        activeButtonId={2}
        activeTasksCountText="3 items left"
        getFilterTasks={mockGetFilterTasks}
      />
    );

    expect(screen.getByText('All')).toHaveClass('todo-buttons__button-active');
  });

  test('does not apply active class to non-active buttons', () => {
    render(
      <TodoSectionButtons
        buttonsData={buttonsData}
        activeButtonId={2}
        activeTasksCountText="3 items left"
        getFilterTasks={mockGetFilterTasks}
      />
    );

    expect(screen.getByText('Active')).not.toHaveClass('todo-buttons__button-active');
  });
});
