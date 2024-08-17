import Button from "./Button";
import Input from "./Input";
interface InputProps {
  handlerInput: React.ChangeEventHandler<HTMLInputElement>
  addTaskHandler: () => void
  buttonAddTaskName: 'Add'
  type: string
  inputValue: string
  placeholderInput: string
  keyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void
} 
const InputSection = ({addTaskHandler, buttonAddTaskName, type, inputValue, handlerInput, keyPressHandler, placeholderInput}: InputProps) => {
  return (
    <div className="todo-app__input-section">
      <Input placeholder={placeholderInput} className="todo-app__input" keyPressHandler={keyPressHandler} type={type} value={inputValue} handlerInput={handlerInput}/>
      <Button className="todo-app__add-button" clickHandler={addTaskHandler}>{buttonAddTaskName}</Button>
    </div>
  );
};

export default InputSection;
