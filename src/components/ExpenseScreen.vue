<template>
    <div>
      <p>Add Expense</p>
      <input v-model="amount" placeholder="Amount" />
      <input v-model="category" placeholder="Category" />
      <button @click="handleAddExpense">Add</button>
    </div>
  </template>
  
  <script>
  import { addExpense } from '../services/db';
  import { mapState } from 'vuex';
  
  export default {
    name: 'ExpenseScreen',
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
      async handleAddExpense() {
        await addExpense(this.user.id, this.amount, this.category, expense => {
          this.$store.commit('ADD_EXPENSE', expense);
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
  