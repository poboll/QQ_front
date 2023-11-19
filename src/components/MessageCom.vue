<template>
    <!-- 消息界面 -->
    <div id="message" :style="{height:contentHeight}">
        <van-search v-model="value" shape="round" placeholder="搜索" />
        <ul class="ui-list ui-list-function ui-border-tb">
            <!-- v-for列表渲染，friendMessageList -->
            <li style="margin:0;" v-for="item in friendMessageList" :key="item.id">
                <van-swipe-cell style="width:100%;">
                    <van-cell center clickable :title="item.name" label="最后一条消息" :to="'/dialog/'+item.name">
                        <template #icon>
                            <van-image
                                round
                                width="50px"
                                height="50px"
                                :src="item.profile"
                                style="margin-right:10px;"/>
                        </template>
                        <template #right-icon>
                            <van-tag round type="primary" color="red">{{item.messagesCount}}</van-tag>
                        </template>
                    </van-cell>
                    <template #right>
                        <van-button square type="primary" text="置顶" style="height:100%;" />
                        <van-button square type="danger" text="删除" style="height:100%;" />
                    </template>
                </van-swipe-cell>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 消息界面的高
            contentHeight: window.innerHeight - 100 + "px",
            // 搜索框的文本内容
            value: "",
            // 好友消息列表
            friendMessageList: [
                {name: "拉菲", messagesCount: "99+", profile: require('../assets/images/profile_拉菲.jpg')},
                {name: "02", messagesCount: "1", profile: require('../assets/images/profile_02.jpg')},
                {name: "栗山未来", messagesCount: "", profile: require('../assets/images/profile_栗山未来.jpg')}
            ]
        };
    }
}
</script>

<style>

</style>