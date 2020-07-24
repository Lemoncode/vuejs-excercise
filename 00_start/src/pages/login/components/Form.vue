<template>
  <v-form ref="form" v-model="valid">
    <v-text-field
      label="Name"
      :value="login.name"
      :rules="[resultLoginError.name]"
      @input="(name) => updateLogin('name', name)"
      @blur="() => updateLogin('name', login.name)"
    />
    <v-text-field
      label="Password"
      type="password"
      :value="login.password"
      :rules="[resultLoginError.password]"
      @input="(password) => updateLogin('password', password)"
      @blur="() => updateLogin('password', login.password)"
    />
    <v-btn type="submit" color="info" @click.prevent="handleOnClick">Login</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue, { PropOptions, VueConstructor } from "vue";
import { FormProps } from "../formProps";
import { ResultLoginError } from "../viewModel";

interface Refs {
  $refs: {
    form: HTMLFormElement;
  };
}

export default (Vue as VueConstructor<Vue & Refs>).extend({
  name: "FormComponent",
  props: {
    login: { required: true },
    loginError: { required: true },
    updateLogin: { required: true },
    loginRequest: { required: true },
  } as FormProps,
  data() {
    return {
      valid: true,
    };
  },
  computed: {
    resultLoginError(): ResultLoginError {
      return Object.keys(this.loginError).reduce(
        (acc, item) => ({
          ...acc,
          [item]:
            this.loginError[item as keyof ResultLoginError].succeeded ||
            this.loginError[item as keyof ResultLoginError].message,
        }),
        {} as ResultLoginError
      );
    },
  },
  methods: {
    handleOnClick() {
      this.$refs.form.validate();
      // Comprobar si la validación del formulario es correcta antes de ejecutar loginRequest
      this.loginRequest();
    },
  },
});
</script>
