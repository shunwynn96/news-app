<template>
  <div class="navbar-background dark-menu-bar">
    <div class="navbar-container">
      <router-link class="navbar-title" :to="{ name: 'Home' }" @click="clearAll"><h1>THE NEWS</h1></router-link>
      <div class="navbar-links">
        <router-link :to="{ name: 'Home' }"  @click="clearAll">Home</router-link>


        <div class="dropdown">
          <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catagory
          </button>
          <ul class="dropdown-menu">
            <li><router-link @click="clearSearch" class="dropdown-item" :to="{ name: 'Category', params: { category: 'business' }}">Business</router-link></li>
            <li><router-link @click="clearSearch" class="dropdown-item" :to="{ name: 'Category', params: { category: 'entertainment' }}">Entertainment</router-link></li>
            <li><router-link @click="clearSearch" class="dropdown-item" :to="{ name: 'Category', params: { category: 'health' }}">Health</router-link></li>
            <li><router-link @click="clearSearch" class="dropdown-item" :to="{ name: 'Category', params: { category: 'science' }}">Science</router-link></li>
            <li><router-link @click="clearSearch" class="dropdown-item" :to="{ name: 'Category', params: { category: 'sports' }}">Sports</router-link></li>
          </ul>
        </div>
        <router-link :to="{ name: 'ContactUs' }">Contact Us</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue' 

export default {
  name: 'Navbar',
  setup() {
    const store = inject('store')

    const clearSearch = () => {
      store.methods.updateSearchQuery("")
    }
    
    const clearAll = () => {
      store.methods.updateSearchQuery("")
      store.methods.updateCategory("")
    }
  return { clearAll, clearSearch }
  }
}
</script>

<style>

.navbar-background {
  background-color: var(--color-1);
  height: 50px;
}

.navbar-container {
  margin: auto;
  display: flex;
  height: 50px;
  max-width: 1920px;
  justify-content: space-between;
}

.navbar-title {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.navbar-title h1 {
  font-size: 1.5em;
  /* padding: 0.6rem 0 0 3rem; */
  margin: 0 0 0 1rem;
  color: white;
  font-weight: 700;
  letter-spacing: 2px;
}

.navbar-links {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  color: white;
}

.navbar-links a {
  padding: 0 1rem 0;
  text-decoration: none;
  color: white;
  font-weight: 500;
}


/* Override Boostrap Styles */


.dropdown button {
  padding: 0 1rem 0;
  background-color: var(--color-1);
  color: white;
  border: none;
  font-weight: 500;
}

.dropdown-menu {
  inset: 21px auto auto 0px !important;
  background-color: var(--bg-1) !important;
}

.dropdown-menu a {
  padding: 0.5rem 1rem;
  color: var(--text-primary);
}

/* Override Boostrap Styles */

</style>