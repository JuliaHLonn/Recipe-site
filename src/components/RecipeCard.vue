<template>
    <div class="wrapper">

        <div class="list">
            <div v-for="recipe in list" :key="recipe.id" class="recipeCard" @click="clickMethod(recipe._id)">
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
import ShowRating from './ShowRating.vue';

export default {
    props: ['list'],
    methods: {
        clickMethod(id) {
            this.$router.push(`/Recipe/${id}`)
        },
    },
    components:{
        ShowRating
    }
}
</script>

<style  scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
}

.cardImageBox {
    height: 100%;
    overflow: hidden;
    border-right: 1px #6D466B solid;

}

.cardImageBox img {
    height: 100%;
    width: 100%;
    aspect-ratio: 1/1;
}

.recipeBoxPart {
    flex: 1;
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
    display: flex;
    background: linear-gradient(#EF8275, #F7B2AD);
    transition-property: background-color;
    transition-duration: 200ms;
    border-radius: 20px;
    overflow: hidden;
    box-sizing: border-box;
    margin: 10px;
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


@media only screen and (min-width: 576px){
    .recipeCard {
    min-width: 250px;
    width: 100%;}
}
@media only screen and (min-width: 920px){
    .recipeCard {
    min-width: 300px;
    width: 47%;}
}
</style>