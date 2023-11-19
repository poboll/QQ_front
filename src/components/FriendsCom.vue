<template>
    <!-- 联系人界面 -->
    <div id="friends">
        <van-search v-model="value" shape="round" placeholder="搜索" />
        <div style="margin-bottom:10px;">
            <van-cell title="新朋友" is-link />
            <van-cell title="群通知" is-link />
        </div>
        <div>
            <van-tabs v-model:active="active" color="#12B8F6" offset-top="50px" title-active-color="#12B8F6" sticky>
                <van-tab title="好友">
                    <van-index-bar sticky :sticky-offset-top="94" highlight-color="#12B8F6" teleport="">
                        <van-index-anchor index="A" />
                        <van-cell center clickable title="A好友" label="[在线] 个性签名" />
                        <van-index-anchor index="B" />
                        <van-cell center clickable title="B好友" label="[在线] 个性签名" />
                        <van-index-anchor index="C" />
                        <van-cell center clickable title="C好友" label="[在线] 个性签名" />
                        <van-index-anchor index="D" />
                        <van-cell center clickable title="D好友" label="[在线] 个性签名" />
                        <van-index-anchor index="E" />
                        <van-cell center clickable title="E好友" label="[在线] 个性签名" />
                        <van-index-anchor index="F" />
                        <van-cell center clickable title="F好友" label="[在线] 个性签名" />
                    </van-index-bar>
                </van-tab>
                <van-tab title="分组">
                    <van-collapse v-model="grouping_activeNames">
                        <van-collapse-item title="特别关心" name="1"></van-collapse-item>
                        <van-collapse-item title="我的好友" name="2">
                            <ul>
                                <!-- v-for列表渲染，myFriends -->
                                <li v-for="friend in myFriends" :key="friend.id">
                                    <van-cell center clickable :title="friend.query.name" :label="'[在线] '+friend.query.sign" :to="friend">
                                        <template #icon>
                                            <van-image
                                            round
                                            width="45px"
                                            height="45px"
                                            :src="require(`../assets/images/${friend.query.profile}`)"
                                            style="margin-right:10px;"/>
                                        </template>
                                    </van-cell>
                                </li>
                            </ul>
                        </van-collapse-item>
                        <van-collapse-item title="家人" name="3"></van-collapse-item>
                        <van-collapse-item title="朋友" name="4"></van-collapse-item>
                        <van-collapse-item title="同学" name="5"></van-collapse-item>
                    </van-collapse>
                </van-tab>
                <van-tab title="群聊">
                    <van-collapse v-model="groupChat_activeNames">
                        <van-collapse-item title="我创建的群聊" name="1"></van-collapse-item>
                        <van-collapse-item title="我管理的群聊" name="2"></van-collapse-item>
                        <van-collapse-item title="我加入的群聊" name="3">
                            <ul>
                                <li>
                                    <van-cell center clickable title="王者荣耀交流群">
                                        <template #icon>
                                            <van-image
                                            round
                                            width="45px"
                                            height="45px"
                                            :src="require('../assets/images/profile_王者荣耀.jpg')"
                                            style="margin-right:10px;"/>
                                        </template>
                                    </van-cell>
                                </li>
                                <li>
                                    <van-cell center clickable title="英雄联盟交流群">
                                        <template #icon>
                                            <van-image
                                            round
                                            width="45px"
                                            height="45px"
                                            :src="require('../assets/images/profile_英雄联盟.jpg')"
                                            style="margin-right:10px;"/>
                                        </template>
                                    </van-cell>
                                </li>
                            </ul>
                        </van-collapse-item>
                    </van-collapse>
                </van-tab>
                <van-tab title="设备">
                    <ul>
                        <li>
                            <van-cell center clickable title="我的电脑" label="无需数据线，手机轻松传文件到电脑">
                                <template #icon>
                                    <van-image
                                        round
                                        width="45px"
                                        height="45px"
                                        :src="require('../assets/images/profile_我的电脑.jpg')"
                                        style="margin-right:10px;"/>
                                </template>
                            </van-cell>
                        </li>
                        <li>
                            <van-cell center clickable title="发现新设备" label="搜索附近的设备，用QQ轻松连接设备">
                                <template #icon>
                                    <van-image
                                        round
                                        width="45px"
                                        height="45px"
                                        :src="require('../assets/images/profile_发现新设备.jpg')"
                                        style="margin-right:10px;"/>
                                </template>
                            </van-cell>
                        </li>
                    </ul>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "", //搜索框的文本内容
            active: 1, //当前选中的标签页，默认为第1页即“分组”页
            grouping_activeNames: [], //“分组”页展开的折叠面板，默认为无
            groupChat_activeNames: [], //“群聊”页展开的折叠面板，默认为无
            myFriends: { //好友对象，存储所有好友的信息
                lafei: {
                    path: '/card',
                    query: { profile:'profile_拉菲.jpg', name:'拉菲', qq:'1164585301', gender:'女', age:15, birth_month:10, birth_day:30, constellation:'天蝎', place:'日本东京', sign:'睡觉觉~' }
                },
                zerotwo: {
                    path: '/card',
                    query: { profile:'profile_02.jpg', name:'02', qq:'1164585302', gender:'女', age:18, birth_month:2, birth_day:27, constellation:'双鱼', place:'日本东京', sign:'darling~' }
                },
                mirai: {
                    path: '/card',
                    query: { profile:'profile_栗山未来.jpg', name:'栗山未来', qq:'1164585303', gender:'女', age:17, birth_month:3, birth_day:31, constellation:'白羊', place:'日本东京', sign:'不愉快~' }
                },
                zhezhi: {
                    path: '/card',
                    query: { profile:'profile_鸢一折纸.jpg', name:'鸢一折纸', qq:'1164585304', gender:'女', age:16, birth_month:11, birth_day:11, constellation:'天蝎', place:'日本东京', sign:'绝灭天使' }
                },
                erya: {
                    path: '/card',
                    query: { profile:'profile_本条二亚.jpg', name:'本条二亚', qq:'1164585305', gender:'女', age:17, birth_month:2, birth_day:29, constellation:'双鱼', place:'日本东京', sign:'嗫告篇帙' }
                },
                kuangsan: {
                    path: '/card',
                    query: { profile:'profile_时崎狂三.jpg', name:'时崎狂三', qq:'1164585306', gender:'女', age:17, birth_month:6, birth_day:10, constellation:'双子', place:'日本东京', sign:'刻刻帝' }
                },
                siminai: {
                    path: '/card',
                    query: { profile:'profile_四糸乃.jpg', name:'四糸乃', qq:'1164585307', gender:'女', age:13, birth_month:3, birth_day:20, constellation:'双鱼', place:'日本东京', sign:'冰结傀儡' }
                },
                qinli: {
                    path: '/card',
                    query: { profile:'profile_五河琴里.jpg', name:'五河琴里', qq:'1164585308', gender:'女', age:14, birth_month:8, birth_day:3, constellation:'狮子', place:'日本东京', sign:'灼烂歼鬼' }
                },
                liucan: {
                    path: '/card',
                    query: { profile:'profile_星宫六喰.jpg', name:'星宫六喰', qq:'1164585309', gender:'女', age:14, birth_month:9, birth_day:12, constellation:'处女', place:'日本东京', sign:'封解主' }
                },
                qizui: {
                    path: '/card',
                    query: { profile:'profile_镜野七罪.jpg', name:'镜野七罪', qq:'1164585310', gender:'女', age:13, birth_month:7, birth_day:23, constellation:'狮子', place:'日本东京', sign:'赝造魔女' }
                },
                xixuan: {
                    path: '/card',
                    query: { profile:'profile_八舞夕弦.jpg', name:'八舞夕弦', qq:'1164585311', gender:'女', age:18, birth_month:10, birth_day:18, constellation:'天秤', place:'日本东京', sign:'飓风骑士' }
                },
                yejushi: {
                    path: '/card',
                    query: { profile:'profile_八舞耶俱矢.jpg', name:'八舞耶俱矢', qq:'1164585312', gender:'女', age:18, birth_month:10, birth_day:18, constellation:'天秤', place:'日本东京', sign:'飓风骑士' }
                },
                meijiu: {
                    path: '/card',
                    query: { profile:'profile_诱宵美九.jpg', name:'诱宵美九', qq:'1164585313', gender:'女', age:18, birth_month:1, birth_day:19, constellation:'摩羯', place:'日本东京', sign:'破军歌姬' }
                },
                shixiang: {
                    path: '/card',
                    query: { profile:'profile_夜刀神十香.jpg', name:'夜刀神十香', qq:'1164585314', gender:'女', age:18, birth_month:4, birth_day:10, constellation:'白羊', place:'日本东京', sign:'鏖杀公' }
                }
            }
        };
    }
}
</script>

<style>
.van-collapse-item__content {
    padding: 10px 0;
}
</style>