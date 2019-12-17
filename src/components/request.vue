<template>
  <div class="hello">
    <el-button @click="doPost()" type="success">test</el-button>
    <el-button @click="doPostString()" type="success">字符串</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: {
        name: "lim59"
      },
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
  methods: {
    showB () {
      alert("hi");
    },
    doPost () {
      this.$axios({
        url: '/api/user',
        data: JSON.stringify(this.user),
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    doPostString () {
      this.$axios({
        url: '/api/posttest',
        data: JSON.stringify(this.user.name),
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
