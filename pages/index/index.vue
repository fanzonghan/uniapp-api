<template>
	<view>
		<u-navbar title="树洞" :safeAreaInsetTop="false" :placeholder="true">
			<view class="u-nav-slot" slot="left"></view>
		</u-navbar>
		<u-search :showAction="true" actionText="搜索" height="35" borderColor="#000" bgColor="#fff"
			:animation="true"></u-search>
		<u-swiper :list="banner" height="180" keyName="image" showTitle :autoplay="false" circular></u-swiper>

		<u-notice-bar text="测试测试测试测试测试测试测试" mode="link" speed="80" url="/pages/componentsB/tag/tag"></u-notice-bar>

		<!-- 		<u-grid :border="false" @click="menusClick" style="padding-top: 10px;background-color: #fff">
			<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
				<u--image :showLoading="true" :src="baseListItem.image" width="50px" height="50px" @click="click"
					shape="circle"></u--image>
				<text class="grid-text">{{baseListItem.title}}</text>
			</u-grid-item>
		</u-grid> -->

		<u-tabbar :value="tabbar" @change="change1" :fixed="true" :placeholder="false" :safeAreaInsetBottom="false">
			<u-tabbar-item text="首页" icon="home" @click="click1"></u-tabbar-item>
			<u-tabbar-item text="写心情" icon="photo" @click="click1"></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account" @click="click1"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	import {
		getIndexData
	} from '@/api/api.js';
	export default {
		components: {

		},
		data() {
			return {
				tabbar: 0,
				banner: [{
					image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东',
				}, {
					image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				}, {
					image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}],
				baseList: [{
						image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
						title: '图片'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
						title: '锁头'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
						title: '星星'
					},
				],

			}
		},
		onLoad() {
			getIndexData().then(res=>{
				
			})
		},
		methods: {
			menusClick(name) {
				// this.$refs.uToast.success(`点击了第${name}个`)
			}
		}
	}
</script>

<style lang="scss">

</style>