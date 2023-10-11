<template>
    <div class="wrapper">
        <Search v-on:search="handleSearch"></Search>
        <RecipeCard :list="listOfRecipe"></RecipeCard>
    </div>
</template>

<script>
import Search from './Search.vue'
import ShowRating from './ShowRating.vue';
import RecipeCard from './RecipeCard.vue';
export default {
    components: {
        Search,
        ShowRating,
        RecipeCard
    },
    data() {
        return {
            listOfRecipe: []


        };
    }, created() {
        this.fetchMethod();
    },
    methods: {
        fetchMethod() {
            fetch('https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/recipes')
                .then(response => response.json())
                .then(data => this.listOfRecipe = data)
                .catch(error => ("Error:", error));
        },


        clickMethod(id) {
            this.$router.push(`/Recipe/${id}`)
        },
        handleSearch(query) {
            if (query === '') {
                this.fetchMethod();
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

</style>