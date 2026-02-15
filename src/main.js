import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Подключаем наши SCSS стили
import './assets/main.scss'

createApp(App).use(router).mount('#app')
