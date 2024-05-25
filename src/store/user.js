const state = {
    user: null,
    expenses: [],
    budgets: [],
  };
  
  const mutations = {
    SET_USER(state, user) {
      state.user = user;
    },
    ADD_EXPENSE(state, expense) {
      state.expenses.push(expense);
    },
    ADD_BUDGET(state, budget) {
      state.budgets.push(budget);
    },
  };
  
  export default {
    state,
    mutations,
  };
  