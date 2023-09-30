import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//import router from './router'
import components from "@/components/UI"
const app = createApp(App)

//app.use(router)
components.forEach(element => {
    app.component(element.name, element)

});
console.log(components);
app.mount('#app')



