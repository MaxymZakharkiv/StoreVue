<template>
  <div>
    <div>
      <input placeholder="enter login" v-model="dataAuth.username">
    </div>
    <div class="block-password">
      <input type="text" placeholder="enter password" v-model="dataAuth.password">
    </div>
    <div>
      <button @click="authUser">Увійти</button>
    </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

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
    ...mapActions('auth', ['signInUser']),
    authUser(){
      this.signInUser(this.dataAuth)
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