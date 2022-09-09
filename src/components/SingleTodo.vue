<template>
  <div class="task w-full h-auto rounded-md flex justify-between py-4 px-5 bg-[#ffffff16] text-[#fff]">
    <div class="flex flex-col">
        <p @click="showDetails = !showDetails" class="text-2xl cursor-pointer">{{ project.title }}</p>
        <p v-if="showDetails" class="mt-3">{{ project.details }}</p>
    </div>
    <div class="flex flex-col">
        <i class="fa-solid fa-pen"></i>
        <i class="fa-solid fa-trash"></i>
        <i class="fa-solid fa-check"></i>
    </div>
  </div>
</template>

<script>
export default {
    props:['project'],
    data: () => ({
      showDetails: false,
    })
}
</script>

<style>
.task{
    border-left: 5px solid red !important;
}
</style>