<template>
  <div>
    <template v-if="cart_products.length > 0">
      <p v-for="item in cart_products" :key="item.id">
        <CartProduct
            :product="item"
            @plusGoods="plusGoods"
            @minusGoods="minusGoods"
            @deleteProductFromCart="deleteProductFromCart"
        />
      </p>
      <p>total price {{ total_sum }}</p>
    </template>
    <template v-else>
      Корзина пуста
    </template>
  </div>
</template>

<script>

import http from "@/http";

import CartProduct from "@/components/CartProduct";

export default {
  name: "CartCustomer",
  components:{
    CartProduct
  },
  data(){
    return{
      cart_products: null,
      total_sum: 0,
    }
  },
  created() {
    this.getCart()
  },
  methods:{
    async getCart(){
      const response = await http.get('shop/cart/get_current_cart_customer/')
      this.cart_products = response.data.products
      this.total_sum = this.cart_products.reduce((sum, item) => {
        return sum + ++item.all_price
      }, 0)
    },
    async minusGoods({id, count_product, price}){
      await http.patch(`shop/cart/change-count-cart-product/${id}/${count_product}/`)
      this.total_sum -= ++price
    },
    async plusGoods({id, count_product, price}){
      await http.patch(`shop/cart/change-count-cart-product/${id}/${count_product}/`)
      this.total_sum += ++price
    },
    async deleteProductFromCart(id){
      await http.post(`shop/cart/delete-from-cart/${id}/`)
      this.cart_products = this.cart_products.filter(i => i.id !== id)
    }
  }
}
</script>

<style scoped>

</style>