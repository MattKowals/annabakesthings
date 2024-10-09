import './assets/main.css'
import { createStore } from './store';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css';

const store = createStore()
const app = createApp(App)


app.use(router)
app.use(store)

app.mount('#app')


