// import Vue from 'vue';
const Vue = window.Vue
Vue.config.productionTip = false
// import Demo from "./Demo";
let id = 0
const creatUser = (name, gender) => {
  id += 1
  return {id: id, name: name, gender: gender}
}

new Vue({
  data() {
    return {
      users: [
        creatUser('小白', '男'),
        creatUser('小红', '女'),
        creatUser('小明', '男'),
        creatUser('小绿', '女'),


      ],
      gender: ''
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    displayUsers: function () {
      const hash = {
        male: '男',
        female: '女'
      }
      const {users, gender} = this
      if (gender === "") {
        return users;
      } else if (typeof gender === 'string') {
        return users.filter(u => u.gender === hash[gender])
      }
    },
  }
  ,
  methods: {
    setGender(string) {
      console.log(string)
      this.gender = string
    }
  },
  template: `
    <div>
    <div>
      <button @click="setGender('')">全部</button>
      <button @click="setGender('male')">男</button>
      <button @click="setGender('female')">女</button>
      <ul>
        <li v-for="(u,index) in displayUsers" :key="index">{{ u.name }}-{{ u.gender }}</li>
      </ul>
    </div>
    </div>

  `
}).$mount('.frank')

