<template>
    <div>
        <Search v-on:search="handleSearch"></Search>
        <RecipeCard :list="listOfRecipe"></RecipeCard>
    </div>
</template>

<script>
import Search from './Search.vue'
import RecipeCard from './RecipeCard.vue';
export default {
    components: {
        Search, RecipeCard
    },
    data() {
        return {
            listOfRecipe: [],
            categoryName : this.$route.params.CategoryName

        };
    }, created() {
        this.fetchMethodByName(this.categoryName)
    },
    watch: {
    '$route.params.CategoryName': function (newCategory, oldCategory) {
      if (newCategory !== oldCategory) {
        this.fetchMethodByName(newCategory);
      }
    }
    },
    methods: {
       fetchMethodByName(categoryName) {
            fetch(`https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/categories/${categoryName}/recipes`)
                .then(response => response.json())
                .then(data => this.listOfRecipe = data)
                .catch(error => ("Error:", error));
        },


        clickMethod(id) {
            this.$router.push(`/Recipe/${id}`)
        },
        handleSearch(query) {
            if (query === '') {
                this.fetchMethodByName(this.categoryName)
            } else {
                this.listOfRecipe = this.listOfRecipe.filter(recipe => {
                    return recipe.title.toLowerCase().includes(query.toLowerCase());
                })
            }
        }

    }
}
</script>

<style scoped>
.list {
    list-style: none;

}

.image {
    width: 50px;
    height: 50px;
}

.recipe {
    border: 1px solid black;
    cursor: pointer;
    margin: 30px;
    text-align: center;
}
</style>