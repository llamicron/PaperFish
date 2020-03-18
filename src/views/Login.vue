<template>
  <div>
    login page
    <button @click="login()">login</button>
  </div>

</template>

<script>
import { auth } from '@/firebaseConfig.js'

export default {
  mounted() {
    window.store = this.$store;
  },

  methods: {
    login() {
      auth.signInWithEmailAndPassword(
          'llamicron@gmail.com',
          'tester'
        )
        .then((user) => {
          this.$store.commit('setCurrentUser', user);
          console.log("logged in!");
          this.$router.push("/home");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
