<template>
<<<<<<< HEAD
  <div class="main">
    <div class="air-column">
      <h2>乘机人</h2>
      <el-form class="member-info">
        <div class="member-info-item" v-for="(item,index) in users" :key="index">
          <el-form-item label="乘机人类型">
            <el-input placeholder="姓名" v-model="item.username" class="input-with-select">
              <el-select slot="prepend" value="1" placeholder="请选择">
                <el-option label="成人" value="1"></el-option>
              </el-select>
            </el-input>
          </el-form-item>

          <input type="hidden" :value="allPrice" />

          <el-form-item label="证件类型">
            <el-input placeholder="证件号码" v-model="item.id" class="input-with-select">
              <el-select slot="prepend" value="1" placeholder="请选择">
                <el-option label="身份证" value="1" :checked="true"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <!-- 移除乘机人的按钮 -->
          <span class="delete-user" @click="handleDeleteUser(index)">-</span>
        </div>
      </el-form>

      <el-button class="add-member" type="primary" @click="handleAddUsers">添加乘机人</el-button>
    </div>

    <div class="air-column">
      <h2>保险</h2>
      <div>
        <div class="insurance-item" v-for="(item,index) in data.insurances" :key="index">
          <el-checkbox
            :label="`${item.type}：￥${item.price}/份×${users.length}  最高赔付${item.compensation}`"
            @change="handleInsurance(item.id)"
            border
          ></el-checkbox>
        </div>
      </div>
    </div>

    <div class="air-column">
      <h2>联系人</h2>
      <div class="contact">
        <el-form label-width="60px">
          <el-form-item label="姓名">
            <el-input v-model="contactName"></el-input>
          </el-form-item>

          <el-form-item label="手机">
            <el-input placeholder="请输入内容" v-model="contactPhone">
              <template slot="append">
                <el-button @click="handleSendCaptcha">发送验证码</el-button>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="验证码">
            <el-input v-model="captcha"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="warning" class="submit" @click="handleSubmit">提交订单</el-button>
      </div>
    </div>
  </div>
=======
    <div class="main">
        <div class="air-column">
            <h2>乘机人</h2>
            <el-form class="member-info">
                <!-- 循环出多个的乘机人 -->
                <div class="member-info-item" 
                v-for="(item, index) in users"
                :key="index">

                    <el-form-item label="乘机人类型">
                        <el-input placeholder="姓名" class="input-with-select" v-model="item.username">
                            <el-select 
                            slot="prepend" 
                            value="1" 
                            placeholder="请选择">
                                <el-option label="成人" value="1"></el-option>
                            </el-select>
                        </el-input>
                    </el-form-item>

                    <el-form-item label="证件类型">
                        <el-input placeholder="证件号码"  class="input-with-select" v-model="item.id">
                            <el-select 
                            slot="prepend" 
                            value="1"           
                            placeholder="请选择">
                                <el-option label="身份证" value="1" :checked="true"></el-option>
                            </el-select>
                        </el-input>
                    </el-form-item>

                    <span class="delete-user" @click="handleDeleteUser(index)">-</span>
                </div>
            </el-form>

            <el-button class="add-member" type='primary' @click="handleAddUsers">添加乘机人</el-button>
        </div>

        <div class="air-column">
            <h2>保险</h2>
            <div>
                <!-- 循环渲染保险的数据 -->
                <div class="insurance-item" 
                v-for="(item, index) in data.insurances"
                :key="index">
                    <el-checkbox 
                    :label="`${item.type}：￥${item.price}/份×1  最高赔付${item.compensation}`" 
                    border
                    @change="handleInsurances(item.id)">
                    </el-checkbox> 
                </div>
            </div>
        </div>

        <div class="air-column">
            <h2>联系人</h2>
            <div class="contact">
                <el-form label-width="60px">
                    <el-form-item label="姓名">
                        <el-input v-model="contactName"></el-input>
                    </el-form-item>

                    <el-form-item label="手机">
                        <el-input placeholder="请输入内容" v-model="contactPhone">
                            <template slot="append">
                            <el-button @click="handleSendCaptcha">发送验证码</el-button>
                            </template>
                        </el-input>
                    </el-form-item>

                    <el-form-item label="验证码">
                        <el-input v-model="captcha"></el-input>
                    </el-form-item>
                </el-form>   
                <el-button type="warning" class="submit" @click="handleSubmit">提交订单</el-button>
            </div>
        </div>
        <span>{{allPrice}}</span>
    </div>
