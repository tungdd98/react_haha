import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "components/Select/SelectVersion";
import Input from "components/Input/Input";
interface IFormInputs {
  fruit: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  fruit: yup.string().required(),
});

const fruits = [
  {
    value: 1,
    label: "Banana",
  },
  {
    value: 2,
    label: "Orange",
  },
  {
    value: 3,
    label: "Apple",
  },
];

const App: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="password"
          name="password"
          label="Password"
          ref={register}
          error={errors.password?.message}
        />
        <Select name="fruit" id="fruit" ref={register} options={fruits} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
