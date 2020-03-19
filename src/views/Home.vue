<template>
  <div>
    <button class="uk-button uk-button-primary">Hello</button>
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
