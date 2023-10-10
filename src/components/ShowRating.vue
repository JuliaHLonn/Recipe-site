<template>
        <p class="ratingDisplay">Betyg:  <span class="avgStars">{{ getStars(rating) }}</span></p>
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
            }
        },
    }
    
</script>

<style scoped>


</style>