<template>
  <div v-for="product in products" :key="product.id">
    {{ product }}
  </div>
</template>

<script>

import http from "@/http/index";

export default {
  name: "MainPage",
  data(){
    return{
      products: []
    }
  },
  created() {
    this.getProducts()
  },
  methods:{
    async getProducts(){
      const response = await http.get('shop/product/')
      this.products = response.data.results
    }
  }
}
</script>

<style scoped>

</style>