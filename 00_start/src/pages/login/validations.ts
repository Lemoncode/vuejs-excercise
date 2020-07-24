import { createFormValidation, ValidationSchema, Validators } from "@lemoncode/fonk";

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    password: [Validators.required]
  }
};

export const validation = createFormValidation(validationSchema);
