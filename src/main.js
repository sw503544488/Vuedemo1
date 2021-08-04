const Vue = window.Vue
Vue.config.productionTip = false
import Demo from "./Demo";

new Vue({
    data: {
        visible: true
    }, template: `
    <div class="frank">
    {{ n }}
    <button @click='add'>
      +1
    </button>
    <hr>
    </div>
    `,
    created() {
        console.log('实例出现在内存中')
    },
    mounted() {
        console.log('实例出现在页面中')
    },
    updated() {
        console.log('更新了')
    },
    methods: {
        add() {
            this.n += 1
        }
    }

}).$mount('#frank')

new Vue({
    data: {visible: true},
    components: {Demo},
    template: `
      <div>
      <button @click="toggle" v-if="visible===true">toogle</button>
      <hr>
      <Demo message="你好props"/>
      </div>
    `,
    methods: {
        toggle() {
            this.visible = !this.visible
        }
    }, destroyed() {
        console.log('被吹毁')
    }
}).$mount('.app')