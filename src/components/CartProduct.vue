<template>
  <div>
    {{ product.id }}
    {{ product.product.title }}
    {{ product.product.price }}
    <br>
    {{ count_product }}
    <button @click="minusGoods">-</button>
    <button @click="plusGoods">+</button>
    <br>
    <button @click="deleteProductFromCart(product.id, )">Delete product</button>
  </div>
</template>

<script>

export default {
  name: "CartProduct",
  props:{
    product:{
      required: true,
      type: Object
    }
  },
  data(){
    return{
      count_product: this.product.count
    }
  },
  methods:{
    minusGoods(){
      if(this.count_product === 1){
        return
      }
      this.count_product--
      this.$emit('minusGoods', {id:this.product.id, count_product: this.count_product, price: this.product.product.price})
    },
    plusGoods(){
      this.count_product++
      this.$emit('plusGoods', {id: this.product.id, count_product: this.count_product, price: this.product.product.price})
    },
    deleteProductFromCart(id){
      this.$emit('deleteProductFromCart', id)
    }
  }
}
</script>

<style scoped>

</style>