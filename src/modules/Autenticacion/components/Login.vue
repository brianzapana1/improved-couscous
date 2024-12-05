<template>
    <div class="login">
      <h1>Iniciar Sesión</h1>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Correo electrónico" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuthStore } from '../store/authStore';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const error = ref('');
      const authStore = useAuthStore();
  
      const handleLogin = async () => {
        try {
          await authStore.login({ email: email.value, password: password.value });
          alert('¡Inicio de sesión exitoso!');
        } catch (err) {
          error.value = 'Credenciales incorrectas.';
        }
      };
  
      return { email, password, error, handleLogin };
    },
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>
  