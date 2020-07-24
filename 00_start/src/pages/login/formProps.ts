import { PropOptions } from "vue";
import { Login, LoginError } from "./viewModel";

export interface FormProps {
  login: PropOptions<Login>;
  loginError: PropOptions<LoginError>;
  updateLogin: PropOptions<(field: string, value: string) => void>;
  loginRequest: PropOptions<() => void>;
}