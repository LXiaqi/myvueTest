<template>
  <h1>{{ msg }}</h1>
  <button @click="counter++">count is: {{counter }}</button>
  <p>{{ counter }}</p>
  <p>{{ doubleCounter }}</p>
  <p>{{ msg2 }}</p>
  <p ref="desc"></p>
  <!-- Teleport：ModelButton -->
  <ModelButton/>
  <Emits @myclick="onEmit()" />
  <!-- 实例方法定义组件 -->
  <Comp></Comp>
</template>

<script>
import { computed, onMounted, onUnmounted, reactive, ref, toRefs, watch } from "vue";
import ModelButton from './ModelButton.vue'
import Emits from './Emits.vue'

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    ModelButton,Emits
  },
  setup() {
    const {counter,doubleCounter} = userCounter()
    // 单值响应式
    const msg2 = ref('你好，vue3')
    // 使用元素引用
    const desc = setDesc(counter)
    function onEmit() {
      console.log('click me')
    }
    return { counter,doubleCounter,msg2,desc,onEmit};
  },
  methods: {
    
  }
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
