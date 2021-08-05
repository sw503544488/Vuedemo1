<template>
  <div class="red">
    {{ n }}
    <button @click="add">+1</button>

  </div>
</template>
<script>
export default {
  props: ['message']
,
methods:{
    add(){
      this.n+=1
    }
}}

</script>
<style scoped>
.red {
  color: gray;
}
</style>