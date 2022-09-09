<template>
  <div
    class="header w-full h-24 bg-[#570a57b8] shadow-sm rounded-md flex justify-center items-center text-[#fff]">
    <router-link :to="{ name: 'Todos' }">Home</router-link>
    <router-link :to="{ name: 'NewTask' }">Add Task</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  text-decoration: none;
  font-size: 18px;
  margin: 0px 10px;
}

.header {
  position: relative;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .01);
  letter-spacing: 2px;
}
.header::after {
  position: absolute;
  content: "";
  top: 10px;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  transform: scale(-10px);
  filter: blur(15px);
  background: linear-gradient(to left,
      #ff5779,
      #e4428d,
      #c42da8,
      #9e16c3,
      #6501de,
      #9e16c3,
      #c42da8,
      #e4428d,
      #ff5779
    );
  background-size: 200% 200%;
  animation: animateglow 3s linear infinite;

}
@keyframes animateglow {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 200% 50%;
  }
  }
</style>