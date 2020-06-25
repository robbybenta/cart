<template>
  <div>
    <Header />
    <ListProduct />
  </div>
</template>
<script>
import ListProduct from "@/components/ListProduct.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    ListProduct,
    Header
  }
};
</script>
<style scoped>
</style>