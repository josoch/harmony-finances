<template>
    <div>
      <p>Welcome, {{ user ? user.name : 'Guest' }}</p>
      <button @click="goTo('budget')">Budget</button>
      <button @click="goTo('expense')">Expenses</button>
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
  