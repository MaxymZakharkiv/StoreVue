<template>
  <ul class="list-link">
    <router-link to="/" class="link-main">
      Головна
    </router-link>
    <div class="dropdown">
      <span>Категорії</span>
      <div class="links">
        <router-link
            v-for="i in categories"
            class="link"
            :key="i.id"
            :to="{ name:'detail-category', params:{ slug: i.slug }}"
        >{{ i.name }}</router-link>
      </div>
    </div>
    <router-link class="cart" :to="{name:'cart'}">Корзина</router-link>
  </ul>
</template>

<script>

import http from "@/http/index";

export default {
  name: "HeaderMenu",
  data(){
    return{
      categories: []
    }
  },
  created() {
    this.getCategories()
  },
  methods:{
    async getCategories(){
      const response = await http.get('shop/categories/')
      this.categories = response.data
    }
  },
}
</script>

<style scoped>
.list-link{
  display: flex;
  justify-content: space-around;
}
.link-main{
  color: black;
  text-decoration: none;
}
.link{
  display: block;
  padding-bottom: 5px;
  color: black;
  text-decoration: none;
}
.link:hover, .link-main:hover{
  color: blue;
  cursor: pointer;
}
.dropdown{
  position: relative;
}
.links{
  position: absolute;
  display: none;
  background: grey;
  padding: 15px;

}
.dropdown:hover .links{
  display: block;
}
.cart{
  text-decoration: none;
  color: black;
}
.cart:hover{
  color: blue
}
</style>