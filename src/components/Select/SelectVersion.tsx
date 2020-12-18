import React from "react";

type Option = {
  label: React.ReactNode;
  value: string | number;
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  options?: Option[];
  label?: string;
  error?: string;
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...props }, ref) => {
    return (
      <>
        <select ref={ref} {...props}>
          {options?.map(({ label, value }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </>
    );
  }
);

export default Select;
