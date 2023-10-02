<script>
import { RouterLink, RouterView } from 'vue-router'

import GreetingJulia from "./components/Greeting-Julia.vue"

import ApiConnect from './components/ApiConnect.vue';

export default{
  components:{GreetingJulia,ApiConnect

  }
}


</script>

<template>
  <header>
   
  </header>

  <main>

  <GreetingJulia />



  <api-connect></api-connect>




  <RouterView />
  </main>

 
</template>

<style scoped>


</style>

