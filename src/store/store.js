import { reactive } from "vue";

const state = reactive({
  articles: [],
  category: "",
  search_query: "",
});

const methods = {
  updateArticles(newArticles) {
    state.articles = newArticles;
  },
  updateCategory(newCategory) {
    state.category = newCategory;
  },
  updateSearchQuery(newSearchQuery) {
    state.search_query = newSearchQuery;
  },
};

export default {
  state,
  methods,
};
