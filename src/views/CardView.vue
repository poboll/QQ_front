<template>
    <!-- 个性名片页面 -->
    <div id="card">
        <van-nav-bar :title="title" right-text="设置" :fixed="true" :placeholder="true" left-arrow @click-left="back()" />
        <div id="card_content">
            <div id="card_content_head">
                <van-image
                    round
                    width="85px"
                    height="85px"
                    :src="require(`@/assets/images/${user.profile}`)"
                    @click="profilePreview()"
                    style="float:left; margin-right:15px;" />
                <span style="font-size:22px; font-weight:bold;">{{user.name}}</span>
                <van-icon :name="require('@/assets/icon/icon_card_点赞0.png')" size="30px" style="position:absolute; top:70px; right:10px;" />
                <br>
                <span style="font-size:14px;">QQ：{{user.qq}}</span>
                <van-cell center clickable style="width:170px; padding:0;">
                    <template #icon>
                        <van-image :src="require('@/assets/images/qq等级.png')" />
                    </template>
                </van-cell>
            </div>
            <div id="card_content_info">
                <van-cell center is-link :title="user.gender + ' ' + user.age + '岁 &nbsp;|&nbsp; ' + user.birth_month + '月' + user.birth_day + '日 ' + user.constellation + '座 &nbsp;|&nbsp; 现居' +  user.place" style="padding:5px 10px; font-size:13px;">
                    <template #icon>
                        <van-icon :name="require('@/assets/icon/icon_card_个人信息.png')" size="18px" style="margin-right:15px;" />
                    </template>
                </van-cell>
                <van-cell center is-link :title="user.sign" style="padding:5px 10px; font-size:13px;">
                    <template #icon>
                        <van-icon :name="require('@/assets/icon/icon_card_个性签名.png')" size="18px" style="margin-right:15px" />
                    </template>
                </van-cell>
                <van-cell center is-link title="TA还未开通任何特权服务" style="padding:5px 10px; font-size:13px;">
                    <template #icon>
                        <van-icon :name="require('@/assets/icon/icon_card_特权服务.png')" size="18px" style="margin-right:15px" />
                    </template>
                </van-cell>
                <van-cell center is-link :title="who + '的QQ空间'" style="padding:5px 10px; font-size:13px;">
                    <template #icon>
                        <van-icon :name="require('@/assets/icon/icon_card_QQ空间.png')" size="18px" style="margin-right:15px" />
                    </template>
                </van-cell>
                <van-cell center is-link title="精选照片" style="margin-top:15px; padding:10px; font-size:17px; font-weight:bold;" />
            </div>
            <div id="card_content_picture" class="ui-feeds">
                <ul>
                    <li> <span :style="{backgroundImage:`url(${pictures[0]})`}" @click="picturesPreview(0)"></span> </li>
                    <li> <span :style="{backgroundImage:`url(${pictures[1]})`}" @click="picturesPreview(1)"></span> </li>
                    <li> <span :style="{backgroundImage:`url(${pictures[2]})`}" @click="picturesPreview(2)"></span> </li>
                    <li> <span :style="{backgroundImage:`url(${pictures[3]})`}" @click="picturesPreview(3)"></span> </li>
                    <li> <span :style="{backgroundImage:`url(${pictures[4]})`}" @click="picturesPreview(4)"></span> </li>
                    <li> <span :style="{backgroundImage:`url(${pictures[5]})`}" @click="picturesPreview(5)"></span> </li>
                </ul>
            </div>
        </div>
        <div id="card_bottombar">
            <div id="card_bottombar_inside">
                <van-button type="default" color="#EBECF4" :style="[bottom_button_style, blackText]">{{button1}}</van-button>
                <van-button type="default" color="#EBECF4" :style="[bottom_button_style, blackText]">{{button2}}</van-button>
                <van-button type="primary" color="#5BC7F6" :style="bottom_button_style" :to="'/dialog/'+user.name">发消息</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
    data() {
        return {
            // 该个性名片的用户信息
            user: {
                profile: this.$route.query.profile==undefined ? "default_profile.png" : this.$route.query.profile, //头像
                name: this.$route.query.name, //名字
                qq: this.$route.query.qq, //qq号
                gender: this.$route.query.gender, //性别
                age: this.$route.query.age, //年龄
                birth_month: this.$route.query.birth_month, //出生月份
                birth_day: this.$route.query.birth_day, //出生日
                constellation: this.$route.query.constellation, //星座
                place: this.$route.query.place, //现居地
                sign: this.$route.query.sign==undefined ? "个性签名" : this.$route.query.sign //个性签名
            },
            // 我/他/她的空间
            who: "我",
            // 我的资料/个人资料
            title: "",
            // 名片/音视频通话
            button1: "",
            // 编辑资料/礼物
            button2: "",
            // 底部按钮样式
            bottom_button_style: {
                margin: "5px 2.5px",
                width: window.innerWidth / 3.2 + "px",
                borderRadius: "5px",
                letterSpacing: "2px",
                fontWeight: "bold"
            },
            // 底部左边两个按钮字体颜色
            blackText: {
                color: "black"
            },
            // 精选照片
            pictures: [
                require("@/assets/images/picture_回复术士的重来人生.png"),
                require("@/assets/images/picture_芙蕾雅.png"),
                require("@/assets/images/picture_刹那.png"),
                require("@/assets/images/picture_克蕾赫.png"),
                require("@/assets/images/picture_诺伦.png"),
                require("@/assets/images/picture_夏娃.png")
            ]
        };
    },
    methods: {
        // 返回
        back() {
            history.back();
        },
        //预览“头像”
        profilePreview() {
            ImagePreview([require(`@/assets/images/${this.user.profile}`)]);
        },
        //预览“精选照片”
        picturesPreview(i) {
            ImagePreview({
                images: this.pictures,
                startPosition: i
            });
        }
    },
    mounted() {
        if(this.user.profile != "my_profile.jpg") {
            this.who = this.user.gender=="女" ? "她" : "他";
            this.title = "个人资料";
            this.button1 = "音视频通话";
            this.button2 = "礼物";
        }
        else {
            this.title = "我的资料";
            this.button1 = "名片";
            this.button2 = "编辑资料";
        }
    }
}
</script>

<style>
#card {
    --van-nav-bar-arrow-size: 20px;
    --van-nav-bar-icon-color: black;
    --van-nav-bar-text-color: black;
    --van-nav-bar-title-text-color: black;
    background-color: white;
}
#card_content {
    margin: 20px 0;
}
#card_content_head {
    height: 100px;
    padding: 0 10px;
}
#card_content_picture ul {
    padding: 0 10px;
}
#card_bottombar {
    height: 54px;
}
#card_bottombar_inside {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: #F9F9F9;
    text-align: center;
    z-index: 99;
}
</style>