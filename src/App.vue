<template>
  <div class="container mx-auto">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
body {
  background-color: #2e0249;
  padding: 20px;
}
</style>