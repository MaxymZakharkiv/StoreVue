<template>
  <div>
    <template v-if="getCartCustomer.length > 0">
      <p v-for="item in getCartCustomer" :key="item.id">
        <CartProduct
            :product="item"
            @plusGoods="plusGoods"
            @minusGoods="minusGoods"
            @deleteProductFromCart="removeProductFromCart"
        />
      </p>
      <p>total price {{ getTotalPrice }}</p>
    </template>
    <template v-else>
      Корзина пуста
    </template>
  </div>
</template>

<script>
import CartProduct from "@/components/DetailProduct";

import {mapActions, mapGetters} from 'vuex'

export default {
  name: "CartCustomer",
  components:{
    CartProduct
  },
  data(){
    return{
      cart_products: [],
      total_sum: 0,
    }
  },
  computed:{
    ...mapGetters("cart", ["getCartCustomer", "getTotalPrice"])
  },
  created() {
    this.getCart()
  },
  methods:{
    ...mapActions("cart", ["getCart", "changeCountProduct", "deleteProductFromCart"]),
    minusGoods({id, count_product, price}){
      price = -Number(price)
      this.changeCountProduct({id, count_product, price})
    },
     plusGoods({id, count_product, price}){
      price = Number(price)
      this.changeCountProduct({id, count_product, price})
    },
    removeProductFromCart(id){
      this.deleteProductFromCart(id)
    }
  }
}
</script>

<style scoped>

</style>