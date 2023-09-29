<script>

import GreetingJulia from "./components/Greeting-Julia.vue"

import card from './components/CardComponent.vue'
import ApiConnect from './components/apiConnect.vue';

export default{
  components:{GreetingJulia,ApiConnect,
card

  }
}


</script>

<template>
  <header>
   
  </header>

  <main>

  <GreetingJulia />

  <card></card>

  <api-connect></api-connect>


  </main>
</template>

<style scoped>


</style>

