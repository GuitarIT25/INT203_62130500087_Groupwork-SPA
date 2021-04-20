import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import HeadWeb from './components/HeadWeb.vue'


const app = createApp(App)
app.component('head-web',HeadWeb)

app.use(router).mount('#app')
