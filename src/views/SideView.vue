<template>
    <!-- 侧边页面 -->
    <div id="side">
        <div id="side_top">
            <div id="side_top_inside">
                <div id="side_top_in1">
                    <van-icon :name="require('@/assets/icon/icon_side_打卡.png')" size="22" style="margin:3px 20px 3px 0;" />
                    <span style="position:absolute; top:20px;">今天还没打卡哦</span>
                    <van-icon name="cross" size="25" color="white" style="float:right;" @click="back()" />
                </div>
                <div id="side_top_in2">
                    <van-image
                        round
                        width="60px"
                        height="60px"
                        :src="require('@/assets/images/my_profile.jpg')"
                        @click="openMyCard()"
                        style="border:2px solid white; float:left; margin-right:15px;" />
                    <span style="font-size:18px;">朽木</span>
                    <van-icon :name="require('@/assets/icon/icon_side_二维码.png')" size="20" style="float:right; padding:0 5px;" /><br>
                    <van-image :src="require('@/assets/images/qq等级.png')" style="width:170px;" /><br>
                    <van-icon :name="require('@/assets/icon/icon_side_个性签名.png')" size="15" />
                    <span style="margin:0 10px;">个性签名</span>
                </div>
            </div>
        </div>
        <div id="side_content">
            <ul>
                <!-- v-for列表渲染，infoList -->
                <li v-for="info in infoList" :key="info.id">
                    <van-cell center is-link :title="info.mess" style="padding:10px 20px;">
                        <template #icon>
                            <van-icon :name="info.icon" size="20" style="margin-right:15px" />
                        </template>
                    </van-cell>
                </li>
            </ul>
        </div>
        <div id="side_bottom">
            <div id="side_bottom_inside">
                <van-row>
                    <van-col span="4" style="text-align:center;">
                        <van-icon :name="require('@/assets/icon/icon_side_设置.png')" size="20" /><br>设置
                    </van-col>
                    <van-col span="4" style="text-align:center;">
                        <van-icon :name="require('@/assets/icon/icon_side_夜间.png')" size="20" /><br>夜间
                    </van-col>
                    <van-col span="4" style="text-align:center;">
                        <van-icon :name="require('@/assets/icon/icon_side_登录天数.png')" size="20" /><br>1024天
                    </van-col>
                    <van-col span="4" style="text-align:center;">
                        <van-icon :name="require('@/assets/icon/icon_side_当地天气.png')" size="20" /><br>当地天气
                    </van-col>
                </van-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // side_content的信息列表
            infoList: [
                {icon: require('@/assets/icon/icon_side_直播.png'), mess: "直播"},
                {icon: require('@/assets/icon/icon_side_会员.png'), mess: "点我开通会员"},
                {icon: require('@/assets/icon/icon_side_钱包.png'), mess: "我的QQ钱包"},
                {icon: require('@/assets/icon/icon_side_装扮.png'), mess: "我的个性装扮"},
                {icon: require('@/assets/icon/icon_side_情侣.png'), mess: "我的情侣空间"},
                {icon: require('@/assets/icon/icon_side_免流量.png'), mess: "免流量玩手Q"},
                {icon: require('@/assets/icon/icon_side_游戏.png'), mess: "精品小游戏"},
                {icon: require('@/assets/icon/icon_side_收藏.png'), mess: "我的收藏"},
                {icon: require('@/assets/icon/icon_side_相册.png'), mess: "我的相册"},
                {icon: require('@/assets/icon/icon_side_文件.png'), mess: "我的文件"},
                {icon: require('@/assets/icon/icon_side_厘米秀.png'), mess: "厘米秀"}
            ]
        };
    },
    methods: {
        // 返回
        back() {
            history.back();
        },
        // 打开我的个性名片
        openMyCard() {
            this.$router.push('/card?profile=my_profile.jpg&name=朽木&qq=1164585349&gender=男&age=21&birth_month=10&birth_day=22&constellation=天秤&place=广东广州&sign=个性签名');
        }
    }
}
</script>

<style>
#side_top{
    height: 172px;
}
#side_top_inside {
    position: fixed;
    top: 0px;
    width: 100%;
    color: white;
    z-index: 99;
    background-color: rgb(221, 214, 214);
    background-image: url(@/assets/images/side_background.jpg);
    background-size: cover;
}
#side_top_in1 {
    padding: 20px;
}
#side_top_in2 {
    padding: 5px 20px 15px;
}
#side_content {
    background-color: white;
    padding: 15px 0px 10px;
}
#side_bottom {
    height: 63px;
}
#side_bottom_inside {
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding: 10px 0;
    font-size: 12px;
    background-color: white;
}
</style>