<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import { watchEffect, provide, ref, onMounted } from 'vue'
import store from "./store/store.js"
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar, Footer },
  setup() {
    // allows the store to be shared with all components
    provide('store', store)
    
    let key_list = ["VUE_APP_GNEWS_0", "VUE_APP_GNEWS_1", "VUE_APP_GNEWS_2", "VUE_APP_GNEWS_3"]
    let key_num = ref(0)

    const fetchData = async (URL) => {
      try{
        let data = await fetch(URL)

        // switch key if limit reached
        if(data.status === 403) {
          // if key number reaches 4, reset to 0 else increment by 1
          key_num.value === 3 ? key_num.value = 0 : key_num.value++

        } else if (!data.ok) {
          throw Error(`Oops, something went wrong`)
        }

        store.methods.updateArticles(await data.json())
      } catch (err) {
        console.log(err)
      }
    }

    watchEffect(() => {

      let API_URL_HEADLINE = `https://gnews.io/api/v4/top-headlines?country=us&apikey=${process.env[key_list[key_num.value]]}`
      let API_URL_SEARCH = `https://gnews.io/api/v4/search?country=us&q=${store.state.search_query}&apikey=${process.env[key_list[key_num.value]]}`
      let API_URL_CATEGORY = `https://gnews.io/api/v4/top-headlines?country=us&category=${store.state.category}&apikey=${process.env[key_list[key_num.value]]}`
      

      if(store.state.search_query !== "") {
        fetchData(API_URL_SEARCH)
      }
      else if(store.state.category !== "") {
        fetchData(API_URL_CATEGORY)
      }
      else {
        fetchData(API_URL_HEADLINE)
      }
      
      // For testing
      // let API_URL_LOCAL = `http://localhost:3000/articles`
      // fetchData(API_URL_LOCAL)
    })
  }
}
</script>

<style>
* {
  font-family: "Segoe UI","Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  margin: 0;
  
}

body {
  background-color: var(--bg-1);
}

:root {
  --bg-1: #ffffff;
  --text-primary: #000000;
  --text-secondary: #818181;
  --color-1: #ff4444;
  --color-2: #dc3545;
  --color-3: #818181;
  --toggle-size: 4rem;
}

:root.dark-theme {
  --bg-1: #181818;
  --text-primary: #ffffff;
  --text-secondary: #B3B3B3;
  --color-1: #282828;
  --color-2: #404040;
  --color-3: #818181;
}

</style>
