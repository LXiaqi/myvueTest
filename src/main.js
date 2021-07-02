import { createApp, h } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App)
.component('Comp',{
    render() {
        return h('div','I am comp')
    }
})
.mount('#app')
