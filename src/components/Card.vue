<template>
  <div class="trending-container">
      <div class="trending" v-for="(article, i) in store.state.articles" :key="i">
        <div class="image-box">
          <a v-if="!article.image" :href="article.url" target="_blank">
            <img src="../assets/no-image.jpg" />
          </a>
          <a v-else :href="article.url" target="_blank">
            <img :src="article.image" :alt="article.source.name"/>
          </a>
        </div>
        
        <h3 class="trending-title"><a :href="article.url" target="_blank">{{ article.title }}</a></h3>
        <p class="trending-date">{{ store.methods.formatDate(article.publishedAt) }}</p>
        
        <button v-if="!article.description" class="read-more-btn">
          Read more
        </button>
        <p v-else class="trending-descript">{{ article.description }}</p>
      </div>
    </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Card',
  setup() {
    const store = inject('store');

    return { store }
  }
}
</script>

<style>

/* TRENDING SECTION */

.trending-container {
  display: grid;
  grid-template-columns: repeat(4, 25%);
}

@media screen and (max-width: 1400px) {
  .trending-container {
    grid-template-columns: repeat(3, 33.3333%);
  }
}

@media screen and (max-width: 980px) {
  .trending-container {
    grid-template-columns: repeat(2, 50%);
  }
}

@media screen and (max-width: 540px) {
  .trending-container {
    grid-template-columns: 1fr;
  }
}

.trending {
  padding: 1rem;
}

.trending button {
  background-color: var(--color-2);
  color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 2px;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem 0.6rem;
  border: none;
  border-radius: 5px;
}

.trending-title {
  font-size: 17px;
  height: 50px;
  margin-bottom: 1rem;
}

.trending-title a {
  text-decoration: none;
  color: var(--text-primary);
}

.trending-title a:hover {
  color: var(--color-2);
}

.trending-name {
  margin: 0.5rem 0;
  font-size: 15px;
}

.trending-date {
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 13px;
  color: var(--color-3);
}

.image-box {
  height: 200px;
  margin: 1rem 0;
}

.image-box img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.image-box img:hover {
  scale: 1.05;
  opacity: 0.5;
}

.read-more-btn:hover {
  opacity: 0.8;
}

.trending-descript {
  color: var(--text-secondary);
  padding: 0.5rem 0;
  border-top: 2px solid var(--color-3);
  border-bottom: 1px solid var(--color-3);
}

/* TRENDING SECTION */

</style>