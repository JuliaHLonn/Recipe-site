<template>
    <div class="wrapper">
        <Search v-on:search="handleSearch"></Search>
        <div class="list">
            <div v-for="recipe in listOfRecipe" :key="recipe.id" class="recipe" @click="clickMethod(recipe._id)">
                <div class="recipeCard">
                    <div class="cardImageBox recipeBoxPart">
                        <img class="image" :src="recipe.imageUrl" alt="imageName">
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
    list-style: none;
}

.cardImageBox {
    /* aspect-ratio: 1/1; */
    overflow: hidden;
    border-right: 1px #6D466B solid;
}

.recipeBoxPart {
    flex: 1;
    aspect-ratio: 1/1;
    /* width:300px; */
}

.description {
    box-sizing: border-box;
    padding: 5px;
    font-size:18px;
}

.image {
    height: 100%;
}
h4{
    width:100%;
    box-sizing: border-box;
    /* color: #2C0E37; */
    color: #F9DB6D;
    font-size:32px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
    padding:0;
    margin:0;
}

.recipeCard {
    box-sizing: border-box;
    border-width: 3px;
    border-color:#8A4F7D;
    border-style:unset;
    /* background-color: #EF8275; */
    background: linear-gradient( #EF8275, #F7B2AD);
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    margin: 5px;
    display: flex;
    flex: 1;
    width:500px;
    transition-property: background-color;
        transition-duration: 200ms;
}

.recipeCard:hover {
    /* background-color: #F7B2AD; */
    background: linear-gradient( #f1a198, #fcd2cf);
}

.list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom:200px;
    flex:1;
}
.time::before{
    content: '\231B';	
}
.time::after{
    content: ' minuter'
}
.wrapper{
    display:flex;
    flex-direction: column;
}
</style>