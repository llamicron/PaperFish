<template>
  <div id="app">
    <div v-if="showNavbar()" id="navbar" class="uk-position-relative">
      <img src="images/light.jpg" alt />
      <div class="uk-position-top">
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
          <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">

              <li class="uk-active">
                <a href="/home">Home</a>
              </li>

            </ul>
          </div>

          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
              <li>
                <a href="#">{{ $store.state.user.email }}</a>
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

export default {
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
      this.$store.commit('logout', this.$router);
    },

    showNavbar() {
      let show_on_these = [
        '/home',
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
