<template>
    <div class="register">
      <h1>Registro</h1>
      <form @submit.prevent="handleRegister">
        <input v-model="name" type="text" placeholder="Nombre completo" required />
        <input v-model="email" type="email" placeholder="Correo electrónico" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Registrar</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuthStore } from '../store/authStore';
  
  export default {
    setup() {
      const name = ref('');
      const email = ref('');
      const password = ref('');
      const error = ref('');
      const authStore = useAuthStore();
  
      const handleRegister = async () => {
        try {
          await authStore.register({ name: name.value, email: email.value, password: password.value });
          alert('¡Registro exitoso!');
        } catch (err) {
          error.value = 'Error al registrar.';
        }
      };
  
      return { name, email, password, error, handleRegister };
    },
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>
  