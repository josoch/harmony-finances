<template>
    <div>
      <p>Login</p>
      <input v-model="name" placeholder="Name" />
      <input v-model="role" placeholder="Role" />
      <button @click="handleLogin">Login</button>
    </div>
  </template>
  
  <script>
  import { addUser } from '../services/db';
  
  export default {
    name: 'LoginScreen',
    data() {
      return {
        name: '',
        role: 'Father',
      };
    },
    methods: {
      async handleLogin() {
        await addUser(this.name, this.role, user => {
          this.$store.commit('SET_USER', user);
          this.$router.push('/home');
        });
      },
    },
  };
  </script>
        
  <style>
  /* Add your styles here */
  </style>
  