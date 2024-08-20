import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "./App.css";
import InputSection from "./InputSection";
import TodoList from "./TodoList";
import TodoSectionButtons from "./TodoSectionButtons";
const App = () => {
    const getInitialTasks = () => {
        const tasksFromStorage = localStorage.getItem("tasks");
        return tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
    };
    const [tasks, setTasks] = useState(getInitialTasks);
    const [inputValue, setInputValue] = useState("");
    const [activeButtonId, setActiveButtonId] = useState(2);
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    const activeCountTasks = tasks.filter((task) => task.status === "active").length;
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    const applyFilter = (filterId) => {
        switch (filterId) {
            case 1:
                return tasks.filter(({ status }) => status === "active");
            case 3:
                return tasks.filter(({ status }) => status === "completed");
            default:
                return tasks;
        }
    };
    const clearCompletedTasks = () => {
        setTasks((prev) => prev.filter(({ status }) => status !== "completed"));
    };
    const addTask = () => {
        if (inputValue.trim()) {
            const newTask = {
                id: Date.now(),
                text: inputValue,
                status: "active",
            };
            setTasks((prevTasks) => [...prevTasks, newTask]);
            setInputValue("");
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    };
    const changeStatusHandler = (taskId) => {
        setTasks((prevTasks) => prevTasks.map((task) => taskId === task.id ? { ...task, status: "completed" } : task));
    };
    const buttonsData = [
        { id: 1, name: "Active" },
        { id: 2, name: "All" },
        { id: 3, name: "Completed" },
        { id: 4, name: "Clear Completed", action: clearCompletedTasks },
    ];
    return (_jsxs("div", { className: "todo-app", children: [_jsx("h1", { className: "todo-app__header", children: "My Todo List" }), _jsx(InputSection, { placeholderInput: "Add a new task", keyPressHandler: handleKeyDown, handlerInput: handleInput, addTaskHandler: addTask, buttonAddTaskName: "Add", type: "text", inputValue: inputValue }), _jsx(TodoList, { completeNameBtn: "Complete", tasks: applyFilter(activeButtonId), changeStatusHandler: changeStatusHandler }), _jsx(TodoSectionButtons, { getFilterTasks: setActiveButtonId, activeTasksCountText: `${activeCountTasks} items left`, activeButtonId: activeButtonId, buttonsData: buttonsData })] }));
};
export default App;
