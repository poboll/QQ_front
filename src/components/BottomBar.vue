<template>
    <!-- 底部栏 -->
    <div id="bottom_bar">
        <van-tabbar v-model="active" :placeholder="true" @change="onChange">
            <van-tabbar-item name="message" icon="chat-o" to="/home/message" replace>消息</van-tabbar-item>
            <van-tabbar-item name="friends" icon="friends-o" to="/home/friends" replace>联系人</van-tabbar-item>
            <van-tabbar-item name="discover" icon="underway-o" to="/home/discover" replace>动态</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 'message' //当前选中标签的名称，默认为messge
        };
    },
    methods: {
        // 切换标签，发出setTitle事件并携带active数据，父组件HomeView将监听该事件
        onChange() {
            this.$emit('setTitle', this.active);
        }
    },
    // 实例挂载完成后，实时更新底部栏当前选中标签
    mounted() {
        if(this.$route.path == '/home/message') {
            this.active = 'message';
        }
        else if(this.$route.path == '/home/friends') {
            this.active = 'friends';
        }
        else if(this.$route.path == '/home/discover') {
            this.active = 'discover';
        }
    }
}
</script>

<style>

</style>