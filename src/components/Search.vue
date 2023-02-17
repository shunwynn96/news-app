<template>
  <div class="search-container">
    <div class="search-box-bg">
      <input class="search-box" v-model="query"/>
      <button @click="querySubmit" class="search-btn"><i class="fas fa-search"></i></button>
    </div>
    
  </div>
</template>

<script>
import { inject, ref, watchEffect } from 'vue'


export default {
  name: 'Search',
  setup() {
    const store = inject('store')
    const query = ref()

    const querySubmit = () => {
      console.log(query.value)
      //Clears search box after submitting
      query.value = ""
    }
    
    watchEffect(() => {
      console.log(store.state.query)
    })

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

.search-btn {
  border: none;
  background-color: transparent;
  color: white;
  width: 60px;
  font-size: 20px;
}

</style>