<template>
    <div>
        {{ recipe.title }}
        <img class="image" :src="recipe.imageUrl" alt="imageName">
        <p>description: {{ recipe.description }}</p>
        <p>time: {{ recipe.timeInMins }}</p>
        <p>Ingredienser: {{ ingredientsTotal }}</p>
        <ul>
      <li v-for="listOfInstructions in recipe.instructions">
        {{ listOfInstructions }}
      </li>
    </ul>


    <ul>
      <li v-for="listOfIngredients in recipe.ingredients">
        {{ listOfIngredients.name }}
        {{ listOfIngredients.amount }}
        {{ listOfIngredients.unit }}
      </li>

    </ul>
    </div>
    
    <ShowRating :rating="recipe.avgRating"></ShowRating>
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
                    console.log(this.recipe)
                    this.ingredientsTotal = this.recipe.ingredients.length
                    console.log(this.recipe.title)
                   
                })
                .catch(error => ("Error:", error));
        },
    },
    components:{
    SetRating,
    ShowRating
}
}
</script>

<style scoped>

</style>