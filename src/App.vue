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
    
    watchEffect(() => {
      let API_URL_HEADLINE = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_API_KEY}`


      // For testing
      let API_URL_CATEGORY_LOCAL = `http://localhost:3000/${store.state.category}`
      let API_URL_HEADLINE_LOCAL = 'http://localhost:3000/articles'



      if(!store.state.category) {
        fetchData(API_URL_HEADLINE_LOCAL)
      } else {
        fetchData(API_URL_CATEGORY_LOCAL)
      }
      console.log("WATCH EFFECT RAN!")
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
