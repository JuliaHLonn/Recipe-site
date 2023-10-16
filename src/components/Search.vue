<template>
  <div class="searchBar">
    <input v-model="searchQuery" v-on:input="searchRecipe" type="text" placeholder="Sök efter recept..." />
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

 

<style scoped>
.searchBar input{
  font-size:28px;
  width:100%;
  border-radius:20px;
  box-sizing: border-box;
  padding:10px;

  
}
.searchBar{
  flex:1;
}

@media (max-width: 450px) {
  .searchBar input{
    margin-left: -1%;
    width: 80%;
    font-size: medium;
    flex-direction: row;
    justify-content: center;
  }
}
   
</style>