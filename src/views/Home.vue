<template>
  <div>
    <button @click="$store.commit('logout', $router)" class="uk-button uk-button-danger">Logout</button>
  </div>
</template>


<script>
import { auth, db } from '@/firebaseConfig.js';

export default {
  mounted() {
    window.auth = auth;
    window.db = db;
  }
}
</script>
