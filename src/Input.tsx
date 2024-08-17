interface InputProps {
  type: string;
  value: string
  handlerInput: React.ChangeEventHandler<HTMLInputElement>
  keyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void
  className: string
  placeholder: string
}

const Input = ({ type, value, handlerInput, keyPressHandler, className, placeholder }: InputProps) => {
  return (
    <>
      <input className={className} type={type} value={value} placeholder={placeholder} onKeyDown={keyPressHandler} onChange={handlerInput}/>
    </>
  );
};

export default Input;
