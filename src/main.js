// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios';

axios.defaults.baseURL = 'http://localhost:2000/';

const app = createApp(App);


app.use(router)
app.use(VueAxios, axios);

app.mount('#app')