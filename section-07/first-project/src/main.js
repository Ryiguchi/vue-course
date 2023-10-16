import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './components/FriendContact.vue'
import FooterComponent from './components/FooterComponent.vue'

const app = createApp(App)

app.component('friend-contact', FriendContact)
app.component('footer-component', FooterComponent)

app.mount('#app')
