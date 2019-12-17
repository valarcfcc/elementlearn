<template>
  <div class="hello">
    <!-- <el-button @click="showB" type="success">test</el-button> -->
    <span>文本</span>
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br />
    <textarea v-model="message" placeholder="add multiple lines"></textarea>

    <div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <!-- <el-col span="12">
      <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
    </el-col>
    <el-col span="12">
      <DatePicker
        type="daterange"
        placement="bottom-end"
        placeholder="Select date"
        style="width: 200px"
      ></DatePicker>
    </el-col>-->
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
    <!-- <el-button type="success" @click="isNotEmpty()"></el-button> -->

    <request @show="change" :user="user"></request>
  </div>
</template>

<script>
import Request from "./request.vue"
export default {
  name: 'HelloWorld',
  data () {
    return {
      user: {
        name: "lim59"
      },
      msg: 'Welcome to Your Vue.js App',
      checkedNames: [],
      message: "",
      ruleForm: {
        testdate: "",
        value: ""
      },
      rules: {
        testdate: [{
          required: true,
          message: "请输入",
          trigger: ["blur"]
        }]
      }
    }
  },
  components: {
    Request
  },
  methods: {
    showB () {
      alert("hi");
    },
    isNotEmpty (obj) {
      obj = ses;
      alert(this.isNotEmptycomput(obj));
    },
    change () {
      alert("lim59 理想一哥！");
      this.user.name = "lim59 理想一哥！"

    },

    isNotEmptycomput (obj) {
      return typeof obj != 'undefined' && obj != null && obj != ""
    }
  },
  computed: {

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
