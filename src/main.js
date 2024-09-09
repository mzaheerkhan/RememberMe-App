import { createApp } from 'vue';
import App from './components/App.vue';
import BasedCard from './components/BasedCard.vue';
import BaseButton from './components/BaseButton.vue';
import BaseDialog from './components/BaseDialog.vue';

const app = createApp(App);
app.component('based-card', BasedCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
