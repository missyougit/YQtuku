<template>
	<view class="content">
		
		<movable-area class="movableArea">
			<movable-view 
				class="movableView" 
				:position="position" 
				:x="x" 
				:y="y" 
				:direction="direction" 
				:damping="damping"
				@change="onChange" 
				@touchend="onTouchend">
				
				<image :src="avatarUrl" mode="widthFix" class="iconImage"></image>
				<button @click="toUserPage" class="contact">分享</button>
			</movable-view>
		</movable-area>
		
		<view class="images" v-for="(item,index) in images" :key="index">
			<view v-if="item.title" class="title" @click="to_image_details(item)">
				<text>{{item.title}}</text>
			</view>
			<view v-if="item.title" class="image_list">
				<view class="imageList" v-for="(image,i) in item.imagesList" :key="i">
					<image :src="image" @click="previewImage(image,item.imagesList)"></image>
				</view>
			</view>
			<view v-if="item.title" class="action">
				<view class="action-item share">
					<image src="../../static/icons/fenxiang.png"></image>
					<text>分享</text>
					<button open-type="share" 
						:data-image='item'
						plain="true">
					</button>
				</view>
				<view class="action-item commet" @click="to_image_details(item)">
					<image src="../../static/icons/pinglun.png"></image>
					<text v-if="item.userActionCount.pingLunCount">{{item.userActionCount.pingLunCount}}</text>
					<text v-else>评论</text>
				</view>
				<view class="action-item like" @click="dianzan(item)">
					<image v-if="item.myThumbsUp" src="../../static/icons/dianzan2.png"></image>
					<image v-else src="../../static/icons/dianzan.png"></image>
					<text v-if="item.userActionCount.thumbsUpCount" :class="[item.myThumbsUp?'myThumbsUp-color':'']">{{item.userActionCount.thumbsUpCount}}</text>
					<text v-else>喜欢</text>
				</view>
			</view>
		</view>
		<view class="kong"></view>
	</view>
</template>

<script>
	export default {
		data() {
			const baseUrl = getApp().globalData.baseUrl;
			return {
				baseUrl: baseUrl,
				pageCount:1,
				total:0,
				pageNo:1,
				pageSize:5,
				images: [],
				openId: '',
				avatarUrl: '../../static/images/head_portrait.jpg',
				// --------------悬浮分享按钮------------------//
				x: 0,
				y: 0,
				x1: 0,
				x2: 0,
				y1: 0,
				y2: 0,
				move: {
					x: 0,
					y: 0
				}
				// --------------悬浮分享按钮------------------//
			}
		}, 
		// --------------悬浮分享按钮------------------
		props: {
			damping: {
				type: Number,
				default: 10
			},
			direction: {
				type: String,
				default: "all"
			},
			position: {
				type: Number,
				default: 4
			}
		},
		// --------------悬浮分享按钮------------------
		// --------------悬浮分享按钮------------------
		mounted() {
			uni.getSystemInfo({
				success: (res) => {
					this.x1 = 0;
					this.x2 = parseInt(res.windowWidth) - 50;
					this.y1 = 0;
					this.y2 = parseInt(res.windowHeight) - 20;
					setTimeout(() => {
						if (this.position == 1 || this.position == 2) this.y = parseInt(this.y2 * 0.2);
						if (this.position == 3 || this.position == 4) this.y = parseInt(this.y2 * 0.8);
						if (this.position == 1 || this.position == 3) this.x = parseInt(this.x1);
						if (this.position == 2 || this.position == 4) this.x = parseInt(this.x2);
						this.move.x = this.x;
						this.move.y = this.y;
					}, 100)
				}
			})
		},
		// --------------悬浮分享按钮------------------
		onLoad() {
			this.openId = uni.getStorageSync("openId");
			let url = this.baseUrl+"/image/list?pageNo="+this.pageNo+"&pageSize="+this.pageSize+"&openId="+this.openId;
			this.getImages(url);
		},
		onShareAppMessage: (res) => {
			
			if (res.from === 'button') {
				let {image} = res.target.dataset;
				return {
				    title: image.title,
				    path: './image_details',
					imageUrl: image.imagesList[0],
					success: (res) => {
						console.log("pppppp");
						let userAction = {
							openId: this.openId,
							imagesId: image.id,
							fenXiang: 1
						};
						
						uni.request({
						    url: this.baseUrl+'/userAction/thumbsUp',
							method: 'PUT',
							data: userAction
						});
					}
				}
			}
			if (res.from === 'menu') {
				return {
				    title: 'YQ图库-你值得拥有',
				    path: '/pages/images/images'
				}
			}
			
		},
		onShareTimeline: (res) => {
			return {
			    title: 'YQ图库-你值得拥有',
			    path: '/pages/images/images'
			}
		},
		
		onShow() {

			if(this.openId != ''){
				let url = this.baseUrl+"/user/userInfo?openId="+this.openId;
				uni.request({
				    url: url,
				    success: (res) => {
						
						let {result} = res.data;
						this.avatarUrl = result.avatarUrl;
				    }
				});
			}
			
		},
		
		onPullDownRefresh() {
			if(!this.toLogon()){
				return;
			}
			this.pageNo = 1;
			let url = this.baseUrl+"/image/list?pageNo="+this.pageNo+"&pageSize="+this.pageSize+"&openId="+this.openId;
			this.getImages(url);
			uni.stopPullDownRefresh();
		},
		
		onReachBottom(){
			if(!this.toLogon()){
				return;
			}
			if(this.pageNo <= this.pageCount){
				let url = this.baseUrl+"/image/list?pageNo="+this.pageNo+"&pageSize="+this.pageSize+"&openId="+this.openId;
				this.getImages(url);
			}
		},
		methods: {

			dianzan(image){
				let thumbsUp = 1;
				image.myThumbsUp = !image.myThumbsUp;
				if(image.myThumbsUp){
					image.userActionCount.thumbsUpCount++;
					thumbsUp = 1;
				}else{
					image.userActionCount.thumbsUpCount--;
					thumbsUp = 0;
				}
				
				let userAction = {
					openId: this.openId,
					imagesId: image.id,
					thumbsUp: thumbsUp
				};
				
				uni.request({
				    url: this.baseUrl+'/userAction/thumbsUp',
					method: 'PUT',
					data: userAction
				});
				
				
			},
		
			to_image_details(image){
				
				uni.navigateTo({
					url: './image_details',
					success: (res) => {
						// 通过eventChannel向被打开页面传送数据
						res.eventChannel.emit('acceptDataFromOpenerPage', image)
					}
				});
			},
		
			getImages(url){
				uni.request({
				    url: url,
				    success: (res) => {
						
						let {status,message,result} = res.data;
						if(status == 200){
							this.pageCount = result.pageCount;
							this.total = result.total;
							if(this.pageNo == 1){
								this.images = result.tukuList;
							}else{
								this.images = [...this.images,...result.tukuList];
							}
							this.pageNo ++;
						}else{
							uni.showToast({
							    title: message,
							    duration: 1000,
								icon: 'none'
							});
						}
						
				    }
				});
			},
		
			// 预览图片
			previewImage(current,urls){
				uni.previewImage({
					current,
					urls
				})
			},
			
			toLogon(){
				if(this.openId == ''){
					uni.navigateTo({
						url: '../logon/logon'
					});
					return false;
				}
				return true;
			},
			
			toUserPage(){
				if(!this.toLogon()){
					return;
				}
				uni.navigateTo({url: '../user/user'});
			},
			
			// --------------悬浮分享按钮------------------
			onChange(e) {
				if (e.detail.source === "touch") {
					this.move.x = e.detail.x;
					this.move.y = e.detail.y;
				}
			},
			onTouchend() {
				this.x = this.move.x;
				this.y = this.move.y;
				setTimeout(() => {
					if (this.move.x < this.x2 / 2) this.x = this.x1;
					else this.x = this.x2;
					console.log(this.x, this.y)
				}, 50)
			}
			// --------------悬浮分享按钮------------------//
		}
	}
