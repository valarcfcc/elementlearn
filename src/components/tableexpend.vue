<template>
  <div>
    <h3>前端分页</h3>
    <div class="table">
      <el-table :data="nowPageList" width="100%" :height="400">
        <el-table-column
          v-for="(info, index) in header"
          header-align="center"
          :key="index"
          :property="info.key"
          :label="info.title"
          :minWidth="info.width"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
      </el-table>
      <el-pagination
        small
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="total"
        @prev-click="prevPage"
        @next-click="nextPage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableDataAll: [
        { name: "老李", age: "20" },
        { name: "老李", age: "21" },
        { name: "老李", age: "22" },
        { name: "老李", age: "23" },
        { name: "老李", age: "24" },
        { name: "老李", age: "25" },
        { name: "老李", age: "33" },
        { name: "老李", age: "34" },
      ],
      header: [
        {
          "title": "名字",
          "key": "name"
        },
        {
          "title": "年龄",
          "key": "age"
        },
      ],
      currentPage: 1,
      pageSize: 5,
      nowPage: {
        currentPage: this.currentPage,
        pageSize: this.pageSize
      },
      total: 50,
      nowPageList: [],
    }
  },
  watch: {
    nowPage (newVal, oldVal) {
      this.currentPage = newVal.currentPage
      this.pageSize = newVal.pageSize
    },
  },
  created () {
    this.nowPageList = this.tableDataAll.slice(0, 5);
  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val
      this.changePage();
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.changePage();
    },
    //上一页
    prevPage () {
      if (this.currentPage == 1) {
        return false;
      } else {
        this.currentPage--;
        this.changePage();
      }
    },
    // 下一页
    nextPage () {
      if (this.currentPage == this.totalPage) {
        return false;
      } else {
        this.currentPage++;
        this.changePage();
      }
    },
    changePage () {
      let obj = {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
      }
      let currentPage = obj.currentPage
      let pageSize = obj.pageSize
      let data = JSON.parse(JSON.stringify(this.tableDataAll))
      let begin = (currentPage - 1) * pageSize;
      let end = currentPage * pageSize;
      this.nowPageList = data.slice(begin, end);
    },
  }
}

</script>
