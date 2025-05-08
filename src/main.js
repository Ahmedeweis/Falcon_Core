import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Import Font Awesome core and components
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';





// Add icons to the library
library.add(faGraduationCap, faBriefcase);

// Create the Vue app
const app = createApp(App);

// Register FontAwesome globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use router and store
app.use(store).use(router).mount('#app');

// 
