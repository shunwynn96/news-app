<template>
  <div class="search-view-container">
    <ThemeSwitch />
    <Search />
    <h1 class="search-view-title">Search result</h1>
    <Card />
  </div>
</template>

<script>
import { inject } from 'vue'
import Card from '../components/Card.vue'
import Search from '../components/Search.vue'
import ThemeSwitch from '../components/ThemeSwitch.vue'

export default {
  name: 'SearchView',
  components: { Card, Search, ThemeSwitch },
  setup() {
    const store = inject('store')


    return { store }
  }
}
</script>

<style>

.search-view-container {
  margin: auto;
  padding: 1rem;
  max-width: 1920px;
  /* 100px (Navbar & Footer height) remaining height goes to container */
  min-height: calc(100vh - 100px);
}

.search-view-title {
  color: var(--text-primary);
  margin: 0 1rem;
  font-size: 1.8em;
  font-weight: 400;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--color-2); 
}
</style>