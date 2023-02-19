<template>
  <div class="navbar-background">
    <div class="navbar-container">
      <router-link class="navbar-title" :to="{ name: 'Home' }" @click="clearAll"><h1>THE NEWS</h1></router-link>
      <div class="navbar-links">
        <router-link :to="{ name: 'Home' }"  @click="clearAll">Home</router-link>


        <!-- <div class="dropdown">
          <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catagory
          </button>
          <ul class="dropdown-menu">
            <li><router-link @click="clearAll" class="dropdown-item" :to="{ name: 'Category', params: { category: 'general' }}">General</router-link></li>
            <li><router-link @click="clearAll" class="dropdown-item" :to="{ name: 'Category', params: { category: 'business' }}">Business</router-link></li>
            <li><router-link @click="clearAll" class="dropdown-item" :to="{ name: 'Category', params: { category: 'entertainment' }}">Entertainment</router-link></li>
            <li><router-link @click="clearAll" class="dropdown-item" :to="{ name: 'Category', params: { category: 'health' }}">Health</router-link></li>
            <li><router-link @click="clearAll" class="dropdown-item" :to="{ name: 'Category', params: { category: 'science' }}">Science</router-link></li>
            <li><router-link @click="clearAll" class="dropdown-item" :to="{ name: 'Category', params: { category: 'sports' }}">Sports</router-link></li>
            <li><router-link @click="clearAll" class="dropdown-item" :to="{ name: 'Category', params: { category: 'technology' }}">Technology</router-link></li>
            
          </ul>
        </div> -->
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

    const clearAll = () => {
      store.methods.updateSearchQuery("")
      store.methods.updateCategory("")
    }
  return { clearAll }
  }
}
</script>

<style>

.navbar-background {
  background-color: #ff4444;
  height: 50px;
}

.navbar-container {
  margin: auto;
  display: flex;
  max-width: 1920px;
  justify-content: space-between;
}

.navbar-title {
  text-decoration: none;
}

.navbar-title h1 {
  font-size: 1.5em;
  padding: 0.6rem 0 0 3rem;
  color: white;
  font-weight: 700;
  letter-spacing: 2px;
}

.navbar-links {
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 3rem 0 0;
  width: 200px;
  color: white;
}

.navbar-links a {
  text-decoration: none;
  color: white;
  font-weight: 500;
}


/* Override Boostrap Styles */
.navbar-links button {
  background-color: transparent;
  color: white;
  border: none;
  margin: 0;
  font-weight: 500;
  line-height: 1px;
}

.dropdown-menu {
  inset: 21px auto auto 0px !important;
}

.dropdown-menu a {
  color: black;
}

/* Override Boostrap Styles */



</style>