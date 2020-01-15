<template>
  <section class="container">
    <h2 class="hotel-title">
      <i>
        酒店
        <span class="el-icon-arrow-right"></span>
      </i>
      <i>南京市酒店预订</i>
    </h2>
    <SearchForm />
    <div class="quyu">
      <i>区域：</i>
      <span>全部</span>
      <span>全部</span>
      等43个地区
    </div>
  </section>
</template>

<script>
import SearchForm from "@/components/hotel/searchForm.vue";
export default {
  data() {
    return {
      input: ""
    };
  },
  components: {
    SearchForm
  },

  mounted() {
    this.$axios({
      url: "/hotels",
      params: {
        city: 74
      }
    }).then(res => {
      console.log(res);
    });
  }
};
</script>

<style scoped lang="less">
.hotel-title {
  font-size: 14px;
  color: #606266;
  cursor: text;
  font-weight: 200;
}
.container {
  width: 1000px;
  margin: 0px auto;
}
.quyu {
  margin-top: 20px;
}
</style>