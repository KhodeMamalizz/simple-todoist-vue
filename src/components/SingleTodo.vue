<template>
  <div
    class="
      task
      w-full
      rounded-md
      flex
      items-center
      justify-between
      py-4
      px-5
      bg-[#ffffff16]
      text-[#fff]
    "
    :class="{ done: project.complete }"
  >
    <div class="flex flex-col">
      <p
        @click="showDetails = !showDetails"
        class="text-md md:text-2xl cursor-pointer"
      >
        {{ project.title }}
      </p>
      <p v-if="showDetails" class="text-sm md:text-lg mt-3">
        {{ project.details }}
      </p>
    </div>
    <div class="flex items-center">
      <router-link :to="{name: 'EditTask' ,  params: {id: project.id} }">
        <i class="icon fa-solid fa-pen"></i>
      </router-link>
      <i @click="deleteProject" class="icon fa-solid fa-trash"></i>
      <i @click="changeComplete" class="icon fa-solid fa-check"></i>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["project"],
  data: () => ({
    showDetails: false,
  }),
  methods: {
    deleteProject() {
      axios
        .delete(`http://localhost:3000/todos/${this.project.id}`)
        .then(this.$emit("deleted", this.project.id));
    },
    changeComplete() {
      axios
        .put(`http://localhost:3000/todos/${this.project.id}`, {
          title: "Creating gmail",
          details: "lorem ipsum lorem ipsum lorem ipsum",
          complete: !this.project.complete
        })
        .then(() => this.$emit("done", this.project.id));
    },
  },
};
</script>

<style scoped>
.task {
  border-left: 5px solid red !important;
  transition: all 0.3s;
}
.task.done {
  border-left: 5px solid green !important;
}

.icon {
  @apply mx-1 md:mx-2 text-[#fff] cursor-pointer hover:text-gray-400 transition scale-90 md:scale-105;
}

a{
  margin: 0px;
}
</style>