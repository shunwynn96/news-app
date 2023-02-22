<template>
  <div class="category-bg">
    <div class="category-container">
      <Search />
      <h1 class="category-title">{{ category }}<span> News</span></h1>
      <Card/>
    </div>
  </div>
</template>

<script>
import { inject , ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import Card from '../components/Card.vue'
import Search from '../components/Search.vue'

export default {
  name: "Catagory",
  components: { Card, Search },
  setup() {
    const category = ref("");
    // connecting component to store.js
    const store = inject('store');

    
    const route = useRoute()
    
    watchEffect(() => {
      // Retreiving updated catagory from URL Parameter
      category.value = route.params.category
      // Storing new selected catagory into store.state.catagory
      store.methods.updateCategory(category)
    })
    return { category, store }
  }

}
</script>

<style>

/* max view width color */
.category-bg {
  background-color: var(--bg-1);
}

.category-container {
  background-color: var(--bg-1);
  margin: auto;
  padding: 1rem;
  max-width: 1920px;
  /* 100px (Navbar & Footer height) remaining height goes to container */
  min-height: calc(100vh - 100px);
}

.category-title {
  text-transform: capitalize;
  margin: 0 1rem;
  font-size: 1.8em;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--color-2); 
}

.category-title span {
  color: var(--color-2);
}

</style>