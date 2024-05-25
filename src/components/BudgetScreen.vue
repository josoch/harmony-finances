<template>
    <div>
      <p>Add Budget</p>
      <input v-model="amount" placeholder="Amount" />
      <input v-model="category" placeholder="Category" />
      <button @click="handleAddBudget">Add</button>
    </div>
  </template>
  
  <script>
  import { addBudget } from '../services/db';
  import { mapState } from 'vuex';
  
  export default {
    name: 'BudgetScreen',
    data() {
      return {
        amount: '',
        category: '',
      };
    },
    computed: {
      ...mapState(['user']),
    },
    methods: {
      async handleAddBudget() {
        await addBudget(this.user.id, this.amount, this.category, budget => {
          this.$store.commit('ADD_BUDGET', budget);
          this.amount = '';
          this.category = '';
        });
      },
    },
  };
  </script>
      
  <style>
  /* Add your styles here */
  </style>
  