<template>
    <nav class="navbar">
      <ul class="navbar-menu">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/inventario">Inventario</router-link></li>
        <li><router-link to="/login">Iniciar Sesión</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #4CAF50;
    padding: 1rem;
    color: white;
  }
  
  .navbar-menu {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .navbar-menu li {
    display: inline;
  }
  
  .navbar-menu a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  </style>
  