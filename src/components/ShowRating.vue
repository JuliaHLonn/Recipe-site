<template>
        <p class="ratingDisplay"><span class="avgStars">{{ getStars(rating) }} ({{ shortRating(rating) }} / 5)</span></p>
</template>

<script>
    export default {
        props:['rating'],
        methods:{
            getStars(avgScore){
                var count = 0;
               if(avgScore){ count = Math.round(avgScore)}
               else{
                count= 0;
               }
                var string = ""
                for(var i=0; i<count; i++){
                    string = string+ "★"
                }
                return string;
            },
            shortRating(rating){
                var score;
                try{
                    score = rating.toFixed(1);
                }
                catch{
                    score = rating;
                }
                return score;
            }
        },
    }
    
</script>

<style scoped>


</style>