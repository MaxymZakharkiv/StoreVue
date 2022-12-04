<template>
  <div>{{ product_id }}</div>
  <div>{{ product_title }}</div>
  <div>{{ product_price }}</div>
</template>

<script>

import http from "@/http";

export default {
  name: "DetailProduct",
  data(){
    return {
      product_title: null,
      product_id: null,
      product_price: null
    }
  },
  created() {
    this.getProduct(this.$route.params.slug)
  },
  methods:{
    async getProduct(url){
      const response = await http.get(`/shop/product/${url}/`)
      this.product_title = await response.data.title
      this.product_id = await response.data.id
      this.product_price = await response.data.price
    }
  }
}
</script>

<style scoped>

</style>