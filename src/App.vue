<template>
  <div id="app">
    <div v-if="showNavbar()" id="navbar" class="uk-position-relative">
      <img src="images/light.jpg" alt />
      <div class="uk-position-top">
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
          <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">

              <li class="uk-active">
                <a href="/">Home</a>
              </li>

            </ul>
          </div>

          <div v-if="user" class="uk-navbar-right">
            <ul class="uk-navbar-nav">
              <li>
                <a v-if="user.displayName" href="#">{{ user.displayName }}</a>
                <a v-else href="#">{{ user.email }}</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li @click="logout()">
                          <a href="#">logout</a>
                        </li>
                    </ul>
                </div>
            </li>
            </ul>
          </div>

        </nav>
      </div>
    </div>


    <router-view />

    <link rel="stylesheet" href="./uikit.min.css" />
  </div>
</template>

<script>
import UIkit from "uikit";
import firebase from 'firebase';

export default {
  data() {
    return {
      user: {}
    }
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    })
    window.app = this;
    window.firebase = firebase;
  },

  methods: {
    notify(message, status = "primary") {
      UIkit.notification({
        message: message,
        status: status,
        pos: "bottom-left",
        timeout: 4000
      });
    },

    logout() {
      this.notify('Logged out');
      this.user = {};
      firebase.auth().signOut();
    },

    showNavbar() {
      let show_on_these = [
        '/',
      ]
      if (show_on_these.indexOf(this.$router.currentRoute.path) != -1) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style>
  .uk-card {
    border-radius: 6px;
  }

  #navbar {
    margin-bottom: 3em;
  }
</style>
