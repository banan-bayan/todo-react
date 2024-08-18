import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import InputSection from "./InputSection";
import TodoList from "./TodoList";
import TodoSectionButtons from "./TodoSectionButtons";
import { TaskType, ButtonSectionDataType } from "./Types";

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [visibleTasks, setVisibleTasks] = useState<TaskType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [activeButtonId, setActiveButtonId] = useState<number>(2);

  const activeCountTasks = tasks.filter((task) => task.status === "active").length;

  useEffect(() => {
    applyFilter(activeButtonId);
  }, [tasks, activeButtonId]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const applyFilter = (filterId: number) => {
    switch (filterId) {
      case 1:
        setVisibleTasks(tasks.filter(({ status }) => status === "active"));
        break;
      case 2:
        setVisibleTasks(tasks);
        break;
      case 3:
        setVisibleTasks(tasks.filter(({ status }) => status === "completed"));
        break;
      case 4:
        clearCompletedTasks();
        break;
      default:
        setVisibleTasks(tasks);
    }
  };

  const clearCompletedTasks = () => {
    const filteredTasks = tasks.filter(({ status }) => status !== "completed");
    setTasks(filteredTasks);
    setVisibleTasks(filteredTasks);
  };

  const addTask = () => {
    if (inputValue.trim()) {
      const newTask: TaskType = {
        id: Date.now(),
        text: inputValue,
        status: "active",
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const changeStatusHandler = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        taskId === task.id ? { ...task, status: "completed" } : task
      )
    );
  };

  const buttonsData: ButtonSectionDataType[] = [
    { id: 1, name: "Active" },
    { id: 2, name: "All" },
    { id: 3, name: "Completed" },
    { id: 4, name: "Clear Completed" },
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
        completeNameBtn="Complete"
        tasks={visibleTasks}
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
