<template>
  <div>
    <div>
      <input placeholder="enter login" v-model="login">
    </div>
    <div class="block-password">
      <span @click="showPassword=!showPassword">{{ showPassword ? 'показати' : 'приховати' }} пароль</span>
      <input class="password" :type="showPassword ? 'password' : 'text'" placeholder="enter password" v-model="password">
    </div>
    <div>
      <button>Увійти</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data(){
    return {
      login: null,
      password: null,
      showPassword: false
    }
  },
  methods:{

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