<template>
  <div class="mt-5 flex justify-between">
    <div class="w-3/4 p-4">
      <div class="w-full h-auto">
        <SearchBar :sTasks="Tasks" @result="search" />
      </div>
      <hr class="my-4 border-[#a91079]" />
      <div class="w-full grid md:grid-cols-2 gap-4">
        <div v-for="item in clone" :key="item.index">
          <SingleTodo :project="item" @deleted="deleted" @done="done" />
        </div>
      </div>
    </div>
    <div class="w-1/4 h-screen p-4">
      <SideBar />
    </div>
  </div>
</template>

<script>
import SingleTodo from "../components/Todos/SingleTodo.vue";
import SideBar from "../components/Todos/Sidebar.vue";
import SearchBar from "../components/Todos/SearchBar.vue";
import axios from "axios";

export default {
  data: () => ({
    Tasks: [],
    clone: [],
  }),
  components: {
    SingleTodo,
    SideBar,
    SearchBar,
  },
  methods: {
    deleted(taskId) {
      this.Tasks = this.Tasks.filter((item) => item.id !== taskId);
    },
    done(taskId) {
      const el = this.Tasks.find((item) => {
        return item.id == taskId;
      });
      el.complete = !el.complete;
    },
    search(result) {
      this.clone = result;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/todos")
      .then((res) => {this.Tasks = res.data , this.clone = this.Tasks})
  },
};
</script>

<style>
</style>