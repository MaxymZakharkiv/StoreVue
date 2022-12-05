<template>
  <div>
    <div>
      <input placeholder="enter login" v-model="dataAuth.username">
    </div>
<!--    <div class="block-password">-->
<!--      <span @click="showPassword=!showPassword">{{ showPassword ? 'показати' : 'приховати' }} пароль</span>-->
<!--      <input class="password" :type="showPassword ? 'password' : 'text'" placeholder="enter password" v-model="password">-->
<!--    </div>-->
    <div class="block-password">
      <input type="text" placeholder="enter password" v-model="dataAuth.password">
    </div>
    <div>
      <button @click="authUser">Увійти</button>
    </div>
  </div>
</template>

<script>

import http from "@/http";

export default {
  name: "SignIn",
  data(){
    return {
      dataAuth:{
        username: null,
        password: null
      },
      showPassword: false
    }
  },
  methods:{
    async authUser(){
      const response = await http.post('auth/jwt/jwt/create/', this.dataAuth)
      console.log(response)
      localStorage.setItem('access_token', response.data.access)
      localStorage.setItem('refresh_token', response.data.refresh)
      this.$router.push({name:'main-page'})
    }
  }
}
</script>

<style scoped>
.password{
  border: none;
  outline: none;
}
.block-password span{
  cursor: pointer;
}
</style>