<script>
import { RouterLink, RouterView } from 'vue-router'
import ApiConnect from './components/ApiConnect.vue'
import SearchBarVue from './components/Search.vue'


export default{
  components:{ApiConnect,SearchBarVue}
}


</script>

<template>
  <div class="container">
  <header>
    <RouterLink to ="/"><h1>Sugar Rush</h1></RouterLink>
    
    
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
  </footer>
</div>
  
</template>

<style scoped>

.container {
  box-sizing: border-box;
  margin:0;
  padding: 0;
  display: grid;
        grid-template-columns: 1fr 4fr;

}
header{
  box-sizing: border-box;
  grid-column-start:1;
  grid-column-end: 3;
  background-color: #EF8275;

}
header a{
  text-decoration: none;
}
header h1{
  margin:0px;
  padding:10px;
  padding-left:30px;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 64px;
  color:#F9DB6D;
  text-shadow: 1px 1px 2px #2C0E37;

  background-clip: text;


}
aside{
  box-sizing: border-box;
  grid-column-start: 1;
  grid-column-end: 2;


  background-color: #F7B2AD;

}
main {
  background-color: white;
  box-sizing: border-box;
  grid-column-start: 2;
  grid-column-end: 3;
  padding:30px;
  min-height:900px;
  

}
footer {
  box-sizing: border-box;
  grid-column-start: 1;
  grid-column-end:3;
  text-align: center;
  background-color: #EF8275;
  min-height:150px;

}

</style>

