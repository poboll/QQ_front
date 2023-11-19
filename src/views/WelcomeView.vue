<template>
    <!-- 欢迎页面 -->
    <div id="welcome">
        <img src="~@/assets/images/welcome_qq.png" alt="QQ_Welcome_logo" :style="imgStyle">
    </div>
</template>

<script>
export default {
    data() {
        return {
            // QQ_logo图片的css样式，根据页面大小动态设置图片大小
            imgStyle: {
                width: window.innerHeight * 0.4 + "px",
                marginTop: (window.innerHeight - window.innerHeight * 0.4) / 2 + "px",
            }
        };
    },
    created() {
        // 3秒后跳转到登录页面
        setTimeout(() => {this.$router.push('/login');}, 3000);
    }
}
</script>

<style>
#welcome {
    background-color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    text-align: center;
}
</style>