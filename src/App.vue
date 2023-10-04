<script>
import { RouterLink, RouterView } from 'vue-router'
import ApiConnect from './components/ApiConnect.vue';
import SearchBarVue from './components/Search.vue'

export default{
  components:{ApiConnect,SearchBarVue}
}


</script>

<template>
  <div class="container">
  <header>
    <RouterLink to ="/"><h1>Sugar Rush</h1></RouterLink>
    <SearchBarVue></SearchBarVue>
    
  </header>
  <aside>
    <nav>
      <ApiConnect></ApiConnect>
    </nav>
    

  </aside>
  <main>
<RouterView />

  </main>
  <footer>
    <p>footer</p>
  </footer>
</div>
  
</template>

<style scoped>

.container {
  box-sizing: border-box;
  margin:0;
  padding: 0;
  display: grid;
        grid-template-columns: 1fr 3fr;
}
header{
  box-sizing: border-box;
  grid-column-start:1;
  grid-column-end:3;
  background-color: #c8b6ff;
}
header a{
  text-decoration: none;
}
header h1{
  color:blanchedalmond;
  margin:0px;
  padding:10px;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 64px;
  background: linear-gradient(to right, #ffd6ff, #e7c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;


}
aside{
  box-sizing: border-box;
  grid-column-start: 1;
  grid-column-end: 2;
  min-height:700px;
  background-color: #ffd6ff;

}
main {
  background-color: white;
  box-sizing: border-box;
  grid-column-start: 2;
  grid-column-end: 3;
  

}
footer {
  box-sizing: border-box;
  grid-column-start: 1;
  grid-column-end:3;
  text-align: center;
  background-color: #c8b6ff;

}

</style>

