import HomeScreen from './components/HomeScreen.vue';
import LoginScreen from './components/LoginScreen.vue';
import BudgetScreen from './components/BudgetScreen.vue';
import ExpenseScreen from './components/ExpenseScreen.vue';

const routes = [
  { path: '/', component: LoginScreen },
  { path: '/home', component: HomeScreen },
  { path: '/budget', component: BudgetScreen },
  { path: '/expense', component: ExpenseScreen },
];

export default routes;
