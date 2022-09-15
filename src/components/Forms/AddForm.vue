<template>
  <form
    @submit.prevent="craeteTask"
    class="
      w-2/5
      bg-[#ffffff16]
      text-[#fff]
      rounded-xl
      py-10
      px-20
      flex flex-col
      justify-center
      shadow-md
    "
  >
    <div class="row my-5">
      <label>Title : </label>
      <input type="text" class="h-12" v-model="newTask.title" />
    </div>
    <div class="row my-3">
      <label>Details : </label>
      <textarea class="h-24" v-model="newTask.details"></textarea>
    </div>
    <button class="my-5" type="submit">Create New</button>
  </form>
</template>

<script>
import http from '../../config/http';

export default {
  data: () => ({
    newTask: {
      title: "",
      details: "",
      complete: false,
    },
  }),
  methods: {
    craeteTask() {
      if (this.newTask.title === "" && this.newTask.details === "") {
        alert("fill the input");
      } 
      else {
        http.post("http://localhost:3000/todos" ,this.newTask)
        .then(() => this.$router.push('/'))
        .catch((err) => console.log(err));
      }
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
}

input,
textarea {
  width: 100%;
  border-radius: 4px;
  background: transparent;
  border: 2px solid #a91079;
  box-shadow: 0px 0px 5px #a91079;
  color: white;
  padding: 8px !important;
  transition: all 0.3s;
}

input:focus,
textarea:focus {
  outline: none;
  box-shadow: 0px 0px 25px #840b5d;
}

button {
  padding: 10px 15px;
  background-color: #570a57;
  transition: all 0.3s;
  position: relative;
  border: 2px solid #a91079;
  @apply rounded-md w-1/2 mx-auto bg-transparent overflow-hidden hover:scale-105;
}

button::after {
  content: "";
  width: 100%;
  height: 100%;
  background-color: #a91079b4;
  position: absolute;
  top: 0;
  left: -200%;
  z-index: -1;
  transition: all 0.4s;
  transform: rotate(30deg);
  outline: 10px solid #a91079;
}
button:hover:after {
  left: 0;
}
</style>