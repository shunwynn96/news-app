<template>
  <div class="article-container">
      <div class="article" v-for="(article, i) in store.state.articles.articles" :key="i">
        <div class="image-box">
          <a v-if="!article.image" :href="article.url" target="_blank">
            <img src="../assets/no-image.jpg" />
          </a>
          <a v-else :href="article.url" target="_blank">
            <img :src="article.image" :alt="article.source.name"/>
          </a>
        </div>
        
        <h3 class="article-title"><a :href="article.url" target="_blank">{{ article.title }}</a></h3>
        <p class="article-date">{{ formatDate(article.publishedAt) }}</p>
        
        <button v-if="!article.description" class="read-more-btn">
          Read more
        </button>
        <p v-else class="article-descript">{{ article.description }}</p>
      </div>
    </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Card',
  setup() {
    const store = inject('store');

    const formatDate = (date) => {
      return date.replace("T", " ").slice(0, 19);
    }

    return { store, formatDate }
  }
}
</script>

<style>

/* article SECTION */

.article-container {
  display: grid;
  grid-template-columns: repeat(4, 25%);
}

@media screen and (max-width: 1400px) {
  .article-container {
    grid-template-columns: repeat(3, 33.3333%);
  }
}

@media screen and (max-width: 980px) {
  .article-container {
    grid-template-columns: repeat(2, 50%);
  }
}

@media screen and (max-width: 540px) {
  .article-container {
    grid-template-columns: 1fr;
  }
}

.article {
  padding: 1rem;
}

.article button {
  background-color: var(--color-2);
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 2px;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem 0.6rem;
  border: none;
  border-radius: 5px;
}

.article-title {
  font-size: 16px;
  font-weight: 500;
  /* max-height: 80px; */
  margin-bottom: 1rem;
}

.article-title a {
  text-decoration: none;
  color: var(--text-primary);
}

.article-title a:hover {
  color: var(--color-2);
}

.article-date {
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

.article-descript {
  color: var(--text-secondary);
  font-size: 13px;
  padding: 0.5rem 0;
  border-top: 2px solid var(--color-3);
  border-bottom: 1px solid var(--color-3);
}

/* article SECTION */

</style>