<template>
    <div>
        <Search v-on:search="handleSearch"></Search>
        <ul class="list">
            <li v-for="recipe in listOfRecipe" :key="recipe.id" class="recipe" @click="clickMethod(recipe._id)">
                <h4>
                    Name: {{ recipe.title }}
                </h4>

                <p>
                    rating: {{ recipe.ratings }}
                </p>

                <p>
                    tiden: {{ recipe.timeInMins }} minuter
                </p>


                <img class="image" :src="recipe.imageUrl" alt="imageName">

                <p>
                    Ingredienser: {{ recipe.ingredients.length }}
                </p>


            </li>


        </ul>

    </div>
</template>

<script>
import Search from './Search.vue'
export default {
    components: {
        Search
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