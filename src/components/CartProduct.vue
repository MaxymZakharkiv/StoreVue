<template>
  <div>
    {{ product.category.name }}
    {{ product.title }}
    {{ product.price }}
    <router-link :to="{ name:'product-detail', params:{slug: product.slug} }">Детальніше</router-link>
    <button @click="addToCart(product)" :disabled="!product.count_on_stock || inCart">{{ inCart ? 'Товар в корзині' : setCaptionButton }}</button>
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
      inCart: false
    }
  },
  computed:{
    setCaptionButton(){
      return !this.product.count_on_stock ? 'Товар відсутній на складі' : 'Додати в корзину'
    }
  },
  methods:{
    addToCart(product){
      this.$emit('addToCart', product)
      this.inCart = true
    }
  }
}
</script>

<style scoped>

</style>