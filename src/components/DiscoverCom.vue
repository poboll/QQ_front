<template>
    <!-- 动态界面 -->
    <div id="discover">
        <!-- v-for列表渲染，infoList1 -->
        <ul id="discover_list1" style="margin-bottom:10px;">
            <div style="padding-top:15px; background-color:white;"></div>
            <li v-for="info in infoList1" :key="info.id">
                <van-cell center is-link :title="info.mess">
                    <template #icon>
                        <van-image
                            width="23px"
                            height="23px"
                            :src="info.icon"
                            style="margin-right:10px;"/>
                    </template>
                </van-cell>
            </li>
        </ul>
        <!-- v-for列表渲染，infoList2 -->
        <ul id="discover_list2" style="margin-bottom:10px;">
            <li v-for="info in infoList2" :key="info.id">
                <van-cell center is-link :title="info.mess">
                    <template #icon>
                        <van-image
                            width="23px"
                            height="23px"
                            :src="info.icon"
                            style="margin-right:10px;"/>
                    </template>
                </van-cell>
            </li>
        </ul>
        <!-- v-for列表渲染，infoList3 -->
        <ul id="discover_list3" style="margin-bottom:10px;">
            <li v-for="info in infoList3" :key="info.id">
                <van-cell center is-link :title="info.mess">
                    <template #icon>
                        <van-image
                            width="23px"
                            height="23px"
                            :src="info.icon"
                            style="margin-right:10px;"/>
                    </template>
                </van-cell>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // discover_list1的信息列表
            infoList1: [
                {icon: require('@/assets/icon/icon_好友动态.jpg'), mess: "好友动态"},
                {icon: require('@/assets/icon/icon_小世界.jpg'), mess: "小世界"}
            ],
            // discover_list2的信息列表
            infoList2: [
                {icon: require('@/assets/icon/icon_游戏中心.jpg'), mess: "游戏中心"},
                {icon: require('@/assets/icon/icon_附近.jpg'), mess: "附近"},
                {icon: require('@/assets/icon/icon_直播.jpg'), mess: "直播"}
            ],
            // discover_list3的信息列表
            infoList3: [
                {icon: require('@/assets/icon/icon_小窝.jpg'), mess: "小窝"},
                {icon: require('@/assets/icon/icon_结伴.jpg'), mess: "结伴（测试版）"},
                {icon: require('@/assets/icon/icon_全民K歌.jpg'), mess: "全民K歌"},
                {icon: require('@/assets/icon/icon_动漫.jpg'), mess: "动漫"},
                {icon: require('@/assets/icon/icon_阅读.jpg'), mess: "阅读"},
                {icon: require('@/assets/icon/icon_购物.jpg'), mess: "购物"},
                {icon: require('@/assets/icon/icon_微视.jpg'), mess: "微视"},
                {icon: require('@/assets/icon/icon_音乐.jpg'), mess: "音乐"},
                {icon: require('@/assets/icon/icon_坦白说.jpg'), mess: "坦白说"},
                {icon: require('@/assets/icon/icon_运动.jpg'), mess: "运动"},
                {icon: require('@/assets/icon/icon_腾讯新闻.jpg'), mess: "腾讯新闻"},
                {icon: require('@/assets/icon/icon_腾讯课堂.jpg'), mess: "腾讯课堂"},
                {icon: require('@/assets/icon/icon_看点.jpg'), mess: "看点"},
                {icon: require('@/assets/icon/icon_更多.jpg'), mess: "更多"}
            ]
        };
    }
}
</script>

<style>

</style>