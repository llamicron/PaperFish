<template>
  <div>
    <pre>{{ user }}</pre>
  </div>
</template>


<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      user: {}
    }
  },

  mounted() {
    this.user = firebase.auth().currentUser;
  }
}
</script>
