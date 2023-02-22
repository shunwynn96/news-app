<template>
  <div class="dropdown">
    <button @click="toggleDropdown" v-click-away="closeDropdown">
      Category
    </button>
    <div v-if="showDropdown" class="dropdown-content">
      <ul class="dropdown-list">
        <li class="dropdown-item"><router-link @click="clearSearch" :to="{ name: 'Category', params: { category: 'business' }}">Business</router-link></li>
        <li class="dropdown-item"><router-link @click="clearSearch" :to="{ name: 'Category', params: { category: 'entertainment' }}">Entertainment</router-link></li>
        <li class="dropdown-item"><router-link @click="clearSearch" :to="{ name: 'Category', params: { category: 'health' }}">Health</router-link></li>
        <li class="dropdown-item"><router-link @click="clearSearch" :to="{ name: 'Category', params: { category: 'science' }}">Science</router-link></li>
        <li class="dropdown-item"><router-link @click="clearSearch" :to="{ name: 'Category', params: { category: 'sports' }}">Sports</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, inject } from 'vue'

export default {
  name: "Dropdown",
  setup() {
    const store = inject('store')
    let showDropdown = ref(false)

    const clearSearch = () => {
      store.methods.updateSearchQuery("")
    }

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value
    }

    const closeDropdown = () => {
      showDropdown.value = false
    }

    return { showDropdown, toggleDropdown, closeDropdown, clearSearch }
  }

}
</script>

<style>

.dropdown {
  position: relative;
}

.dropdown button {
  background-color: var(--color-1);
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  color: white;
  border: none;
}

.dropdown-content {
  position: absolute;
  width: 150px;
  right: 0px;
  top: 40px;
  z-index: 98;
  background-color: var(--color-1);
}

.dropdown-list {
  list-style: none;
  padding: 0px;
}


.dropdown-item a {
  display: block;
  padding: 0.5rem 1rem;
  transition: 0.4s ease;
}

.dropdown-item a:hover {
  cursor: pointer;
  background: lightgrey;
	color: dimgrey;
}

@media screen and (max-width: 540px) {
	.dropdown-content {
    left: -151px;
    top: 0px;
  }

  .dropdown-item a {
    text-decoration: none;
    color: white;
  }

  .dropdown button {
    padding: 0.5rem;
    background-color: var(--color-1);
    width: 100%;
    font-weight: 400;
    font-size: 20px;
    transition: 0.4s ease;
  }

  .dropdown button:hover {
    cursor: pointer;
    background: lightgrey;
    color: dimgrey;
  }
}

</style>