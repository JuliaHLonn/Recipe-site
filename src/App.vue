<script>
import { RouterLink, RouterView } from 'vue-router'
import Categories from './components/CategoriesComponent.vue'
import SearchBarVue from './components/Search.vue'


export default{
  components:{Categories,SearchBarVue},
  data() {
    return {
      categoryView: "all"
    }
  },
  watch: {
    $route(to, from) {
      this.categoryView = to.params.CategoryName;
    }
  }
}



</script>

<template>
  <div class="container">
  <header>
    <RouterLink to ="/"><h1>Sugar Rush</h1></RouterLink>
    
    
  </header>
  <aside>
    <nav>
      <Categories :category-select="categoryView" />

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
  margin: 0;
  padding: 0;
  display: grid; 
}

header {
  box-sizing: border-box;
  background-color: #EF8275;
}

header a {
  text-decoration: none;
}

header h1 {
  margin: 0px;
  padding: 10px;
  padding-left: 30px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 64px;
  color: #F9DB6D;
  text-shadow: 1px 1px 2px #2C0E37;
  background-clip: text;
}

aside {
  box-sizing: border-box;
  background-color: #F7B2AD;

}
.categoryContainer{
    box-sizing: border-box;
    padding: 0px;
    margin:0px;
}
main {
  background-color: white;
  box-sizing: border-box;
  min-height: 900px;
}

footer {
  box-sizing: border-box;
  text-align: center;
  background-color: #EF8275;
  min-height: 150px;
}

@media only screen and (min-width: 576px) {
  .container{
    grid-template-columns: 1fr 4fr;
  }
  header{
    grid-column-start: 1;
  grid-column-end: 3;
  }
  aside{
    grid-column-start: 1;
  grid-column-end: 2;
  }
  main{
    grid-column-start: 2;
  grid-column-end: 3;
  padding: 30px;
  }
  footer{
    grid-column-start: 1;
  grid-column-end: 3;
  }

}
@media only screen and (min-width: 920px) {

}
</style>

