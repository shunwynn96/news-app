import { reactive } from "vue";

const state = reactive({
  articles: [],
  category: "",
  query: "",
});

const methods = {
  updateArticles(newArticles) {
    state.articles = newArticles;
  },
  updateCategory(newCategory) {
    state.category = newCategory;
  },
  formatDate(date) {
    return date.replace("T", " ").slice(0, 19);
  },
  updateQuery(newQuery) {
    state.query = newQuery;
  },
};

export default {
  state,
  methods,
};
