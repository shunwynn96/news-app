<template>
  <div class="search-container">
    <div class="search-box-bg">
     
      <input @keypress.enter="querySubmit" class="search-box" v-model="query"/>
  
      <div class="search-btn-container" @click="querySubmit">
        <i class="fas fa-search search-btn"></i>
      </div>
    </div>
    
  </div>
</template>

<script>
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'


export default {
  name: 'Search',
  setup() {

    const router = useRouter()
    const store = inject('store')
    const query = ref()

    const querySubmit = () => {

      // clears category selection to prevent interference with API logic in App.vue
      store.methods.updateCategory("")

      // navigates to SearchView
      router.push({ name: 'SearchView'})

      // updating search_query state with new search values
      store.methods.updateSearchQuery(query.value)

      //Clears search box after submitting
      query.value = ""
    }

    return { store, query, querySubmit }
  }
}
</script>

<style>

.search-box-bg {
  display: flex;
  margin:0 1rem 2rem;
  border-radius: 5px;
  background-color: #dc3545;
  padding: 0.3rem;
}

.search-box {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px 0px 0px 5px;
  background-color: rgb(232, 232, 232);
}

.search-btn-container {
  position: relative;
  width: 50px;
  cursor: pointer;
}

.search-btn {
  position: absolute;
  top: 8px;
  right: 10px;
  text-decoration: none;
  color: white;
  font-size: 25px;
}

</style>