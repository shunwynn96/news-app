<template>
  <div class="navbar-background dark-menu-bar">
    <nav class="navbar-container">
      <router-link class="navbar-title" :to="{ name: 'Home' }" @click="clearAll"><h1>THE NEWS</h1></router-link>
      <NavHamburger />

      <div class="navbar-links">
        <router-link :to="{ name: 'Home' }"  @click="clearAll">Home</router-link>
        <Dropdown />
        <router-link :to="{ name: 'ContactUs' }">Contact Us</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { inject } from 'vue' 
import NavHamburger from './NavHamburger.vue'
import Dropdown from './Dropdown.vue'


export default {
  name: 'Navbar',
  components: { NavHamburger, Dropdown },
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
  align-items: center;
}

.navbar-title {
  text-decoration: none;
}

.navbar-title h1 {
  font-size: 1.5em;
  margin: 0 0 0 1rem;
  color: white;
  font-weight: 700;
  letter-spacing: 2px;
}

.navbar-links {
  display: flex;
  color: white;
  width: 250px;
  padding-right: 1rem;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 540px) {
  .navbar-links {
    display: none;
  }
}

.navbar-links a {
  text-decoration: none;
  color: white;
  font-weight: 500;
}

</style>