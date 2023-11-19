<template>
    <!-- 顶部栏 -->
    <div id="top_bar">
        <van-nav-bar :title="title_mess" :fixed="true" :placeholder="true" @click-left="this.$router.push('/side')">
            <template #left>
                &nbsp;
                <van-image
                    round
                    width="32px"
                    height="32px"
                    :src="require('../assets/images/my_profile.jpg')"/>
                &nbsp;
            </template>
            <template #right>
                <van-popover v-model:show="showPopover" :actions="actions" placement="bottom-end" :offset="[13, 8]">
                    <template #reference>
                        &nbsp;
                        <van-icon name="plus" color="white" size="15"/>
                        &nbsp;
                    </template>
                </van-popover>
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    props: ['title'],
    data() {
        return {
            title_mess: this.title,
            showPopover: false, //是否展示气泡弹出框，默认为“否”
            actions: [
                { text: '创建群聊', icon: 'friends-o' },
                { text: '加好友/群', icon: 'add-o' },
                { text: '扫一扫', icon: 'scan' },
                { text: '收付款', icon: 'balance-pay' }
                ]
        };
    },
    watch: {
        // 监听父组件传来的title数据，实时更新顶部栏标题
        title() {
            switch(this.title) {
                case 'message': this.title_mess = '消息'; break;
                case 'friends': this.title_mess = '联系人'; break;
                case 'discover': this.title_mess = '动态'; break;
            }
        }
    },
    // 实例挂载完成后，实时更新顶部栏标题
    mounted() {
        if(this.$route.path == '/home/message') {
            this.title_mess = '消息';
        }
        else if(this.$route.path == '/home/friends') {
            this.title_mess = '联系人';
        }
        else if(this.$route.path == '/home/discover') {
            this.title_mess = '动态';
        }
    }
}
</script>

<style>
#top_bar {
    --van-nav-bar-background-color: #12B8F6;
    --van-nav-bar-title-text-color: white;
}
.van-nav-bar__content {
    height: 50px;
}
</style>