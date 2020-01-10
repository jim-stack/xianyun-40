import {
  Message
} from "element-ui";

export default function ({
  $axios,
  redirect
}) {
  $axios.onError(err => {
    const {
      statusCode,
      message
    } = err.response.data;

<<<<<<< HEAD
    // 还未使用
    // if(statusCode === 401 || statusCode === 403){
    //     Message.warning({message: "请先登录"});
    //     redirect("/user/login");
    // }

    if (statusCode === 400) {
      Message.warning({
        message
      });
    }
  })
}
=======
export default (nuxt) => {
    // 拦截axios的错误
    nuxt.$axios.onError(res => {
        // response是js原生Error对象的属性
        const {statusCode, message} = res.response.data;

        if(statusCode === 400){
            // Message相当于this.$message
            Message.error(message)
        }

        if(statusCode === 401){
            // Message相当于this.$message
            Message.error("登录过期，跳转到登录页");
            // 跳转到登录页
            nuxt.redirect(200, "/user/login");
        }
    })
}
>>>>>>> c6fa98609e7e47c68750bc11ed17d3c07ac7f54e
