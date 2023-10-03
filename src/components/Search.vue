<template>
  <div>
    <input
      v-model="search"
      @input="filterItems"
      type="text"
      placeholder="Search..."
    />
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

 

<script>
export default {
  data() {
    return {
      search: "",
      items: [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" },
        { id: 4, name: "Date" },
        { id: 5, name: "Grape" },
        // Add more items to the list
      ],
    };
  },
  computed: {
    filteredItems: function () {
      const search = this.search.toLowerCase();
      return this.items.filter((item) =>
        item.name.toLowerCase().includes(search)
      );
    },
  },
};
</script>

 

<style scoped>
</style>