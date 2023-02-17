<template>
  <div class="category-container">
    <h1 class="category-title">{{ category }}<span> News</span></h1>
    <Card/>
  </div>
</template>

<script>
import { inject , ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import Card from '../components/Card.vue'

export default {
  name: "Catagory",
  components: { Card },
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

.category-container {
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
  border-bottom: 3px solid #dc3545; 
}

.category-title span {
  color: #dc3545;
}

</style>