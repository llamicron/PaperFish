<template>
  <div id="fullContainer">
    <div id="loginCard" class="uk-position-center">
      <div class="uk-card uk-card-default uk-card-body">

        <h2 class="uk-header">Register</h2>

        <div class="uk-margin">
          <div class="uk-inline inline-width-fix">
            <span class="uk-form-icon" v-if="!validEmail()" uk-icon="icon: close"></span>
            <span class="uk-form-icon" v-if="validEmail()" uk-icon="icon: check"></span>
            <input :class="{ 'uk-form-success': validEmail() }" type="text" v-model="email" class="uk-input" placeholder="Email" />
          </div>
        </div>

        <div class="uk-margin">
          <div class="uk-inline inline-width-fix">
            <span class="uk-form-icon" v-if="!validPassword()" uk-icon="icon: close"></span>
            <span class="uk-form-icon" v-if="validPassword()" uk-icon="icon: check"></span>
            <!-- <input :class="{ 'uk-form-success': validEmail() }" type="text" v-model="email" class="uk-input" placeholder="Email" /> -->
            <input :class="{ 'uk-form-success': validPassword() }" type="password" v-model="password" class="uk-input" placeholder="Password" />
          </div>
        </div>

        <div class="uk-margin">
          <div class="uk-inline inline-width-fix">
            <span class="uk-form-icon" v-if="!passwordsMatch()" uk-icon="icon: close"></span>
            <span class="uk-form-icon" v-if="passwordsMatch()" uk-icon="icon: check"></span>
            <input :class="{ 'uk-form-success': passwordsMatch(), }" type="password" v-model="passwordConfirm" class="uk-input" placeholder="Confirm Password" />
          </div>
        </div>

        <i>Password must be 8 characters or longer, and it can't be your email</i>

        <div class="uk-margin">
          <button @click="login()" class="uk-button uk-button-primary">Register</button>
          &nbsp;
          <div v-if="loading" uk-spinner></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      loading: false,
    }
  },

  mounted() {
    window.firebase = firebase;
  },

  methods: {
    validEmail() {
      let parts = this.email.split('@');
      return (parts[0].length > 0 && parts[1].length > 0);
    },

    passwordsMatch() {
      return this.validPassword() && (this.password == this.passwordConfirm);
    },

    validPassword() {
      if (this.password.length >= 8 && this.password != this.email) {
        return true;
      }
      return false;
    },
  }
}
</script>


<style scoped>
  #fullContainer {
    height: 100vh;
    width: 100vw;
    background-color: #208df1;
  }

  #loginCard {
    width: 25vw;
  }

  .inline-width-fix {
    width: 100%;
  }
</style>
