<template>
  <div class="hello">
    <el-button @click="showB" type="success">test</el-button>
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <el-date-picker
      v-model="value1"
      value-format="yyyy-MM-dd HH:mm:ss"
      type="datetime"
      placeholder="选择日期时间"
    ></el-date-picker>
    <p>Date is: {{ value1 }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: "",
      value1: ''
    }
  },
  methods: {
    showB () {
      alert("hi");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
