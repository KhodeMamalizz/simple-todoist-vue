<template>
  <div class="mt-5">
    <div class="grid md:grid-cols-2 gap-4 h-auto rounded-md mt-4 p-4">
      <div v-for="item in Tasks" :key="item.index">
        <SingleTodo :project="item" @deleted="deleted" @done="done"/>
      </div>
    </div>
  </div>
</template>

<script>
import SingleTodo from "../components/SingleTodo.vue";
import axios from 'axios';

export default {
  data: () => ({
    Tasks: [],
  }),
  components: {
    SingleTodo,
  },
  methods: {
    deleted(taskId) {
      this.Tasks = this.Tasks.filter((item) => item.id !== taskId);
    },
    done(taskId){
      const el = this.Tasks.find(item => {
        return item.id == taskId});
      el.complete = !el.complete
    }
  },
  mounted() {
    axios.get("http://localhost:3000/todos")
      .then((res) => this.Tasks = res.data)
  },
};
</script>

<style>
</style>