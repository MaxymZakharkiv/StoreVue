<template>
  <div>
    <div v-if="list_product">
      <div v-for="item in list_product" :key="item.id">
        <router-link :to="{ name:'product-detail', params:{slug: item.slug} }">
          {{ item.title }}
        </router-link>
      </div>
    </div>
    <div v-if="!list_product.length">
      Товарів немає
    </div>
  </div>
</template>

<script>

import http from '@/http'

export default {
  name: "DetailCategoryProducts",
  data(){
    return{
      list_product: [],
    }
  },
  created() {
    this.$store.watch((state) => {
      this.getProduct(state.selectedCategory.slug)
    })
  },
  methods:{
    async getProduct(url){
      const response = await http.get(`shop/product/category/${url}/`)
      this.list_product = response.data.results
      console.log(this.list_product)
    }
  }
}
</script>

<style scoped>

</style>