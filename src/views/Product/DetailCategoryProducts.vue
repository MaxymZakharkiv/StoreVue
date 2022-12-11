<template>
  <div>
    <template v-if="getIsLoading">
      Loading...
    </template>
    <template v-else>
      <div v-if="list_product">
        <div v-for="item in getProductState" :key="item.id">
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
    </template>
  </div>
</template>

<script>

// import http from '@/http'

import {mapGetters, mapActions} from "vuex";

export default {
  name: "DetailCategoryProducts",
  data(){
    return{
      list_product: [],
      offset:0
    }
  },
  computed:{
    ...mapGetters('product', [
        'getProductState',
        'getIsLoading'
    ]),
    getUrlParams(){
      return this.$route.params.slug
    }
  },
  methods:{
    ...mapActions('product', ['getDetailProduct']),
    nextPage(){
      this.offset += 3
    },
    previewsPage(){
      this.offset -= 3
      if(this.offset < 0){
        this.offset = 0
      }
    }
  },
  watch:{
    getUrlParams(val){
      this.getDetailProduct(val)
    }
  }
}
</script>

<style scoped>

</style>