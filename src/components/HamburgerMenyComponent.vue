<template>
  <div>
    <button @click="toggleMenu" class="hamburger-button">
      <i :class="isMenuOpen ? 'fa fa-times' : 'fa fa-bars'"></i>
    </button>
    <div v-if="isMenuOpen" class="menu-links">
      <ul class="categoryList">
        <li>
          <RouterLink :to="'/'" @click="chosenCategory(null); closeMenu()"
            :class="{ activeCategory: checkCategory(null) }">
            Alla kategorier
          </RouterLink>
        </li>
        <li v-for="category in categoryList">
          <RouterLink :to="'/Category/' + category.name" @click="chosenCategory(category.name); closeMenu()"
            :class="{ activeCategory: checkCategory(category.name) }">
            {{ category.name }} ({{ category.count }})
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      isMenuOpen: false,
      categoryList: this.getCategories(),
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    getCategories() {
      fetch(`https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/categories`)
        .then((response) => response.json())
        .then((data) => {
          this.categoryList = data;
        })
        .catch((error) => console.log(error));
    },
    chosenCategory(category) {
      this.selectedCategory = category;
    },
    checkCategory(categoryName) {
      return categoryName === this.categorySelect;
    }
  },
  props: ['categorySelect'],
};
</script>

<style scoped>
.hamburger-button {
  z-index: 1;
  left: 0px;
  cursor: pointer;
  transition: transform 0.3s ease;
  color: #F9DB6D;
  background-color: #9733bb;
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
}



.menu-links a {
  display: block;
  color: #2C0E37;
  text-decoration: none;
  font-size: 15px;
  margin-bottom: 5px;
  font-size: 28px;
}

.categoryList {
  list-style: none;
  padding-left: 0px;
  margin: 0px;
}

.menu-links a:hover {
  color: #9733bb;
}

.activeCategory {
  font-weight: bold;
}
</style>
