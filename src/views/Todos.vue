<template>
  <div class="mt-5">
    <div class="grid md:gr h-auto rounded-md mt-4 p-4">
      <SingleTodo v-for="(item, index) in Tasks" :key="index" :project="item" @deleted="deleted" />
    </div>
  </div>
</template>

<script>

import SingleTodo from '../components/SingleTodo.vue';

export default {
    data: () => ({
      Tasks : []
    }),
    components:{
        SingleTodo
    },
    methods:{
      deleted(taskId){
        this.Tasks = this.Tasks.filter(item => item.id !== taskId)
      }
    },
    mounted(){
      fetch('http://localhost:3000/todos')
        .then(res => res.json())
        .then(data => this.Tasks = data)
    }
}
</script>

<style>
</style>