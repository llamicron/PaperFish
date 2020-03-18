<template>
  <div>
    hello there
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
