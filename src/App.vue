<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import { watchEffect, provide } from 'vue'
import store from "./store/store.js"
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar, Footer },
  setup() {

    // allows the store to be shared with all components
    provide('store', store)

    const fetchData = async (URL) => {
      try{
        let data = await fetch(URL)
        if (!data.ok) {
          throw Error(`Oops, something went wrong`)
        }
        store.methods.updateArticles(await data.json())
      } catch (err) {
        console.log(err)
      }
    }
    // fetchData(API_URL_HEADLINE)
    
    watchEffect(() => {
      let API_URL_HEADLINE = ""
      let API_URL_SEARCH = ""

      if(process.env.API_KEY) {
        API_URL_HEADLINE = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`
        // let API_URL_CATEGORY = `https://newsapi.org/v2/top-headlines/sources?country=us&category=${store.state.category}&apiKey=${process.env.API_KEY}`
        API_URL_SEARCH = `https://newsapi.org/v2/everything?q=${store.state.search_query}&apiKey=${process.env.API_KEY}`
      } else {
        API_URL_HEADLINE = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_API_KEY}`
        // let API_URL_CATEGORY = `https://newsapi.org/v2/top-headlines/sources?country=us&category=${store.state.category}&apiKey=${process.env.VUE_APP_API_KEY}`
        API_URL_SEARCH = `https://newsapi.org/v2/everything?q=${store.state.search_query}&apiKey=${process.env.VUE_APP_API_KEY}`
      }

      if(store.state.search_query !== "") {
        fetchData(API_URL_SEARCH)
      }
      // else if(store.state.category !== "") {
      //   fetchData(API_URL_CATEGORY)
      // } 
      else {
        fetchData(API_URL_HEADLINE)
      }
      
     
      // For testing
      // let API_URL_HEADLINE_LOCAL = 'http://localhost:3000/articles'
      // let API_URL_CATEGORY_LOCAL = `http://localhost:3000/${store.state.category}`
      // let API_URL_SEARCH_LOCAL = `http://localhost:3000/${store.state.search_query}`

      // if(store.state.search_query !== "") {
      //   fetchData(API_URL_SEARCH_LOCAL)
      // }
      // else if(store.state.category !== "") {
      //   fetchData(API_URL_CATEGORY_LOCAL)
      // } else {
      //   fetchData(API_URL_HEADLINE_LOCAL)
      // }
    })

  }
}
</script>

<style>
* {
  font-family: "Segoe UI","Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  margin: 0;
}

</style>
