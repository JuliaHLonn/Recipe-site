<template>
    <div class="wrapper">
        <div class="summaryBox recipeBox">
            <div class="imageWrapper"><img class="image" :src="recipe.imageUrl" :alt="recipe.title"></div>
            <div class="summaryText">
                <h2 class="recipeHeader"> {{ recipe.title }} </h2>

                <div class="shortSummary">
                    <p class="stars">
                        <ShowRating :rating="recipe.avgRating"></ShowRating>
                    </p>
                    <p class="description">{{ recipe.description }}</p>
                    <p class="time"> {{ recipe.timeInMins }}</p>
                    <p>Antal ingredienser: {{ ingredientsTotal }}</p>
                </div>
            </div>
        </div>
        <div class="longDescriptionBox recipeBox">
            <div class="ingredientsList">
                <p class="secondaryHeader">Ingredienser:</p>
                <ul>
                    <li v-for="listOfIngredients in recipe.ingredients">
                        {{ listOfIngredients.name }}
                        {{ listOfIngredients.amount }}
                        {{ listOfIngredients.unit }}
                    </li>

                </ul>
            </div>
            <div class="instructions">
                <p class="secondaryHeader">Instruktioner:</p>
                <ul>
                    <li v-for="listOfInstructions in recipe.instructions">
                        {{ listOfInstructions }}
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <SetRating :recipeId="recipe._id"></SetRating>
</template>

<script>
import SetRating from './SetRating.vue'
import ShowRating from './ShowRating.vue';

export default {

    data() {
        return {
            recipe: {},
            ingredientsTotal: 0

        }
    },
    created() {
        const recipeId = this.$route.params.id;
        this.fetchItemById(recipeId)

    },
    methods: {
        fetchItemById(id) {
            fetch(`https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/recipes/${id}`)
                .then(response => response.json())
                .then(data => {
                    this.recipe = data
                    this.ingredientsTotal = this.recipe.ingredients.length
                })
                .catch(error => ("Error:", error));
        },
    },
    components: {
        SetRating,
        ShowRating
    }
}
</script>

<style scoped>
.image {
    height: 100%;
    width: 100%;
    aspect-ratio: 1/1;
}

.imageWrapper {
    height: 100%;
    overflow: hidden;
    flex: 1;
    aspect-ratio: 1/1;
}

.recipeBox {
    display: flex;
    flex-direction: column;
}

.summaryBox {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    border-radius: 20px;
    overflow: hidden;
    border: 3px dashed #EF8275;
    background-color: #F7B2AD;
}

.longDescriptionBox {
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 20px;
    overflow: hidden;
    border: 3px dashed #EF8275;
    background-color: #F9DB6D;
    margin-bottom: 30px;
}

.ingredientsList {
    box-sizing: border-box;
    padding: 20px;
    flex: 1;
}

.secondaryHeader {
    font-size: 24px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #EF8275
}

.instructions {
    box-sizing: border-box;
    padding: 20px;
    flex: 1;
}

.longDescriptionBox li {
    padding: 5px;
    font-size: 18px;
}

.summaryText {
    flex: 1;
}

.recipeHeader {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    background-color: #EF8275;
    color: #F9DB6D;
    margin: 0;
    margin-top: 8px;
}

h2 {
    font-size: 36px;
}

.shortSummary {
    padding: 20px;
    padding-top: 0;
    text-align: center;
    font-size: 18px;
}

.shortSummary p {
    margin: 1px;
    padding: 0;
}

.stars {
    color: #F9DB6D;
    font-size: 24px;
    text-shadow: 2px 2px 2px #EF8275;
}

.description {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 24px;
    color: #EF8275;
}

.time::before {
    content: '\231B';
}

.time::after {
    content: ' minuter'
}

@media (min-width: 576px) {
    .recipeBox {
        width: 100%;
        min-width: 300px;
        flex-direction: row;
        border-right: 3px solid #EF8275;
        aspect-ratio: 2 / 1;
    }

    .imageWrapper {
        border-right: 3px solid #EF8275;
    }

}

@media (min-width: 920px) {
    .recipeBox {
        width: 60%;
        min-width: 500px;
        max-width: 900px;
    }
}
</style>