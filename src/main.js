import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HomeScreen from './components/HomeScreen.vue';
import LoginScreen from './components/LoginScreen.vue';
import BudgetScreen from './components/BudgetScreen.vue';
import ExpenseScreen from './components/ExpenseScreen.vue';
import store from './store';

const routes = [
  { path: '/', component: LoginScreen },
  { path: '/home', component: HomeScreen },
  { path: '/budget', component: BudgetScreen },
  { path: '/expense', component: ExpenseScreen },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(store).use(router).mount('#app');
