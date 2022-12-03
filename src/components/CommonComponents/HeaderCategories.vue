<template>
  <ul class="list-link">
    <router-link to="/" class="link">
      Головна
    </router-link>
    <router-link
        class="link"
        v-for="i in categories"
        :key="i.id"
        @click="checkCategory(i)"
        :to="{ name:'detail-category', params:{ slug: i.slug }}"
    >{{ i.name }}</router-link>
  </ul>
</template>

<script>

import http from "@/http/index";
import { mapActions } from 'vuex'

export default {
  name: "HeaderCategories",
  data(){
    return{
      categories: []
    }
  },
  created() {
    this.getCategories()
  },
  methods:{
    ...mapActions(['changeCategory']),
    async getCategories(){
      const response = await http.get('shop/categories/')
      this.categories = response.data
    },
    checkCategory(data){
      this.changeCategory(data)
    }
  },
}
</script>

<style scoped>
.list-link{
  display: flex;
  justify-content: space-around;
}
.link{
  color: black;
  text-decoration: none;
}
.link:hover{
  color: blue;
  cursor: pointer;
}
</style>