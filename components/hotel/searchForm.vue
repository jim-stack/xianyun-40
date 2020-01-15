<template>
  <el-row class="hotel-title">
    <div>
      <div class="grid-content bg-purple">
        <el-input v-model="input" placeholder="目的地"></el-input>
      </div>
    </div>
    <div class="aa">
      <div class="block">
        <!-- <span class="demonstration"></span> -->
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="-"
          start-placeholder="入住日期"
          end-placeholder="离房日期"
        ></el-date-picker>
      </div>
    </div>
    <div>
      <el-input placeholder="人数未定" suffix-icon="el-icon-user" v-model="input1"></el-input>
    </div>
    <div class="jiage">
      <el-button type="primary">查看价格</el-button>
    </div>
  </el-row>
</template>

<script>
import SearchForm from "@/components/hotel/searchForm.vue";
export default {
  data() {
    return {
      input: "",
      input1: "",
      value1: ""
    };
    components: {
      SearchForm;
    }
  }
};
</script>

<style scoped lang="less">
.hotel-title {
  display: flex;
}
// .el-row {
//   margin-bottom: 20px;
//   &:last-child {
//     margin-bottom: 0;
//   }
// }
// .el-col {
//   border-radius: 4px;
// }
// .bg-purple-dark {
//   background: #99a9bf;
// }
// .bg-purple {
//   background: #d3dce6;
//   margin-right: 15px;
//   width: 100%;
// }
.aa {
  margin: 0px 15px;
  // width: 100%;
}
// .el-date-editor {
//   margin: 0px 15px;
//   width: 100%;
// }
.el-input--suffix {
  // margin-left: 15px;
  width: 100%;
}
.jiage {
  margin-left: 15px;
}
// .bg-purple-light {
//   background: #e5e9f2;
// }
// .grid-content {
//   border-radius: 4px;
//   min-height: 36px;
// }
// .row-bg {
//   padding: 10px 0;
//   background-color: #f9fafc;
// }
</style>