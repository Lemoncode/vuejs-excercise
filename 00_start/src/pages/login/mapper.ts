import * as model from "../../rest-api/model";
import * as vm from "./viewModel";

export const mapLoginVMToModel = (login: vm.Login): model.Login => ({
  ...login,
})