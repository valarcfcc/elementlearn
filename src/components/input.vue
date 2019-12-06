<template>
  <div class="hello">
    <el-button @click="showB" type="success">test</el-button>
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <el-form :model="ruleForm" :inline="true" :rules="rules" label-width="150px">
      <el-row>
        <el-form-item label="时间" prop="testdate">
          <el-date-picker
            v-model="ruleForm.testdate"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            format="yyyy-MM-dd HH:mm:ss"
            style="width: 200px"
            placeholder="请选择时间"
          ></el-date-picker>
        </el-form-item>
      </el-row>
    </el-form>
    <el-date-picker
      v-model="ruleForm.testdate"
      value-format="yyyy-MM-dd HH:mm:ss"
      type="datetime"
      placeholder="选择日期时间"
    ></el-date-picker>
    <p>Date is: {{ ruleForm.testdate }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: "",
      ruleForm: {
        testdate: "",
        value: ""
      },
      rules: {
        testdate: [
          {
            required: true,
            message: "请输入",
            trigger: ["blur"]
          }
        ]
      }
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
