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
        <button v-else id="rateButton" @click="submitRating()" :disabled="buttonCheck">Betygsätt recept!</button>


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
    computed: {
        buttonCheck() {
            if (this.clickedRating <= 0) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}
</script>

<style scoped>
.stars {
    font-size: 80px;
    color: #F7B2AD;
}

.active {
    color: #F9DB6D;
}

.setRatingBox {
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    border-width: 3px;
    border-color: #EF8275;
    border-style: dashed;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
}

#rateButton {
    background-color: #EF8275;
    border-color: #EF8275;
    color: #2C0E37;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 15px;
    box-shadow: inset;
    box-sizing: border-box;
    padding: 10px;
    font-size: large;
}

#rateButton:hover {
    background-color: #F7B2AD;
}

#rateButton:disabled {
    background-color: #e7ada6;
    color: rgb(138, 105, 121);
}

#rateButton:active {
    background-color: #EF8275;
}

@media (min-width: 576px) {
    .setRatingBox {
        width: 100%;
        min-width: 300px;
    }
}

@media (min-width: 920px) {
    .setRatingBox {
        width: 60%;
        min-width: 500px;
        max-width: 900px;
    }
}</style>