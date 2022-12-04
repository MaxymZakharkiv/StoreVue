<template>
  <HeaderCategories/>
  <router-view/>
</template>

<script>

import HeaderCategories from "@/components/CommonComponents/HeaderMenu";

export default {
  name: "CommonLayout",
  components:{
    HeaderCategories
  }
}
</script>

<style scoped>

</style>