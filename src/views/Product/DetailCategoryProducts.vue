<template>
  <div>
    <template v-if="isLoading">
      Loading...
    </template>
    <template v-else>
      <div v-if="products.length">
        <div v-for="item in products" :key="item.id">
          <CartProduct :product="item" @addToCart="addToCartProduct"/>
        </div>
        <div class="pagination">
          <button @click="previewsPage">Назад</button>
          <button @click="nextPage">Вперед</button>
        </div>
      </div>
      <div v-else>
        <NoProduct/>
      </div>
    </template>
  </div>
</template>

<script>

import {mapState, mapGetters, mapActions} from "vuex";

import NoProduct from "@/components/CommonComponents/NoProduct";
import CartProduct from "@/components/CartProduct";

export default {
  name: "DetailCategoryProducts",
  components:{
    NoProduct, CartProduct
  },
  data(){
    return{
      offset:0
    }
  },
  computed:{
    ...mapState('product', [
        'products',
        'isLoading'
    ]),
    ...mapGetters('cart', ['getTotalPrice']),
    getUrlParams(){
      return this.$route.params.slug
    }
  },
  created() {
    this.getDetailProduct({category: this.getUrlParams, offset:this.offset})
  },
  methods:{
    ...mapActions('product', ['getDetailProduct']),
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
      if(val < 0){
        this.offset = 0
      }
      this.getDetailProduct({category: this.getUrlParams, offset: this.offset})
    },
    getUrlParams(val){
      if(!val) return
      this.getDetailProduct({category: val, offset:0})
    }
  }
}
</script>

<style scoped>

</style>