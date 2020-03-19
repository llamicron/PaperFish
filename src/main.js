import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/firebaseConfig.js"
import firebase from 'firebase';
// import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

Vue.config.productionTip = false
// Vue.use(Vuex);

// const store = new Vuex.Store({
//   plugins: [createPersistedState({ paths: ['user'] })],
//   state: {
//     user: {}
//   },
//   mutations: {
//     setCurrentUser(state, payload) {
//       state.user = payload.user;
//     },

//     logout(state, router) {
//       state.user = {};
//       router.push("/login");
//     }
//   }
// })

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  firebase.auth().onAuthStateChanged((user) => {
    if (requiresAuth && !user) {
      next('/login')
    } else {
      next()
    }
  });

})

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
