<template>
  <div>
    <template v-if="getIsLoading">
      Loading...
    </template>
    <template v-else>
      <div v-if="getProductState.length">
        <div v-for="item in getProductState" :key="item.id">
          <router-link :to="{ name:'product-detail', params:{slug: item.slug} }">
            {{ item.title }}
          </router-link>
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

import {mapGetters, mapActions} from "vuex";

import NoProduct from "@/components/CommonComponents/NoProduct";

export default {
  name: "DetailCategoryProducts",
  components:{
    NoProduct
  },
  data(){
    return{
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
  created() {
    this.getDetailProduct({category: this.getUrlParams, offset:this.offset})
  },
  methods:{
    ...mapActions('product', ['getDetailProduct']),
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