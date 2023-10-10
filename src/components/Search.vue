<template>
  <div class="searchBar">
    <input v-model="searchQuery" v-on:input="searchRecipe" type="text" placeholder="Search..." />
  </div>
</template>

 

<script>
export default {
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    searchRecipe() {
      this.$emit('search', this.searchQuery)
    }
  }
};
</script>

 

<style scoped></style>