import { reactive } from "vue";

const state = reactive({
  articles: [],
  category: "",
  search_query: "",
});

const methods = {
  updateArticles(newArticles) {
    state.articles = newArticles;
    console.log(state.articles);
  },
  updateCategory(newCategory) {
    state.category = newCategory;
  },
  updateSearchQuery(newSearchQuery) {
    state.search_query = newSearchQuery;
  },
  formatDate(date) {
    return date.replace("T", " ").slice(0, 19);
  },
};

export default {
  state,
  methods,
};
