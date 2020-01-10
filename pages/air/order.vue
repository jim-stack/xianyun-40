<template>
<<<<<<< HEAD
  <div class="container">
    <el-row type="flex" justify="space-between">
      <!-- 订单表单 -->
      <OrderForm :data="infoData" @setAllPrice="setAllPrice" />

      <!-- 侧边栏 -->
      <OrderAside :data="infoData" :allPrice="allPrice" />
    </el-row>
  </div>
=======
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 订单表单 -->
            <OrderForm :data="infoData"/>

            <!-- 侧边栏 -->
            <orderAside :data="infoData"/>
        </el-row>
    </div>
>>>>>>> c6fa98609e7e47c68750bc11ed17d3c07ac7f54e
</template>

<script>
import OrderForm from "@/components/air/orderForm.vue";
<<<<<<< HEAD
import OrderAside from "@/components/air/OrderAside.vue";
export default {
  data() {
    return {
      infoData: {
        insurances: [],
        seat_infos: {}
      },
      allPrice: 0
    };
  },
  components: {
    OrderForm,
    orderAside
  },
  mounted() {
    const { query } = this.$route;

    this.$axios({
      url: `airs/${query.id}`,
      params: {
        seat_xid: query.seat_xid
      }
    }).then(res => {
      this.infoData = res.data;
    });
  },
  methods: {
    setAllPrice(price) {
      this.allPrice = price;
    }
  }
};
</script>

<style scoped lang="less">
.contaniner {
  width: 1000px;
  margin: 20px auto;
}

.aside {
  width: 350px;
  height: fit-content;
  border: 1px #ddd solid;
}
=======
import orderAside from "@/components/air/orderAside.vue";
export default {
    data(){
        return {
            // 当前选中的机票的信息
            infoData: {
                // 座位的列表
                seat_infos: {}
            }
        }
    },
    components: {
        OrderForm,
        orderAside
    },

    mounted(){
        // id是动态参数
        const {id, seat_xid} = this.$route.query;

        this.$axios({
            url: "/airs/" + id,
            params: {
                seat_xid
            }
        }).then(res => {
            this.infoData = res.data;
        })
    }
}
</script>

<style lang="less" scoped>
    .container{
        width:1000px;
        margin:20px auto;
    }
    
    /*aside*/
    .aside{
        width: 350px;
        height: fit-content;
        border:1px #ddd solid;
    }
>>>>>>> c6fa98609e7e47c68750bc11ed17d3c07ac7f54e
</style>