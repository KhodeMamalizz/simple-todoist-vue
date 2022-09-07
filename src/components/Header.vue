<template>
  <div class="header w-full h-24 bg-[#570A57] shadow-sm rounded-md flex justify-center items-center text-[#fff]">
    <router-link :to="{name : 'Todos'}">Home</router-link>
    <router-link :to="{name : 'NewTask'}">Add Task</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
a{
    text-decoration: none;
    font-size: 18px;
    margin: 0px 10px;
}

</style>