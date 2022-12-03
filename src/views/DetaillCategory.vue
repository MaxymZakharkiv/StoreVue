<template>
  <div>
    <div v-for="item in list_product" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>

import http from '@/http/index'
import { mapState } from 'vuex'

export default {
  name: "DetaillCategory",
  data(){
    return{
      list_product: [],
      urlPath: this.$route.params.slug
    }
  },
  created() {
    this.getProduct(this.urlPath)
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
  },
  computed:{
    ...mapState(['selectedCategory'])
  },
}
</script>

<style scoped>

</style>