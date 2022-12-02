import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import { InputFieldProps } from "./types/inputFiled.types";

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  return (
    <FormControl>
      <InputLabel htmlFor={props.id}>{label}</InputLabel>
      <Input
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        style={props.style}
      />
      <FormHelperText id="my-helper-text">
        We'll never share your email.
      </FormHelperText>
    </FormControl>
  );
};

export default InputField;
