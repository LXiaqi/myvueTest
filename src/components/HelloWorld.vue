<template>
  <h1>{{ msg }}</h1>
  <button @click="counter++">count is: {{counter }}</button>
  <p>{{ counter }}</p>
  <p>{{ doubleCounter }}</p>
  <p>{{ msg2 }}</p>
  <p ref="desc"></p>
  <!-- Teleport：ModelButton -->
  <ModelButton/>
</template>

<script>
import { computed, onMounted, onUnmounted, reactive, ref, toRefs, watch } from "vue";
import ModelButton from './ModelButton.vue'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    ModelButton
  },
  setup() {
    const {counter,doubleCounter} = userCounter()
    // 单值响应式
    const msg2 = ref('你好，vue3')
    // 使用元素引用
    const desc = setDesc(counter)
    return { counter,doubleCounter,msg2,desc};
  },
};
// counter 相关
function userCounter() {
    const data = reactive({
      counter: 1,
      doubleCounter: computed(() => data.counter * 2),
    });
    let timer;
    onMounted(() => {
      timer = setInterval(() => {
        data.counter++;
      }, 1000);
    });
    onUnmounted(() => {
      clearInterval(timer);
    });
    return toRefs(data)
  }

function setDesc(counter) {
  const desc = ref(null)
  watch(counter,(val,oldval) => {
    const p = desc.value
    p.textContent = `counter change from ${oldval} to ${val}`
  })
  return desc
} 
</script>