</script>

<style lang="scss">
	// --------------悬浮分享按钮------------------//
	.movableArea {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none; //设置area元素不可点击，则事件便会下移至页面下层元素
		z-index: 999;
	}
	.movableView {
		pointer-events: auto; //可以点击
		width: 90rpx;
		height: 90rpx;
		padding: 10rpx;
		border-radius: 100%;
		border: 2px solid #f8931f;
	}
	// 客服
	.contact {
		width: 50px;
		height: 50px;
		overflow: hidden;
		position: absolute;
		left: 0px;
		top: 0px;
		border-radius: 100%;
		opacity: 0;
	}
	.iconImage {
		display: block;
		width: 90rpx;
		height: 90rpx;
		border-radius: 50%;
		// animation: iconImage 5s linear infinite;
	}
	@keyframes iconImage{
	  0%{-webkit-transform:rotate(0deg);}
	  25%{-webkit-transform:rotate(90deg);}
	  50%{-webkit-transform:rotate(180deg);}
	  75%{-webkit-transform:rotate(270deg);}
	  100%{-webkit-transform:rotate(360deg);}
	}
	// --------------悬浮分享按钮------------------//
	
	.content {
		.images {
			width: 100%;
			border-bottom: #F4F4F4 solid;
			.title {
				margin: 30rpx 40rpx 20rpx 40rpx;
			}
			
			.image_list {
				margin: 0 0 0 40rpx;
				display: flex;
				flex-wrap: wrap;
				.imageList{
					width: 218rpx;
					height: 218rpx;
					position: relative;
					margin: 0 8rpx 8rpx 0;
					image{
						width: 100%;
						height: 100%;
						border-radius: 6rpx;
					}
				}
			}
			
			.action {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				margin: 8rpx 0 12rpx 0;
				position: relative;
				.action-item {
					flex: 1;
					width: 40rpx;
					height: 40rpx;
					text-align: center;
					image {
						width: 100%;
						height: 100%;
					}
					text {
						position: absolute;
						padding: 5rpx;
						font-size: 24rpx;
					}
					button {
						position: absolute;
						margin-top: -52rpx;
						width: 96rpx;
						height: 46rpx;
						border: none;
					}
				}
			}
			
		}
		.kong {
			width: 100%;
			height: 20rpx;
			
		}
		
	}
	
	.like {
		margin: 0 160rpx 0 50rpx;
	}
	.share {
		margin: 0 90rpx 0 40rpx;
	}
	.commet {
		margin: 0 90rpx 0 200rpx;
	}
	
	.myThumbsUp-color {
		color: #EE2C2C;
	}
	
	
</style>
