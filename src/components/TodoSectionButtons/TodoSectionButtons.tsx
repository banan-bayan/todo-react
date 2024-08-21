import Button from "../Button/Button";
import { ButtonSectionDataType } from "../../Types";
interface TodoSectionButtonsProps {
  buttonsData: ButtonSectionDataType[];
  activeButtonId: number;
  activeTasksCountText: string;
  getFilterTasks: (id: number) => void
}
const TodoSectionButtons = ({
  getFilterTasks,
  buttonsData,
  activeButtonId,
  activeTasksCountText,
}: TodoSectionButtonsProps) => {
  return (
      <div className="todo-buttons">
        <div className='todo-buttons__active-tasks-count'>{activeTasksCountText}</div>
        {buttonsData.map(({ id, name, action }: ButtonSectionDataType) => {
          return (
         
            <Button
              key={id}
              clickHandler={!action ? () => getFilterTasks(id) : () => action(id)}
              className={id === activeButtonId && activeButtonId ? 'todo-buttons__button todo-buttons__button-active' : 'todo-buttons__button'}
              id={id}
            >
              {name}
            </Button>
          );
        })}
      </div>
  );
};

export default TodoSectionButtons;
