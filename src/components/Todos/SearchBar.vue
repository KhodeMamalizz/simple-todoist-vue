<template>
  <div class="w-full flex justify-end">
    <div class="input-group w-full md:w-1/3 h-12 flex justify-between">
      <input
        type="text"
        placeholder="Task Title..."
        class="w-full"
        @keyup="search"
        ref="input"
      />
      <button class="mx-2 fa-solid fa-magnifying-glass"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sTasks"],
  methods: {
    search() {
      const clone = [...this.sTasks];
      const result = clone.filter((item) =>
        item.title.toLowerCase().startsWith(this.$refs.input.value.toLowerCase())
      );

      this.$emit("result", result);
    },
  },
};
</script>

<style scoped>
input {
  background: transparent;
  outline: none;
}

.input-group {
  border-radius: 4px;
  border: 2px solid #a91079;
  box-shadow: 0px 0px 5px #a91079;
  color: white;
  padding: 8px !important;
  transition: all 0.3s;
}
.input-group:focus {
  box-shadow: 0px 0px 25px #840b5d;
}
</style>