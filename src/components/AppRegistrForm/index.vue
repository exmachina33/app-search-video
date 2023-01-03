<template>
  <form class="auth-form" @submit.prevent="registr">
    <BaseIcon
        class="auth-form__logo"
        name="logo"
        :size="88"
    />
    <span class="auth-form__label" v-text="`Регистрация`"/>
    <BaseInput
        v-model="login"
        class="auth-form__input"
        label="Логин"
        type="text"
        placeholder="Укажите элекстронную почту"
        :error="loginError"
        :error-text="loginErrorText"
    />
    <BaseInput
        v-model="password"
        class="auth-form__input"
        label="Пароль"
        type="password"
        placeholder="Повторите пароль"
        :error="passwordError"
        :error-text="passwordErrorText"
    />
    <BaseInput
        v-model="confirmPassword"
        class="auth-form__input"
        label="Подтверждение пароля"
        type="password"
        placeholder="Введите пароль"
        :error="confirmPasswordError"
        :error-text="confirmPasswordErrorText"
    />
    <article class="auth-form__article">Зарегистрируйтесь или <router-link class="auth-form__article__link" to="/login">войдите</router-link></article>
    <BaseBtn
        class="auth-form__btn"
        color="primary"
        label="Регистрация"
    />
  </form>
</template>

<script>
import BaseInput from "@/components/UI/BaseInput";
import BaseIcon from "@/components/UI/BaseIcon";
import BaseBtn from "@/components/UI/BaseBtn";
import {mapActions} from "vuex";
import { useVuelidate } from '@vuelidate/core'
import {required, email, minLength, sameAs} from '@vuelidate/validators'
import {createUser} from "@/api";

export default {
  name: "AppAuthForm",
  components: {BaseBtn, BaseIcon, BaseInput},
  data() {
    return {
      login: '',
      password: '',
      confirmPassword: '',
      error: false
    }
  },
  setup () {
    return { v$: useVuelidate() }
  },
  validations() {
    return {
      login: { required, $autoDirty: true, email },
      password: { required, $autoDirty: true, minLength: minLength(6) },
      confirmPassword: { sameAsPassword: sameAs(this.password) }
    }
  },
  computed: {
    loginError() {
      if(!this.v$.login.$dirty) return false
      return this.v$.login.required.$invalid || this.v$.login.email.$invalid || this.error
    },
    passwordError() {
      if(!this.v$.password.$dirty) return false
      return this.v$.password.required.$invalid || this.v$.password.minLength.$invalid
    },
    confirmPasswordError() {
      if(!this.v$.password.$dirty) return false
      return this.v$.confirmPassword.$invalid && this.v$.confirmPassword.$dirty
    },
    loginErrorText() {
      switch (true) {
        case this.v$.login.required.$invalid:
          return 'Поле не должно быть пустым';
        case this.v$.login.email.$invalid:
          return 'Неверный email';
        case this.error:
          return 'Такая почта уже используется';
      }
    },
    passwordErrorText() {
      switch (true) {
        case this.v$.password.required.$invalid:
          return 'Поле не должно быть пустым';
        case this.v$.password.minLength.$invalid:
          return 'Пароль должен содержать минимум 6 символов';
        case this.v$.confirmPassword.$invalid:
          return 'Пароли не совпадают';
      }
    },
    confirmPasswordErrorText() {
      switch (true) {
        case this.v$.confirmPassword.$invalid:
          return 'Пароли не совпадают';
      }
    }
  },
  methods: {
    ...mapActions({
      loginUser: 'loginUser'
    }),
    async registr() {
      this.error = false
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return
      try {
        await createUser({email: this.login, password: this.password})
      } catch (error) {
        this.error = true
        throw error
      }
      if (this.error) return
      this.$router.push('/login')
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
  padding: 60px 10px;
  margin: auto;

  &__label {
    font-size: 18px;
    font-weight: bold;
  }

  &__input {
    width: 100%;
  }

  &__article {
    font-size: 18px;

    &__link {
      color: #1390E5;
    }
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