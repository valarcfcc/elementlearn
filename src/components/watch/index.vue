<template>
  <div>
    <el-row>
      <el-button type="success">按钮</el-button>
      <el-input v-model="user.name" clearable></el-input>
    </el-row>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld.vue'
export default {
  data () {
    return {
      user: {
        name: ""
      }
    }
  },
  beforeMount: {
  },
  components: {
    // HelloWorld
  },
  methods: {
    change () {
    }
  },
  watch: {
    user: {
      handler (newValue, oldValue) {
        console.log(newValue)
      },
      deep: true
    },
    "user.name" (newValue, oldValue) {
      alert(newValue + '   ' + oldValue)
    }
  }
}
</script>

<style scoped>
</style>