>>>>>>> c6fa98609e7e47c68750bc11ed17d3c07ac7f54e
</template>

<script>
export default {
<<<<<<< HEAD
  data() {
    return {
      users: [
        {
          username: "",
          id: ""
        }
      ],

      insurances: [],
      contactName: "",
      contactPhone: "",
      captcha: "000000",
      invoice: false
    };
  },
  computed: {
    // 计算总价格
    allPrice() {
      console.log(123);
      let price = 0;
      let len = this.users.length;

      price += this.data.seat_infos.org_settle_price * len;

      this.insurances.forEach(v => {
        price += this.data.insurances[v - 1].price * len;
      });

      price += this.data.airport_tax_audlet * len;

      // 触发设置总金额事件
      this.$emit("setAllPrice", price);

      return price;
    }
  },
  props: {
    // 接受机票信息
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    // 添加乘机人
    handleAddUsers() {
      this.users = [
        ...this.users,
        {
          username: "",
          id: ""
        }
      ];
    },

    // 移除乘机人
    handleDeleteUser(index) {
      this.users.splice(index, 1);
    },

    //选择保险
    handleInsurance(id) {
      if (this.insurances.indexOf(id) > -1) {
        let arr = this.insurances.slice(0);
        arr.splice(this.insurances.indexOf(id), 1);
        this.insurances = arr;
      } else {
        this.insurances = [...new Set([...this.insurances, id])];
      }
    },

    // 发送手机验证码
    handleSendCaptcha() {
      if (!this.contactPhone) {
        this.$confirm("手机号码不能为空", "提示", {
          confirmButtonText: "确定",
          showCancelButton: false,
          type: "warning"
        });
        return;
      }

      if (this.contactPhone.length !== 11) {
        this.$confirm("手机号码格式错误", "提示", {
          confirmButtonText: "确定",
          showCancelButton: false,
          type: "warning"
        });
        return;
      }

      this.$axios({
        url: `/captchas`,
        method: "POST",
        data: {
          tel: this.contactPhone
        }
      }).then(res => {
        const { code } = res.data;
        this.$confirm(`模拟手机验证码为：${code}`, "提示", {
          confirmButtonText: "确定",
          showCancelButton: false,
          type: "warning"
        });
      });
    },
    // 提交订单
    handleSubmit() {
      const orderData = {
        users: this.users,
        insurances: this.insurances,
        contactName: this.contactName,
        contactPhone: this.contactPhone,
        invoice: this.invoice,
        captcha: this.captcha,
        seat_xid: this.data.seat_info.seat_xid,
        air: this.data.id
      };
      const {
        user: { userInfo }
      } = this.$store.state;
      this.$message({
        message: "正在生成订单，请稍后！",
        type: "success"
      });

      this.$axios({
        url: `/airorders`,
        method: "POST",
        data: orderData,
        headers: {
          Authorization: `Bearer ${userInfo.token || "NO TOKEN"}`
        }
      })
        .then(res => {
          // 跳转到付款页面
          this.$router.push({
            path: "/air/pay"
          });
        })
        .cautch(err => {
          const { message } = err.response.data;
          // 警告提示
          this.$confirm(message, "提示", {
            confirmButtonText: "确定",
            showCancelButton: false,
            type: "warning"
          });
        });
    }
  }
};
</script>

<style scoped lang="less">
.air-column {
  border-bottom: 1px #ddd dashed;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.air-column h2 {
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: normal;
}

/deep/ .el-select .el-input {
  width: 130px;
}

.input-with-select {
  width: 590px;
}

.input-with-select /deep/ .el-input-group__prepend {
  background-color: #fff;
}
.member-info /deep/ .el-form-item {
  margin-bottom: 0;
}

.member-info-item {
  border-bottom: 1px #eee dashed;
  padding-bottom: 20px;
  position: relative;

  &:first-child {
    .delete-user {
      display: none;
    }
  }
}

.add-member {
  margin-top: 20px;
}

.delete-user {
  display: block;
  background: #ddd;
  width: 16px;
  height: 16px;
  font-size: 14px;
  text-align: center;
  line-height: 16px;
  color: #fff;
  cursor: pointer;
  border-radius: 50px;
  position: absolute;
  right: -30px;
  top: 50%;
}

.insurance {
  > div {
    margin-top: 10px;
  }
}

.insurance-item {
  margin-bottom: 20px;
}

.contact {
  /deep/ .el-input {
    width: 50%;
  }
}

