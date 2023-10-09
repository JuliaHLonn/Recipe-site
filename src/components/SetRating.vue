<template>
    <div class="setRatingBox">
        <div class="stars">
            <span :class="{ active: hoverRating >= 1 }" @mouseover="previewStars(1)"
                @mouseleave="hoverRating = clickedRating" @click="clickedRating = 1">★</span>
            <span :class="{ active: hoverRating >= 2 }" @mouseover="previewStars(2)"
                @mouseleave="hoverRating = clickedRating" @click="clickedRating = 2">★</span>
            <span :class="{ active: hoverRating >= 3 }" @mouseover="previewStars(3)"
                @mouseleave="hoverRating = clickedRating" @click="clickedRating = 3">★</span>
            <span :class="{ active: hoverRating >= 4 }" @mouseover="previewStars(4)"
                @mouseleave="hoverRating = clickedRating" @click="clickedRating = 4">★</span>
            <span :class="{ active: hoverRating >= 5 }" @mouseover="previewStars(5)"
                @mouseleave="hoverRating = clickedRating" @click="clickedRating = 5">★</span>
        </div>
        <p v-if="ratingDone">Tack för ditt omdöme!</p>
        <button v-else id="rateButton" @click="submitRating()" :disabled="buttonCheck" >Betygsätt recept!</button>


    </div>
</template>

<script>
export default {
    data() {
        return {
            hoverRating: 0,
            clickedRating: 0,
            ratingDone: false
        }
    },
    props: ['recipeId'],
    methods: {
        previewStars(toHover) {
            if (!this.ratingDone) {
                this.hoverRating = toHover;
            }
        },
        submitRating() {
            var button = document.getElementById("rateButton")
            button.disabled = true;
            var url = "https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/recipes/" + this.recipeId + "/ratings"
            var data = {
                rating: this.clickedRating
            }
            const response = fetch(url, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(data),
            });
            this.ratingDone = true;
        }
    },
    computed:{
        buttonCheck(){
            if(this.clickedRating<=0){
                return true;
            }
            else{
                return false;
            }
        }
    }
}
</script>

<style scoped>
.stars {
    font-size: 80px;
    color: rgb(172, 137, 169);
}

.active {
    color: rgb(255, 223, 80);
}
.setRatingBox{
    border-radius: 10px;
    border-width: 1px;
    border-color:blueviolet;
    border-style:solid;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
}
#rateButton{
    background-color:blueviolet;
    border-color:blueviolet;
    color:aliceblue;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 15px;
    box-shadow: inset;
    box-sizing: border-box;
    padding: 10px;
    font-size:large;
}
#rateButton:disabled{
    background-color: rgb(223, 203, 221);
    color:rgb(133, 120, 132);
}
#rateButton:hover{
    background-color:rgb(173, 99, 241);
}
#rateButton:active{
    background-color:rgb(120, 47, 189);
}
</style>