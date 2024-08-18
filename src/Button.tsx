import React from "react";

interface ButtonProps {
  clickHandler: (id?: number) => void;
  children: React.ReactNode;
  isDisable?: boolean;
  className?: string;
  id?: number;
}
const Button = ({
  clickHandler,
  children,
  isDisable,
  className,
  id,
}: ButtonProps) => {

  return (
    <>
      <button
        className={className}
        disabled={isDisable}
        onClick={() => clickHandler(id)}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
