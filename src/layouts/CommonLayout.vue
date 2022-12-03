<template>
  <HeaderCategories/>
  <router-view/>
</template>

<script>

import HeaderCategories from "@/components/CommonComponents/HeaderCategories";

export default {
  name: "CommonLayout",
  components:{
    HeaderCategories
  }
}
</script>

<style scoped>

</style>