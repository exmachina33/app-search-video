<template>
  <form class="auth-form" @submit.prevent="auth">
    <BaseIcon
        class="auth-form__logo"
        name="logo"
        :size="88"
    />
    <span class="auth-form__label" v-text="`Вход`"/>
    <BaseInput
        v-model="login"
        class="auth-form__input"
        label="Логин"
        type="text"
        placeholder="Введите логин"
        :error="loginError"
        :error-text="loginErrorText"
    />
    <BaseInput
        v-model="password"
        class="auth-form__input"
        label="Пароль"
        type="password"
        placeholder="Введите пароль"
        :error="passwordError"
        :error-text="passwordErrorText"
    />
    <BaseBtn
        class="auth-form__btn"
        color="primary"
        label="Войти"
    />
  </form>
</template>

<script>
import BaseInput from "@/components/UI/BaseInput";
import BaseIcon from "@/components/UI/BaseIcon";
import BaseBtn from "@/components/UI/BaseBtn";
import {mapActions} from "vuex";
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  name: "AppAuthForm",
  components: {BaseBtn, BaseIcon, BaseInput},
  data() {
    return {
      login: '',
      password: ''
    }
  },
  setup () {
    return { v$: useVuelidate() }
  },
  validations() {
    return {
      login: { required, $autoDirty: true, email },
      password: { required, $autoDirty: true, minLength: minLength(6) }
    }
  },
  computed: {
    loginError() {
      if(!this.v$.login.$dirty) return false
      return this.v$.login.required.$invalid || this.v$.login.email.$invalid
    },
    passwordError() {
      if(!this.v$.password.$dirty) return false
      return this.v$.password.required.$invalid || this.v$.password.minLength.$invalid
    },
    loginErrorText() {
      switch (true) {
        case this.v$.login.required.$invalid:
          return 'Поле не должно быть пустым';
        case this.v$.login.email.$invalid:
          return 'Неверный email'
      }
    },
    passwordErrorText() {
      switch (true) {
        case this.v$.password.required.$invalid:
          return 'Поле не должно быть пустым';
        case this.v$.password.minLength.$invalid:
          return 'Пароль должен содержать минимум 6 символов'
      }
    }
  },
  methods: {
    ...mapActions({
      loginUser: 'loginUser'
    }),
    async auth() {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return
      const authUser = await this.loginUser({email: this.login, password: this.password})
      if (!authUser) return
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 510px;
  height: 520px;
  padding: 60px 10px;
  margin: auto;

  &__label {
    font-size: 18px;
    font-weight: bold;
  }

  &__input {
    width: 100%;
  }

  &__btn {
    width: 176px;
    margin-top: 15px;
  }
}
@media (min-width: 450px) {
  .auth-form {
    padding: 60px 88px;
  }
}
</style>