<template>
	
	<view class="content">
		<view class="wechat_logon">
			<view class="head_portrait">
				<image src="../../static/images/head_portrait.jpg"></image>
			</view>
			<view class="applet_name">
				<text>YQ图库</text>
			</view>
			<view class="logon">
				<button type="warn" 
					plain="true" 
					style="color: #FFFFFF;background-color: #BF3EFF;"
					open-type="getUserInfo"
					@getuserinfo="getUserInfo">登录</button>
			</view>
		</view>
		
	</view>

</template>

<script>
	export default {
		data() {
			const baseUrl = getApp().globalData.baseUrl;
			return {
				baseUrl: baseUrl
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
		onShow() {},
		
		methods: {
			getUserInfo(e){
				uni.showLoading({
				    title: '登录中'
				});
				let {userInfo} = e.detail;
				if(userInfo != undefined){
					uni.login({
						success: (res) => {
							userInfo.code = res.code;
							uni.request({
							    url: this.baseUrl+'/user/logon',
								method: 'POST',
								data: userInfo, 
							    success: (userRes) => {
									let {status,message,result} = userRes.data;
									if(status == 200){
										uni.setStorageSync("openId",result);
										uni.navigateBack({
										    delta: 1
										});
									}else{
										uni.showToast({
										    title: message,
										    duration: 1000,
											icon: 'none'
										});
									}
									
							    }
							});
						}
					})
				}
				uni.hideLoading();
			}
		}
	}
</script>

<style lang="scss">
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		.wechat_logon {
			margin-top: 200rpx;
			.head_portrait {
				width: 230rpx;
				height: 230rpx;
				image {
					width: 100%;
					height: 100%;
					border-radius: 20rpx;
				}
			}
			.applet_name {
				text-align: center;
				margin: 14rpx;
				font-size: 36rpx;
				color: #8E388E;
			}
			.logon {
				margin-top: 460rpx;
			}
			
		}
		
		
	}
	
</style>
