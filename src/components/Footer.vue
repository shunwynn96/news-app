<template>
  <div class="footer-container">
    <p class="footer-copyright">Copyright © {{ year }}</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  setup() {
    const year = new Date().getFullYear()

    return { year }
  }
}
</script>

<style>

.footer-container {
  height: 50px;
  background-color: var(--color-1);
}

.footer-copyright {
  font-size: 13px;
  text-align: center;
  padding-top: 1rem;
  color: white;
}


</style>