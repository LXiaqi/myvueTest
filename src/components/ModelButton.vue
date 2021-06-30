<template>
    <button @click="modelOpen=true">弹出一个模态框</button>
    <teleport to='body'>
        <div v-if="modelOpen" class="model">
            <div>
                这是一个弹框
                我的父元素是body
                 <button @click="modelOpen = false">关闭</button>
            </div>
           
        </div>
    </teleport>
</template>

<script>
import {reactive, toRefs} from 'vue'
export default {
    setup() {
        const data = reactive({
            modelOpen:false
        })  
        return toRefs(data)
    }
}
</script>

<style  scoped>
    .model {
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        background: rgba(0, 0, 0, .5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .model div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: white;
        width: 800px;
        height: 500px;
        padding: 8px;
        border-radius: 8px;
    }

</style>>