.submit {
  margin: 50px auto;
  display: block;
  width: 250px;
  height: 50px;
}
=======
    data(){
        return {
            // 乘机人的列表初始化时候存在一个
            users: [{
                username: "",
                id: ""
            }],
            insurances: [], // 保险id
            contactName: "",
            contactPhone: "",
            captcha: "",
            invoice: false,
            seat_xid: "", // 座位的id
            air: ""       // 航班的id
        }
    },

    props: {
        // 组件接受父组件传递的机票的数据信息
        data: {
            type: Object,
            default(){return {}}
        }
    },

    computed: {
        // 计算总价格。总价格展示在侧边栏的组件
        allPrice(){
            let price = 0;
            
            if(!this.data.seat_infos.org_settle_price) return;

            // 机票的单价
            price += this.data.seat_infos.org_settle_price;
            // 燃油费
            price += this.data.airport_tax_audlet;
            // 保险
            price += this.insurances.length * 30;
            // 根据乘机人的数量翻倍
            price *= this.users.length;
            // 传递给store
            this.$store.commit("air/setAllPrice", price);

            return "";
        }
    },

    methods: {
        // 添加乘机人
        handleAddUsers(){
            this.users.push({
                username: "",
                id: "",
            })
        },
        
        // 移除乘机人
        handleDeleteUser(index){
            this.users.splice(index, 1);
        },

        // 处理保险id
        handleInsurances(id){
            // 判断数组中有没有该id
            const index = this.insurances.indexOf(id);

            // 有的话删除掉该id
            if(index > -1){
                this.insurances.splice(index, 1);
            }else{
                // 没有的话添加
                this.insurances.push(id)
            }            
        },
        
        // 发送手机验证码
        handleSendCaptcha(){
            // 手机号码不能为空
            if(!this.contactPhone) {
                this.$message.error("手机号码不能为空");
                return;
            };

            // 调用actions的发送手机验证码的接口
            this.$store.dispatch("user/sendCaptcha", this.contactPhone).then(res => {
                this.$message.success("手机验证码发送成功：000000")
            })
        },

        // 提交订单
        handleSubmit(){
            // 提交给创建订单接口的参数
            const data = {
                users: this.users,
                insurances: this.insurances, // 保险id
                contactName: this.contactName,
                contactPhone: this.contactPhone,
                captcha: this.captcha,
                invoice: false,
                seat_xid: this.$route.query.seat_xid, // 座位的id
                air: this.$route.query.id       // 航班的id
            }

            // 创建订单接口
            this.$axios({
                url: "/airorders",
                method: 'POST',
                headers: {
                    // Bearer是token字符串前面必须要声明的，后面加上空格，再连接上token
                    Authorization: "Bearer " + this.$store.state.user.userInfo.token
                },
                data
            }).then(res => {
                // 订单的id
                const {id} = res.data.data;
                // 跳转到付款页
                this.$router.push({
                    path: "/air/pay",
                    query: {
                        id
                    }
                })
            })
        }
    }
}
</script>

<style scoped lang="less">
    .air-column{
        border-bottom:1px #ddd dashed;
        padding-bottom: 20px;   
        margin-bottom: 20px;
    }

    .air-column h2{
        margin-bottom: 20px;
        font-size: 22px;
        font-weight: normal;
    }

    /deep/ .el-select .el-input {
        width: 130px;
    }

    .input-with-select{
        width:590px;
    }

    .input-with-select /deep/  .el-input-group__prepend {
        background-color: #fff;
    }
    .member-info /deep/ .el-form-item{
        margin-bottom:0;
    }

    .member-info-item{
        border-bottom:1px #eee dashed;
        padding-bottom: 20px;
        position: relative;

        &:first-child{
            .delete-user{
                display: none;
            }
        }
    }

    .add-member{
        margin-top:20px;
    }

    .delete-user{
        display: block;
        background:#ddd;
        width:16px;
        height:16px;
        font-size:14px;
        text-align: center;
        line-height: 16px;
        color:#fff;
        cursor: pointer;
        border-radius: 50px;
        position:absolute;
        right:-30px;
        top:50%;
    }

    .insurance{
        > div{
            margin-top:10px;
        }
    }

    .insurance-item{
        margin-bottom: 20px;
    }

    .contact{
        /deep/ .el-input{
            width:50%;
        }
    }

    .submit{
        margin: 50px auto;
        display: block;
        width:250px;
        height:50px;
    }
>>>>>>> c6fa98609e7e47c68750bc11ed17d3c07ac7f54e
</style>