<template>
  <div @click="$emit('myclick')">
      Emits事件
  </div>
</template>
<script>
export default {
    emits:['myclick'],
    setup() {
        return
    }
}
</script>
<style lang="">
    
</style>