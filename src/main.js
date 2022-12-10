import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBFT4Ez073LY53UTN_HAZtBQfE3weLiN80",
  authDomain: "video-search-33.firebaseapp.com",
  projectId: "video-search-33",
  storageBucket: "video-search-33.appspot.com",
  messagingSenderId: "316191534606",
  appId: "1:316191534606:web:e37f64cc6a6e472408965f",
  measurementId: "G-VWLCRXHXJR",
  databaseURL: 'https://video-search-33-default-rtdb.firebaseio.com/'
};
const app = initializeApp(firebaseConfig);
getDatabase(app)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
