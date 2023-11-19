<template>
    <!-- 主页面 -->
    <div id="home">
        <top-bar :title="topbar_title"/>
        <van-pull-refresh v-model="loading" loading-text="刷新中..." success-text="刷新成功" @refresh="onRefresh">
            <!-- router-view路由视图，根据路由展示消息、联系人、动态三个界面 -->
            <!-- keep-alive缓存路由视图，使得切换路由后，消息和联系人页面数据不变 -->
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </van-pull-refresh>
        <bottom-bar @setTitle="setTitle"/>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import BottomBar from '../components/BottomBar.vue'
export default {
    data() {
        return {
            loading: false, //是否在刷新中
            topbar_title: "消息" //顶部栏的标题，默认为“消息”
        };
    },
    methods: {
        // 刷新界面
        onRefresh() {
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        },
        // 从子组件BottomBar获取数据，设置顶部栏标题
        setTitle(data) {
            this.topbar_title = data;
        }
    },
    components: {
        TopBar,
        BottomBar
    }
}
</script>

<style>

</style>