import React from "react";

interface ButtonProps {
  clickHandler: (id?: number) => void;
  children: React.ReactNode;
  isDisable?: boolean;
  className?: string;
  id?: number;
  activeButtonId?: number;
  classNameActiveBtn?: string;
}
const Button = ({
  clickHandler,
  children,
  isDisable,
  className,
  id,
  activeButtonId,
  classNameActiveBtn,
}: ButtonProps) => {
  const cl =
    id === activeButtonId && activeButtonId ? `${className} ${className}${classNameActiveBtn}` : className;

  return (
    <>
      <button
        className={cl}
        disabled={isDisable}
        onClick={() => clickHandler(id)}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
