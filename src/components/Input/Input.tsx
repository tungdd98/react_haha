import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, ...props }, ref) => {
    return (
      <>
        {label && <label htmlFor={id}>{label}</label>}
        <div>
          <input ref={ref} {...props} />
        </div>
        {error && (
          <div>
            <small className="error">{error}</small>
          </div>
        )}
      </>
    );
  }
);

export default Input;
