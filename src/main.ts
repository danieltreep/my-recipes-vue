import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
 
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/config'

// Wait for connection with firebase to run the app, this prevents refresh bugs
let app: any;

onAuthStateChanged(auth, () => {

    // Assign to app so it will only run once and not on every state change
    if (!app) {
        app = createApp(App)

        app.use(createPinia())
        app.use(router)
        
        app.mount('#app')
    }
})
