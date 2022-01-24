<template>
  <div style="width: 500px;margin: auto;height: 700px;background-color: honeydew; ">
    <el-form style="width: 325px;margin: auto;height: 325px;background-color: #fff; position: relative;top: 200px;text-align: center">
      <h3 class="loginTitle" style="padding: 10px">系统登录</h3>
      <el-input class="input-text" prefix-icon="el-icon-user-solid" placeholder="请输入用户名" clearable v-model="username" ></el-input>
      <el-input class="input-text" suffix-icon="el-icon-star-off" placeholder="请输入密码" show-password type="password" clearable v-model="password" ></el-input>
      <el-button class="input-text" size="normal" type="primary"  @click="submit()">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
import {
  login
} from '@/api/system'
export default {
  name: "login",
  data(){
    return {
      username:'',
      password:'',
      userToken:''
    }
  },
  methods:{

    submit(){

      //暂时这样写
      this.$router.push({
        path: `/home`,
      })
      // login({
      //   password: this.password,
      //   username: this.username,
      // }).then(res => {
      //   console.log(res.data);
      //   if(res.status==200){
      //     this.$store.commit('setToken','Bearer '+res.data.access_token);
      //     this.$router.push({
      //       path: `/home`,
      //     })
      //   };
      // })
    },

  }
}

</script>

<style scoped>
.input-text{
  width: 200px;
  margin: 5px;
}
</style>
