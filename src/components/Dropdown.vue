<template>
  <div class="dropdown" v-click-away="closeDropdown">
    <button @click="toggleDropdown">
      Category
    </button>
    <div v-if="showDropdown" class="dropdown-content">
      <ul class="dropdown-list">
        <li class="dropdown-item" @click="switchCategory('business')">Business</li>
        <li class="dropdown-item" @click="switchCategory('entertainment')">Entertainment</li>
        <li class="dropdown-item" @click="switchCategory('health')">Health</li>
        <li class="dropdown-item" @click="switchCategory('science')">Science</li>
        <li class="dropdown-item" @click="switchCategory('sports')">Sports</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: "Dropdown",
  setup() {
    const store = inject('store')
    const router = useRouter()
    let showDropdown = ref(false)

    const switchCategory = (category) => {
      store.methods.updateSearchQuery("")
      router.push({ name: 'Category', params: { category }})
      showDropdown.value = false
    }

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value
    }

    const closeDropdown = () => {
      showDropdown.value = false
    }

    return { showDropdown, toggleDropdown, closeDropdown, switchCategory }
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

.dropdown-item {
  color: white;
  padding: 0.5rem;
  transition: 0.4s ease;
}

.dropdown-item:hover{
  cursor: pointer;
  background: lightgrey;
	color: dimgrey;
}

@media screen and (max-width: 540px) {
	.dropdown-content {
    left: -151px;
    top: 0px;
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