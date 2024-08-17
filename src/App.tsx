import { useState, ChangeEvent } from "react";
import "./App.css";
import InputSection from "./InputSection";
import TodoList from "./TodoList";
import TodoSectionButtons from "./TodoSectionButtons";
import { TaskType, ButtonSectionDataType } from "./Types";

const App = () => {
  const [tasks, setTasks] = useState<TaskType[] | []>([]);
  const [visibleTasks, setVisibleTasks] = useState<TaskType[] | []>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [activeButtonId, setActiveButtonId] = useState<number>(0);

  const activeCountTasks = tasks.filter(
    (task) => task.status === "active"
  ).length;

  const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const getFilterTasks = (id: number) => {
    console.log(id, "id");
    setActiveButtonId(id);
    if (id === 1) {
      setVisibleTasks(tasks.filter(({ status }) => status === "active"));
    }
    if (id === 2) setVisibleTasks(tasks);

    if (id === 3) {
      setVisibleTasks(tasks.filter(({ status }) => status === "completed"));
    }
    if (id === 4) {
      setTasks((prevTask) =>
        prevTask.filter(({ status }) => status !== "completed")
      );
      setVisibleTasks((prevTask) =>
        prevTask.filter(({ status }) => status !== "completed")
      );
    }
  };

  const addTask = () => {
    if (inputValue.length) {
      const newTask: TaskType = {
        id: Date.now(),
        text: inputValue,
        status: "active",
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setVisibleTasks((prevTasks) => [...prevTasks, newTask]);
      setInputValue("");
    }
  };

  const addNewTaskKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newTask: TaskType = {
        id: Date.now(),
        text: inputValue,
        status: "active",
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setVisibleTasks((prevTasks) => [...prevTasks, newTask]);
      setInputValue("");
    }
  };

  const changeStatusHandler = (TaskId: number) => {
    const change: TaskType[] = tasks.map((task) =>
      TaskId === task.id ? { ...task, status: "completed" } : task
    );
    setTasks(change);
    setVisibleTasks(change);
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
        keyPressHandler={addNewTaskKeyDown}
        handlerInput={handlerInput}
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
        getFilterTasks={getFilterTasks}
        activeTasksCountText={`${activeCountTasks} items left`}
        activeButtonId={activeButtonId}
        buttonsData={buttonsData}
      />
    </div>
  );
};

export default App;
