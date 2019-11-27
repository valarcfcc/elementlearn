<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-button @click="showB" type="success">test</el-button>
    <el-row>
      <el-col>
        <el-button v-on:click="say('hi')" type="success">{{ "Say hi" }}</el-button>
      </el-col>
      <el-col>
        <el-button v-on:click="say('what')" type="success">{{ "Say what" }}</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div v-on:click="three">
          <div v-on:click.stop="two">
            <button v-on:click="one" type="success">{{ "阻止单击事件继续传播" }}</button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div v-on:click="three">
          <div v-on:click.self="two">
            <button v-on:click="one" type="success">{{ "内部元素触发" }}</button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div v-on:click="three">
          <button v-on:click.capture="one" type="success">
            <div v-on:click="two">{{ "事件捕获模式" }}</div>
          </button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div v-on:click="three">
          <div v-on:click="two">
            <button v-on:click="one" type="success">{{ "链式传播" }}</button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-alert title="错误提示的文案" type="error"></el-alert>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    showB () {
      alert(<el-alert title="错误提示的文案" type="error"></el-alert>);
    },
    say: function (message) {
      alert(message)
    },
    one () {
      console.log("one");
    },
    two () {
      console.log("two");
    },
    three () {
      console.log("three");
    },
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) event.preventDefault()
      alert(message)
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
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
