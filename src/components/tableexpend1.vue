<template>
  <div>

    <el-table :data="tableData" border>
      <el-table-column
        v-for="column in bindTableColumns"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
      >
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄",
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄",
      }
      ],
      tableColumns: [{
        prop: "date",
        label: "日期",
        show: true,
      },
      {
        prop: "name",
        label: "姓名",
        show: true,
      },
      {
        prop: "address",
        label: "地址",
        show: true,
      },
      ],
    };
  },
  computed: {
    bindTableColumns () {
        const str = JSON.stringify(this.tableData);
        console.log(str);
        const data1 = JSON.parse(str);
        console.log(data1);
      return this.tableColumns.filter((column) => column.show);
    }
  }
};

</script>
