<template>
  <div class="hello">
    <el-button @click="doPost()" type="success">test</el-button>
    <el-button @click="doPostString()" type="success">字符串</el-button>
    <el-button @click="show()" type="success">调用父组件方法</el-button>
    <span>{{ this.reqData.total }}</span>
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
      json: {
        id: "123",
        labelname: "",
        count: "",
        recommend: "",
        fans: ""
      },
      req: {
        data: "",
        pageNum: 1,
        pageSize: 1,
        sort: ""
      },
      reqData: {
        list: [],
        total: 1
      }
    }
  },
  beforeMount () {
    this.doPost()

  },
  methods: {
    show () {
      console.log(123);
      this.$emit('show');
    },
    doPost () {
      this.req.data = JSON.stringify(this.json);
      console.log(JSON.stringify(this.req));
      this.$axios({
        url: '/api/tbLabel/page',
        data: this.req,
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
      })
        .then(function (response) {
          let abc = JSON.parse(response.data.data);
          console.log(abc);
          console.log(abc.total);
          this.reqData.total = 3;


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
