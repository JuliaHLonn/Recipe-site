<template>
    <div class="wrapper">
        <Search v-on:search="handleSearch"></Search>
        <div class="list">
            <div v-for="recipe in listOfRecipe" :key="recipe.id" class="recipeCard" @click="clickMethod(recipe._id)">
                <div class="cardImageBox recipeBoxPart">
                    <img :src="recipe.imageUrl" alt="imageName">
                </div>
                <div class="description recipeBoxPart">
                    <h4>
                        {{ recipe.title }}
                    </h4>
                    <ShowRating :rating="recipe.avgRating" />
                    <p class="time">
                        {{ recipe.timeInMins }}
                    </p>
                    <p>
                        {{ recipe.ingredients.length }} ingredienser.
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Search from './Search.vue'
import ShowRating from './ShowRating.vue';
export default {
    components: {
        Search,
        ShowRating
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
    display: flex;
    flex-wrap: wrap;
    margin:0;
    padding:0;
}

.cardImageBox {
    height:100%;
    overflow:hidden;
    border-right: 1px #6D466B solid;

}
.cardImageBox img {
    height:100%;
    width:100%;
    aspect-ratio: 1/1;
}

.recipeBoxPart {
 flex:1;
}

.description {
    box-sizing: border-box;
    padding: 5px;
    font-size: 18px;
}

h4 {
    box-sizing: border-box;
    color: #F9DB6D;
    font-size: 24px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding: 0;
    margin: 0;
}

.recipeCard {
    min-width:300px;
    width:47%;
    display:flex;
    background: linear-gradient(#EF8275, #F7B2AD);
    transition-property: background-color;
    transition-duration: 200ms;
    border-radius:20px;
    overflow:hidden;
    box-sizing: border-box;
    margin:10px;
    /* aspect-ratio: 2/1; */
}

.recipeCard:hover {
    background: linear-gradient(#f1a198, #fcd2cf);
    box-shadow: 2px 2px #f1a198;
}



.time::before {
    content: '\231B';
}

.time::after {
    content: ' minuter'
}
</style>