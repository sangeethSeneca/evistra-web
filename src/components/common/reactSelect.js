import React from "react";
import { Field, useField } from "formik";
import Select from "react-select";
import { FormControl, InputLabel } from "@mui/material";

const CustomSelect = ({ label, options, ...props }) => {
  const [field, meta] = useField(props.name);

  const formattedOptions = options.map((option) => ({
    value: option.value,
    label: option.label,
    type: option.type || "", // Ensure the type property is defined or set a default value
  }));

  return (
    <FormControl error={meta.touched && meta.error} fullWidth>
      <InputLabel shrink>{label}</InputLabel>
      <Field name={props.name}>
        {({ field, form }) => (
          <Select
            {...field}
            {...props}
            options={formattedOptions}
            onChange={(option) => form.setFieldValue(field.name, option)}
            onBlur={field.onBlur}
            value={formattedOptions.find(
              (option) => option.value === field.value
            )}
          />
        )}
      </Field>
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </FormControl>
  );
};

export default CustomSelect;
