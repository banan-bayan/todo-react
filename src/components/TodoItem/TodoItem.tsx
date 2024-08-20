import Button from "../Button/Button";

interface TodoItemProps {
  children: React.ReactNode;
  changeStatusHandler: () => void;
  isDisable: boolean;
  classNameBtn: string;
  completeNameBtn: string;
}

const TodoItem = ({
  children,
  changeStatusHandler,
  isDisable,
  classNameBtn,
  completeNameBtn,
}: TodoItemProps) => {
  return (
    <li className="todo-item">
      <span className="todo-item__text">{children}</span>
      <Button
        isDisable={isDisable}
        className={classNameBtn}
        clickHandler={changeStatusHandler}
      >
        {completeNameBtn}
      </Button>
    </li>
  );
};

export default TodoItem;
