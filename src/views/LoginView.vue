<template>
    <!-- 登录页面 -->
    <div id="login">
        <div id="login_error" @click="closeError()"></div>
        <img src="~@/assets/images/qq.png" width="200">
        <van-form @submit="login()">
            <van-cell-group inset>
                <van-field 
                    v-model="account"
                    name="account"
                    label="QQ号"
                    placeholder="请输入QQ号"
                    :rules="[{ required: true, message: '请输入QQ号' }]"/>
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="请输入密码"
                    :rules="[{ required: true, message: '请输入密码' }]"/>
            </van-cell-group>
            <div style="margin:50px;">
                <van-button round type="primary" native-type="submit">→</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            account: "", //账号
            password: "" //密码
        };
    },
    methods: {
        login() {
            // 账号和密码正确，跳转至主页面
            if(this.account == "123456" && this.password == "123456") {
                this.$router.push('/home/message');
            }
            else {
                // 顶部提示账号或密码错误
                document.getElementById('login_error').innerHTML = `
                <div class="ui-tooltips ui-tooltips-warn">
                    <div class="ui-tooltips-cnt ui-border-b">
                        <i></i>账号或密码错误，请重新登录。<a class="ui-icon-close"></a>
                    </div>
                </div>`;
            }
        },
        closeError(){
            document.getElementById('login_error').innerHTML = "";
        }
    }
}
</script>

<style>
#login {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    text-align: center;
}
#login_error{
    width: 100%;
    height: 46px;
}
</style>