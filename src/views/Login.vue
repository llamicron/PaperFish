<template>
  <div id="fullContainer">
    <div id="loginCard" class="uk-position-center">
      <div class="uk-card uk-card-default uk-card-body">

        <h2 class="uk-header">Login</h2>

        <div class="uk-margin">
          <input type="text" v-model="email" class="uk-input" placeholder="Email" />
        </div>
        <div class="uk-margin">
          <input type="password" v-model="password" class="uk-input" placeholder="Password" />
        </div>

        <div class="uk-margin">
          <a href="#">Register</a>
        </div>
        <div class="uk-margin">
          <a href="#">Reset your password</a>
        </div>

        <div class="uk-margin">
          <button @click="login()" class="uk-button uk-button-primary">Login</button>
          &nbsp;
          <div v-if="loading" uk-spinner></div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
  #fullContainer {
    height: 100vh;
    width: 100vw;
    background-color: #208df1;
  }

  #loginCard {
    width: 25vw;
  }
</style>

<script>
import { auth } from "@/firebaseConfig.js";
import UIkit from 'uikit';

export default {
  data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  mounted() {
    if (this.$store.state.user.email != '') {
      this.$router.push("/home");
    }
    window.router = this.$router;
  },

  methods: {
    login() {
      this.loading = true;

      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$store.commit("setCurrentUser", user);
          this.$parent.notify('Logged in', 'success');
          this.$router.push("/home");
        })
        .catch(err => {
          this.loading = false;
          if (err.message.indexOf("email") != -1) {
            this.$parent.notify('Email is not valid or account does not exist', 'danger');
          } else {
            this.$parent.notify('Password is incorrect', 'danger');
          }
        });
    }
  }
};
</script>
