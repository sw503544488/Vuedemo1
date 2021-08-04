<template>
  <div class="red">
    {{ message }}
    <button @click="add">+1</button>

  </div>
</template>
<script>
export default {
  props: ['message']
}
</script>
<style scoped>
.red {
  color: gray;
}
</style>