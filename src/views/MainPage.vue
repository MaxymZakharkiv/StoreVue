<template>
  <div v-for="product in getProductState" :key="product.id">
    <router-link :to="{ name:'product-detail', params:{slug: product.slug} }">
      {{ product.id }} {{ product.title }} {{ product.count_on_stock }}
    </router-link>
    <button class="btn-add-to-cart" @click="addToCart(product.id)" :disabled="!product.count_on_stock">{{ !product.count_on_stock ? 'Товар відсутній на складі' : 'Додати в корзину' }}</button>
  </div>
  <div class="pagination">
    <button @click="previewsPage">Назад</button>
    <button @click="nextPage">Вперед</button>
  </div>
</template>

<script>

import http from "@/http/index";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "MainPage",
  data(){
    return{
      products: [],
      offset:0
    }
  },
  created() {
    this.getProduct()
  },
  computed:{
    ...mapGetters('product', ['getProductState'])
  },
  methods:{
    ...mapActions("product", ["getProduct"]),
    async addToCart(id){
      await http.post(`shop/cart/add-to-cart/${id}/`)
    },
    nextPage(){
      this.offset += 3
      this.getProduct(this.offset)
    },
    previewsPage(){
      this.offset -= 3
      if(this.offset >= 0){
        this.getProduct(this.offset)
      } else {
        this.offset = 0
        this.getProduct()
      }
    }
  }
}
</script>

<style scoped>
.btn-add-to-cart{
  margin: 10px 50px;
  cursor: pointer;
}
</style>