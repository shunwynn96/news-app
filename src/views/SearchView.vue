<template>
</template>

<script>
import { inject } from 'vue'
import Card from '../components/Card.vue'

export default {
  name: 'SearchView',
  components: { Card },
  setup() {
    const store = inject('store')


    return { store }
  }
}
</script>

<style>

</style>