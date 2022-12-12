<template>
  <template v-if="getIsLoading">
    Loading...
  </template>
  <template v-else>
    <div v-if="getProductState.length">
      <div v-for="product in getProductState" :key="product.id">
        <router-link :to="{ name:'product-detail', params:{slug: product.slug} }">
          {{ product.id }} {{ product.title }} {{ product.count_on_stock }}
        </router-link>
        <button class="btn-add-to-cart" @click="addToCart(product.id)" :disabled="!product.count_on_stock">{{ !product.count_on_stock ? 'Товар відсутній на складі' : 'Додати в корзину' }}</button>
      </div>
      <div class="pagination">
        <button @click="previewsPage" :disabled="disableButtonPrev">Назад</button>
        <button @click="nextPage">Вперед</button>
      </div>
    </div>
    <div v-else>
      <p>Товарів немає</p>
    </div>
  </template>
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
    ...mapGetters('product', ['getProductState', 'getIsLoading']),
    disableButtonPrev(){
      return this.offset <= 0
    }
  },
  methods:{
    ...mapActions("product", ["getProduct"]),
    async addToCart(id){
      await http.post(`shop/cart/add-to-cart/${id}/`)
    },
    nextPage(){
      this.offset += 3
    },
    previewsPage(){
      this.offset -= 3
    }
  },
  watch:{
    offset(val){
      if (val < 0){
        this.offset = 0
      }
      this.getProduct(this.offset)
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