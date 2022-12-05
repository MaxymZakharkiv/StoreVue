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
    <div class="pagination">
      <button @click="previewsPage">Назад</button>
      <button @click="nextPage">Вперед</button>
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
      offset:0
    }
  },
  created() {
    this.$store.watch((state) => {
      if(!state.selectedCategory){
        this.getProduct(this.$route.params.slug)
      } else {
        this.getProduct(state.selectedCategory.slug)
      }
    })
  },
  methods:{
    async getProduct(url){
      const response = await http.get(`shop/product/category/${url}/`, {params:{offset:this.offset}})
      this.list_product = await response.data.results
    },
    nextPage(){
      this.offset += 3
    },
    previewsPage(){
      this.offset -= 3
      if(this.offset < 0){
        this.offset = 0
      }
    }
  }
}
</script>

<style scoped>

</style>