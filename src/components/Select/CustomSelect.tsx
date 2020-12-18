import React, { useState } from "react";

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type Option = {
  text: React.ReactNode;
  value: string | number;
};

type SelectProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  id?: string;
  name: string;
  options: Array<Option>;
  register: () => RefReturn;
};

const CustomSelect: React.FC<SelectProps> = ({
  label,
  error,
  register,
  id,
  options,
  placeholder,
  ...props
}) => {
  const [selected, setSelected] = useState(() => {
    return options.length > 0 && !placeholder ? options[0] : null;
  });
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  const handleOptionClick = (option: Option) => {
    const select: Option | undefined = options?.find(
      (op) => op.value === option.value
    );
    setOpen(false);
    setSelected(select || null);
  };
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <div onClick={toggle}>
        {placeholder && !selected ? placeholder : selected?.text}
      </div>
      {open && (
        <div>
          {options.length ? (
            options.map((option) => (
              <div key={option.value} onClick={() => handleOptionClick(option)}>
                {option.text}
              </div>
            ))
          ) : (
            <div>No data</div>
          )}
        </div>
      )}
      {error && (
        <div>
          <small className="error">{error}</small>
        </div>
      )}
    </>
  );
};

export default CustomSelect;
