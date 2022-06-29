import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import './assets/app.scss';

//  all base component start
import BaseLayout from './components/UI/BaseLayout.vue';
import BaseCard from './components/UI/BaseCard.vue';
//  all base component end

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(fas, fab);
// library.add(fas);



const app =createApp(App);

app.component('f-icon', FontAwesomeIcon);
app.component('base-layout', BaseLayout);
app.component('base-card', BaseCard);


app.mount('#app');
