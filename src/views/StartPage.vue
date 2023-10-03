<script setup>
import Card from '../components/CardComponent.vue'
import ApiConnect from '../components/ApiConnect.vue'
import SearchBarVue from '../components/Search.vue'
</script>

<template>
  <main>
    <SearchBarVue></SearchBarVue>
    <ApiConnect></ApiConnect>
    <Card />
  </main>

</template>


