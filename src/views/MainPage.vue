<template>
  <div v-for="product in products" :key="product.id">
    <router-link :to="{ name:'product-detail', params:{slug: product.slug} }">
      {{ product.title }}
    </router-link>
  </div>
  <div class="pagination">
    <button @click="previewsPage">Назад</button>
    <button @click="nextPage">Вперед</button>
  </div>
</template>

<script>

import http from "@/http/index";

export default {
  name: "MainPage",
  data(){
    return{
      products: [],
      offset:0
    }
  },
  created() {
    this.getProducts()
  },
  methods:{
    async getProducts(offset=0){
      const response = await http.get('shop/product/', {params: {offset:offset}})
      this.products = response.data.results
    },
    nextPage(){
      this.offset += 3
      this.getProducts(this.offset)
    },
    previewsPage(){
      this.offset -= 3
      if(this.offset >= 0){
        this.getProducts(this.offset)
      } else {
        this.offset = 0
        this.getProducts()
      }
    }
  }
}
</script>

<style scoped>

</style>