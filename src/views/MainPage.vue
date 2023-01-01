<template>
  <template v-if="isLoading">
    Loading...
  </template>
  <template v-else>
    <div v-if="products.length">
      <div v-for="product in products" :key="product.id">
        <CartProduct :product="product" @addToCart="addToCartProduct"/>
      </div>
      <div class="pagination">
        <button @click="previewsPage" :disabled="disableButtonPrev">Назад</button>
        <button @click="nextPage">Вперед</button>
      </div>
    </div>
    <div v-else>
      <NoProduct/>
    </div>
  </template>
</template>

<script>

import {mapActions, mapState} from 'vuex'

import NoProduct from "@/components/CommonComponents/NoProduct";
import CartProduct from "@/components/CartProduct";

export default {
  name: "MainPage",
  components:{
    NoProduct, CartProduct
  },
  data(){
    return{
      // products: [],
      offset:0
    }
  },
  created() {
    this.getProduct()
  },
  computed:{
    ...mapState('product', ['products', 'isLoading']),
    disableButtonPrev(){
      return this.offset <= 0
    }
  },
  methods:{
    ...mapActions('product', ['getProduct']),
    ...mapActions('cart', ['addToCart']),
    addToCartProduct(product){
      this.addToCart(product)
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