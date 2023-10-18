<script>

import { RouterLink, RouterView } from "vue-router"

import HamburgerButton from './HamburgerMenyComponent.vue'

export default {
    components: {
        HamburgerButton
    },

    data() {
        return {
            list: this.getCategories(),
            categoryContainer: "side-bar",
        }
    },
    props: ['categorySelect'],
    methods: {
        getCategories() {
            fetch(`https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/categories`)
                .then((response) => response.json())
                .then((data) => { this.list = data })
                .catch((error) => console.log(error));
        },
        chosenCategory(category) {
            this.selectedCategory = category
        },

        checkCategory(categoryName) {
            if (categoryName == this.categorySelect) {

                return true;
            }
            else {
                return false;
            }
        }
    }
}

</script>

<template>
    <div class="categoryContainer">
        <div class="hamburger-button">
            <HamburgerButton :category-select="categorySelect"></HamburgerButton>
        </div>
        <ul class="categoryList">
            <li>
                <RouterLink :to="'/'" @click="chosenCategory(null)" :class="{ activeCategory: checkCategory(null) }">
                    Alla kategorier
                </RouterLink>
            </li>
            <li v-for="category in list">
                <RouterLink :to="'/Category/' + category.name" @click="chosenCategory(category.name)"
                    :class="{ activeCategory: checkCategory(category.name) }">{{ category.name }} ({{
                        category.count }})</RouterLink>
            </li>

        </ul>

    </div>
</template>

<style scoped>
.categoryList {
    display: none;
}

.hamburger-button {
    display: block;
}

@media (min-width: 576px) {

    .hamburger-button {
        display: none;
    }

    .categoryList {
        display: block;
    }
}

.categoryContainer {
    box-sizing: border-box;
    padding: 15px;
    font-size: 18px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.categoryContainer a {
    text-decoration: none;
    color: #2C0E37;
}

.categoryContainer a:hover {
    color: #9733bb;
}

.categoryContainer ul {
    list-style-type: none;
    margin-left: 5px;
    padding-left: 0;
}

.categoryContainer li {
    margin: 10px;
}

.activeCategory {
    font-weight: bold;
}

@media (min-width: 920px) {
    .categoryContainer {
        font-size: 24px;
    }
}
</style>