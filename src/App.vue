<template>
  <div class="container mx-auto">
    <Header />
    <transition enter-active-class="animated fadeInUp">
      <router-view></router-view>
    </transition>
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