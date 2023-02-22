<template>
  <div class="home-bg">
    <div class="home-container dark-bg">
      <ThemeSwitch />
      <Search/>
      <h1 class="home-title dark-primary-text">Top <span class="split-text dark-secondary-text">Headlines</span></h1>
      <Card/>
    </div>
  </div>

</template>

<script>
import { inject } from 'vue'
import Card from '../components/Card.vue'
import Search from '../components/Search.vue' 
import ThemeSwitch from '../components/ThemeSwitch.vue'

export default {
  name: 'Home',
  components: { Card, Search, ThemeSwitch },
  setup() {
    const store = inject('store')
    // resets category selection variable when home page is visited again.
    store.methods.updateCategory("")

    return { store }
  }
}
</script>

<style>

/* max view width color */
.home-bg {
  background-color: var(--bg-1);
}

.home-container {
  background-color: var(--bg-1);
  margin: auto;
  padding: 1rem;
  max-width: 1920px;
  /* 100px (Navbar & Footer height) remaining height goes to container */
  min-height: calc(100vh - 100px);
}

.home-title {
  margin: 0 1rem;
  color: var(--text-primary);
  font-size: 1.8em;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--color-2);
}

.home-title span {
  color: var(--color-2);
}

</style>