<template>
  <div class="home-container dark-bg">
    <Search/>
    <h1 class="home-title dark-primary-text">Top <span class="split-text dark-secondary-text">Headlines</span></h1>
    <Card/>
  </div>

</template>

<script>
import { inject } from 'vue'
import Card from '../components/Card.vue'
import Search from '../components/Search.vue' 

export default {
  name: 'Home',
  components: { Card, Search },
  setup() {
    const store = inject('store')
    // resets category selection variable when home page is visited again.
    store.methods.updateCategory("")

    return { store }
  }
}
</script>

<style>
.home-container {
  margin: auto;
  padding: 1rem;
  max-width: 1920px;
  /* 100px (Navbar & Footer height) remaining height goes to container */
  min-height: calc(100vh - 100px);
}

.home-title {
  margin: 0 1rem;
  font-size: 1.8em;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #dc3545; 
}

.split-text {
  color: #dc3545;
}

</style>