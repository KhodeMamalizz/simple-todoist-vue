<template>
  <div class="task w-full h-24 bg-[#fff] flex justify-between">
    <div class="flex flex-col">
        <p>{{ project.title }}</p>
        <p>{{ project.details }}</p>
    </div>
    <div class="icons flex flex-col">
        <i class="fa-solid fa-pen"></i>
        <i class="fa-solid fa-trash"></i>
        <i class="fa-solid fa-check"></i>
    </div>
  </div>
</template>

<script>
export default {
    props:['project']
}
</script>

<style>
.task{
    border-left: 2px solid red;
}
</style>