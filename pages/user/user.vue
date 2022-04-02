<template>
	<view class="content">
		<image class="backgroundImg" src="../../static/images/backgroundImg.jpg" mode="aspectFill"></image>
		<view class="zhuye">
			<view class="wai">
				<image class="head_portrait" :src="userInfo.avatarUrl"></image>
			</view>
			<view class="nickName">
				<text>{{userInfo.nickName}}</text>
			</view>
			<view class="doing">
				<view class="doing_item" @click="getActionList(openId,'thumbsUp')">
					<text>{{userActionCount.thumbsUpCount}}</text>
					<text>喜欢</text>
				</view>
				<view class="doing_item" @click="getActionList(openId,'fenXiang')">
					<text>{{userActionCount.fenXiangCount}}</text>
					<text>分享</text>
				</view>
				<view class="doing_item" @click="getActionList(openId,'pingLun')">
					<text>{{userActionCount.shouCangCount}}</text>
					<text>评论</text>
				</view>
			</view>
			<view class="changyong">
				<view class="changyong-item">
					<image src="../../static/icons/tuijian.png"></image>
					<text>推荐</text>
					<button open-type="share" hover-class="none" plain="true"></button>
				</view>
				<view class="changyong-item">
					<image src="../../static/icons/fankui.png"></image>
					<text>反馈</text>
					<button open-type="feedback" hover-class="none" plain="true"></button>
				</view>
				<view class="changyong-item">
					<image src="../../static/icons/kefu.png"></image>
					<text>客服</text>
					<button open-type="contact" hover-class="none" plain="true"></button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const baseUrl = getApp().globalData.baseUrl;
			return {
				baseUrl: baseUrl,
				openId: '',
				userInfo: {},
				userActionCount: {}
			}
		},
		onLoad() {},
		onShareAppMessage: (res) => {
			return {
			    title: 'YQ图库-你值得拥有',
			    path: '/pages/images/images'
			}
		},
		onShareTimeline: (res) => {
			return {
			    title: 'YQ图库-你值得拥有',
			    path: '/pages/images/images'
			}
		},
		onShow() {
			this.openId = uni.getStorageSync("openId");
			
			uni.request({
			    url: this.baseUrl+'/user/userPageData?openId='+this.openId,
			    success: (userRes) => {
					console.log(userRes);
					let {result} = userRes.data;
					this.userInfo = result.user;
					this.userActionCount = result.userActionCount;
			    }
			});
			
		},
		
		methods: {
	
			getActionList(openId,action){
				console.log("openId=>"+openId+"\naction=>"+action);
			}
			
		}
	}
</script>

<style lang="scss">
	
	.content {
		.backgroundImg {
			z-index:-1;
			width:100%;
			height: 260rpx;
			position: fixed;
			top:0;
			background-color: red;
		}
		
		.zhuye {
			width: 100%;
			height: 100%;
			margin-top: 200rpx;
			background-color: #FFFFFF;
			border-radius: 50rpx 50rpx 0 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.wai {
				margin-top: -75rpx;
				background-color: #FFFFFF;
				border-radius: 50%;
				.head_portrait {
					width: 140rpx;
					height: 140rpx;
					border-radius: 50%;
					margin: 5rpx;
				}
			}
			.nickName {
				margin: 10rpx;
				font-size: 40rpx;
				font-weight: 600;
			}
			.doing {
				width: 100%;
				display: flex;
				margin-top: 80rpx;
			}
			.changyong {
				display: flex;
				margin: 200rpx 40rpx;
				border: #F1F1F1 solid;
				border-radius: 50rpx;
			}
		}
		
	}
	.changyong-item {
		flex: 1;
		width: 80rpx;
		height: 80rpx;
		margin: 70rpx;
		text-align: center;
		position: relative;
		image {
			width: 100%;
			height: 100%;
		}
		button {
			position: absolute;
			margin-top: -134rpx;
			width: 82rpx;
			height: 134rpx;
			border: none;
		}

	}
	
	.doing_item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
</style>
