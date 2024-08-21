import { useState, ChangeEvent, useEffect } from "react";
import "./App.css";
import InputSection from "../InputSection/InputSection";
import TodoList from "../TodoList/TodoList";
import TodoSectionButtons from "../TodoSectionButtons/TodoSectionButtons";
import { TaskType, ButtonSectionDataType, EStatusType } from "../../Types";

const App = () => {
  const getInitialTasks = (): TaskType[] => {
    const tasksFromStorage = localStorage.getItem("tasks");

    return tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
  };

  const [tasks, setTasks] = useState<TaskType[]>(getInitialTasks);
  const [inputValue, setInputValue] = useState<string>("");
  const [activeButtonId, setActiveButtonId] = useState<number>(2);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const activeCountTasks = tasks.filter(
    (task) => task.status === EStatusType.active
  ).length;

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const applyFilter = (filterId: number): TaskType[] => {
    switch (filterId) {
      case 1:
        return tasks.filter(({ status }) => status === EStatusType.active);
      case 3:
        return tasks.filter(({ status }) => status === EStatusType.completed);
      default:
        return tasks;
    }
  };

  const clearCompletedTasks = () => {
    setTasks((prev) =>
      prev.filter(({ status }) => status !== EStatusType.completed)
    );
  };

  const addTask = () => {
    if (!inputValue.trim()) return;

    const newTask: TaskType = {
      id: Date.now(),
      text: inputValue,
      status: EStatusType.active,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const changeStatusHandler = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        taskId === task.id ? { ...task, status: EStatusType.completed } : task
      )
    );
  };

  const buttonsData: ButtonSectionDataType[] = [
    { id: 1, name: "Active" },
    { id: 2, name: "All" },
    { id: 3, name: "Completed" },
    { id: 4, name: "Clear Completed", action: clearCompletedTasks },
  ];

  return (
    <div className="todo-app">
      <h1 className="todo-app__header">My Todo List</h1>
      <InputSection
        placeholderInput="Add a new task"
        keyPressHandler={handleKeyDown}
        handlerInput={handleInput}
        addTaskHandler={addTask}
        buttonAddTaskName="Add"
        type="text"
        inputValue={inputValue}
      />
      <TodoList
        completeNameBtn="✓"
        tasks={applyFilter(activeButtonId)}
        changeStatusHandler={changeStatusHandler}
      />
      <TodoSectionButtons
        getFilterTasks={setActiveButtonId}
        activeTasksCountText={`${activeCountTasks} items left`}
        activeButtonId={activeButtonId}
        buttonsData={buttonsData}
      />
    </div>
  );
};

export default App;
