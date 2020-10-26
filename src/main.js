import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueFire from 'firebase/app'
// import firebase from 'firebase'

// Vue.config.productionTip = false

// let config = {
//     apiKey: "AIzaSyDK-mjYhb92XQweVVhD8q-pP2p2hfTtfwU",
//     authDomain: "meetup-289716.firebaseapp.com",
//     databaseURL: "https://meetup-289716.firebaseio.com",
//     projectId: "meetup-289716",
//     storageBucket: "meetup-289716.appspot.com",
//     messagingSenderId: "419073170866",
//     appId: "1:419073170866:web:f29a56f6150b11c19498ab"
// }

// firebase.initializeApp(config)

// Vue.use(VueFire)
// Vue.use(firebase)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

