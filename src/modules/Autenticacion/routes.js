import Login from './components/Login.vue';
import Register from './components/Register.vue';

const authRoutes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
];

export default authRoutes;
