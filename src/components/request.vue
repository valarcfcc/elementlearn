<template>
  <div class="hello">
    <el-button @click="doPost()" type="success">test</el-button>
    <el-button @click="doPostString()" type="success">字符串</el-button>
    <el-button @click="show()" type="success">调用父组件方法</el-button>
    <span>{{ this.message }}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    user: Object
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // user: {
      //   name: "lim59"
      // },
    }
  },
  methods: {
    show () {
      console.log(123);
      this.$emit('show');
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

          alert(response.data);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    doPostString () {
      this.$axios({
        url: '/api/posttest',
        data: this.user.name,
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
