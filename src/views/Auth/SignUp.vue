<template>
  <div>
    <div class="field">
      <input type="text" placeholder="Enter username" v-model="registerData.username">
    </div>
    <div class="field">
      <input type="text" placeholder="Enter password" v-model="registerData.password">
    </div>
    <div class="field">
      <input type="text" placeholder="Enter first name" v-model="registerData.first_name">
    </div>
    <div class="field">
      <input type="text" placeholder="Enter last name" v-model="registerData.last_name">
    </div>
    <div class="field">
      <input type="text" placeholder="Enter number phone" v-model="registerData.customer_phone">
    </div>
    <div class="field">
      <input type="Email" placeholder="Enter email" v-model="registerData.email">
    </div>
    <div class="action">
      <button @click="signUp">Sign up</button>
    </div>
  </div>
</template>

<script>

import http from "@/http";

export default {
  name: "SignUp",
  data(){
    return{
      registerData:{
        username: null,
        password: null,
        first_name: null,
        last_name: null,
        customer_phone: null,
        email: null
      }
    }
  },
  methods:{
    async signUp(){
      const response = await http.post('auth/users/', this.registerData)
      console.log(response)
    }
  }
}
</script>

<style scoped>
  .field{
    margin: 10px 0;
  }
</style>