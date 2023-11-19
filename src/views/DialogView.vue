<template>
    <!-- 会话页面 -->
    <div id="dialog">
        <van-nav-bar :fixed="true" :placeholder="true" left-arrow @click-left="backToHomeMessage()">
            <template #right>
                <van-icon name="wap-nav" size="20" />
            </template>
            <template #title>
                {{name}}<br>
                <van-image
                    width="90"
                    height="10"
                    :src="require('@/assets/images/手机在线.png')" />
            </template>
        </van-nav-bar>
        <!-- 预留聊天会话内容，暂无时间实现 -->
        <div id="dialog_content"></div>
        <div id="dialog_bottombar">
            <div id="dialog_bottombar_inside">
                <van-field type="textarea" rows="1" :autosize="{maxHeight:100, minHeight:10}" v-model="message" style="border-radius:25px; padding:5px;" />
                <van-row>
                    <van-col span="4" style="text-align:center;">
                        <van-icon :name="require('@/assets/icon/icon_dialog_语音.png')" size="20" />
                    </van-col>
                    <van-col span="4" style="text-align:center;">
                        <van-icon :name="require('@/assets/icon/icon_dialog_图片.png')" size="20" />
                    </van-col>
                    <van-col span="4" style="text-align:center;">
                        <van-icon :name="require('@/assets/icon/icon_dialog_相机.png')" size="20" />
                    </van-col>
                    <van-col span="4" style="text-align:center;">
                        <van-icon :name="require('@/assets/icon/icon_dialog_红包.png')" size="20" />
                    </van-col>
                    <van-col span="4" style="text-align:center;">
                        <van-icon :name="require('@/assets/icon/icon_dialog_表情.png')" size="20" />
                    </van-col>
                    <van-col span="4" style="text-align:center;">
                        <van-icon :name="require('@/assets/icon/icon_dialog_更多.png')" size="20" />
                    </van-col>
                </van-row>
                <div id="dialog_bottombar_inside_funcrow">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: this.$route.params.name, //当前的聊天对象名字
            message: "" //正在输入的消息
        };
    },
    methods: {
        // 返回主页面消息界面
        backToHomeMessage() {
            this.$router.push('/home/message');
        },
    }
}
</script>

<style>
#dialog {
    --van-nav-bar-arrow-size: 20px;
    --van-nav-bar-icon-color: black;
    --van-nav-bar-title-text-color: black;
    --van-nav-bar-background-color: #EFF1FD;
}
#dialog .van-nav-bar__title {
    line-height: 16px;
}
#dialog_content {
    background-color: #EDEDF5;
}
#dialog_bottombar {
    height: 80px;
}
#dialog_bottombar_inside {
    position: fixed;
    bottom: 0px;
    width: 95%;
    padding: 8px 2.5% 5px;
    /* border-top: 1px solid #E4E5F1; */
    background-color: #EFF1FD;
}
#dialog_bottombar_inside .van-row {
    padding-top: 8px;
}
</style>