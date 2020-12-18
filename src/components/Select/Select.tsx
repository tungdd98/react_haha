import React from "react";

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type Option = {
  text: string;
  value: string | number;
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  options: Option[];
  label?: string;
  error?: string;
  id?: string;
  name: string;
  register: () => RefReturn;
};

const Select: React.FC<SelectProps> = ({
  label,
  error,
  register,
  id,
  options,
  name,
}) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <select name={name} ref={register} id={id}>
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.text}
          </option>
        ))}
      </select>
      {error && (
        <div>
          <small className="error">{error}</small>
        </div>
      )}
    </>
  );
};

export default Select;
