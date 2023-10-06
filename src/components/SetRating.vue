<template>
    <div class="setRatingBox">
        <div class="stars">
            <span :class="{ active: hoverRating >= 1 }" @mouseover="hoverRating = 1" @mouseleave="rating = clickedRating"
                @click="clickedRating = 1">★</span>
            <span :class="{ active: hoverRating >= 2 }" @mouseover="hoverRating = 2" @mouseleave="rating = clickedRating"
                @click="clickedRating = 2">★</span>
            <span :class="{ active: hoverRating >= 3 }" @mouseover="hoverRating = 3" @mouseleave="rating = clickedRating"
                @click="clickedRating = 3">★</span>
            <span :class="{ active: hoverRating >= 4 }" @mouseover="hoverRating = 4" @mouseleave="rating = clickedRating"
                @click="clickedRating = 4">★</span>
            <span :class="{ active: hoverRating >= 5 }" @mouseover="hoverRating = 5" @mouseleave="rating = clickedRating"
                @click="clickedRating = 5">★</span>
        </div>
        <button  class="rateButton" @click="submitRating()">Betygsätt recept!</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hoverRating: 0,
            clickedRating: 1
        }
    },
    methods:{
        submitRating(){
            console.log(this.clickedRating)
        }
    }

}
</script>

<style scoped>
.stars {
    font-size: 80px;
    color:rgb(126, 126, 126);
}

.active {
    color: rgb(230, 194, 37);

}</style>