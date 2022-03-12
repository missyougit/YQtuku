<template>
	<view class="details">
		<view class="image_details">
			<view class="title">
				{{image.title}}
			</view>
			<view class="author">
				<view class="author_avatar">
					<image src="https://img0.baidu.com/it/u=2122610759,3026267153&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"></image>
				</view>
				<view class="nickName_time">
					<view class="author_nickName">
						哥已不再是当年
					</view>
					<view class="createTime">
						{{image.createTime}}
					</view>
				</view>
			</view>
			<view class="images" v-for="(item,index) in image.imagesList" :key="index">
				<image :src="item" mode="widthFix"></image>
			</view>
			<!-- 评论区 -->
			<view class="pinglunqu">
				<view class="shuliang">
					<view class="plshu">
						<text  space="nbsp">评论 101</text>
					</view>
					<view class="zan">
						<text space="nbsp">9229 赞</text>
					</view>
					<view class="zhuanfa">
						<text space="nbsp">9 转发</text>
					</view>
				</view>
				<!-- 评论列表 -->
				<view class="pinglunlist">
					<view class="pinglunzhe">
						<view class="touxiang">
							<image src="https://img2.baidu.com/it/u=771742995,2044743106&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"></image>
						</view>
						<view class="nicheng">
							这个杀手不太冷静
						</view>
						<view class="dianzan">
							<text>赞</text>
							<image src="../../static/icons/dianzan.png"></image>
							<!-- <image src="../../static/icons/dianzan2.png"></image> -->
						</view>
						<view class="dianzan">
							<text>踩</text>
							<!-- <image src="../../static/icons/cai.png"></image> -->
							<image src="../../static/icons/caile.png"></image>
						</view>
					</view>
					<view class="pinglunneirong">
						今天你们都在干什么呢，我在这边啥也没干，好像你们呀，有咩有和我一起去流浪的
					</view>
					<!-- 回复 -->
					<view class="huifu">
						<text class="huifushu">2回复 ></text>
						<text class="huifushijian">30分钟前</text>
					</view>
				</view>
				
				<view class="pinglunlist">
					<view class="pinglunzhe">
						<view class="touxiang">
							<image src="https://img2.baidu.com/it/u=771742995,2044743106&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"></image>
						</view>
						<view class="nicheng">
							这个杀手不太冷静
						</view>
						<view class="dianzan">
							<text>赞</text>
							<image src="../../static/icons/dianzan.png"></image>
							<!-- <image src="../../static/icons/dianzan2.png"></image> -->
						</view>
						<view class="dianzan">
							<text>踩</text>
							<!-- <image src="../../static/icons/cai.png"></image> -->
							<image src="../../static/icons/caile.png"></image>
						</view>
					</view>
					<view class="pinglunneirong">
						今天你们都在干什么呢，我在这边啥也没干，好像你们呀，有咩有和我一起去流浪的
					</view>
					<!-- 回复 -->
					<view class="huifu">
						<text class="huifushu" @click="this.shareState=true">2回复 ></text>
						<text>30分钟前</text>
					</view>
				</view>
				
			</view>
			
		</view>
		
		<view v-if="!isFocus" class="buttontopxian" style="margin-left: -40rpx;"></view>
		<!-- 底部按钮区 -->
		<view v-if="!isFocus" class="buttons">
			<!-- 写评论 -->
			<view class="xiepinglun"  @click="isFocus=true">
				<view class="bianjitubiao">
					<image src="../../static/icons/bianjishuru.png" mode="widthFix"></image>
				</view>
				<view class="tishiqu">
					<text space="nbsp">写评论 ...</text>
				</view>
			</view>
			<!-- 评论图标(带评论数) -->
			<view class="pinglunbutton btn">
				<image src="../../static/icons/pinglun.png"></image>
				<text v-if="image.userActionCount.pingLunCount" class="pinglunshu">
					{{image.userActionCount.pingLunCount}}
				</text>
			</view>
			<!-- 收藏 -->
			<view class="btn">
				<image src="../../static/icons/star1.png"></image>
				<!-- <image src="../../static/icons/star2.png"></image> -->
			</view>
			<!-- 点赞 -->
			<view class="btn">
				<image src="../../static/icons/dianzan.png"></image>
				<!-- <image src="../../static/icons/dianzan2.png"></image> -->
			</view>
			<!-- 分享 -->
			<view class="fenxiangbutton btn">
				<image src="../../static/icons/fenxiang.png"></image>
				<button open-type="share" 
					:data-image='item'
					plain="true">
				</button>
			</view>
		</view>
		
		<!-- 编辑框 -->
		<view v-if="isFocus" class="bianji" :style="{bottom: keyboardheight+'px'}">
			<view class="wuti">
				<view class="xie">
					<textarea placeholder="友善是交流的起点..."
						maxlength="-1"
						confirm-type="send"
						:confirm-hold="true"
						:fixed="true"
						:auto-height="true"
						:adjust-position="false"
						:show-confirm-bar="false"
						:value="comments"
						:focus="isFocus"
						@confirm="confirm"
						@focus="focus"
						@input="input"
						@keyboardheightchange="keyboardheightchange"/>
						
				</view>
				
				<view class="fabu">
					<text>发送</text>
				</view>
			</view>
			
		</view>
		
		<!-- 多个回复的弹框 -->
		<view class="share-item" :class="{'share-show': shareState}">
		    <view class="jitiaohuifu">
				<image @click="shareState = false" src="../../static/icons/cha.png"></image>
		    	<text>3条回复</text>
		    </view>
		    <view class="louzhu">
		    	<view class="louzhuxinxi">
		    		<view class="louzhutouxiang">
		    			<image src="https://img0.baidu.com/it/u=3195550901,2474466959&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=832" mode=""></image>
		    		</view>
		    		<view class="louzhunicheng">
		    			<text>我是一只小小鸟</text>
		    		</view>
		    		<view class="guanzhuanniu">
		    			<text>关注</text>
		    		</view>
		    	</view>
		    	<!-- 评论内容 -->
		    	<view class="pinglun">
		    		这个肯定是少妇
		    	</view>
		    	<!-- 时间 -->
		    	<view class="pingluntime">
		    		<text>2小时前</text>
		    	</view>
		    	<view class="dianzanliebiao">
		    		<view class="touxiangliebiao">
		    			<view class="touxiang_item">
		    				<image src="https://img2.baidu.com/it/u=2211207098,3788910088&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=817"></image>
		    			</view>
		    			<view class="touxiang_item">
		    				<image src="https://img2.baidu.com/it/u=3326906414,13721093&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=795"></image>
		    			</view>
		    			<view class="touxiang_item">
		    				<image src="https://img1.baidu.com/it/u=4268354359,4041065682&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=832"></image>
		    			</view>
		    		</view>
		    		<view class="dianzangeshu">
		    			<text space="nbsp">6人赞过 ></text>
		    		</view>
		    		<view class="zan">
		    			<text>赞</text>
		    			<image src="../../static/icons/dianzan.png"></image>
		    			<!-- <image src="../../static/icons/dianzan2.png" mode=""></image> -->
		    		</view>
		    		<view class="zan">
		    			<text>踩</text>
		    			<image src="../../static/icons/cai.png" mode=""></image>
		    			<!-- <image src="../../static/icons/caile.png" mode=""></image> -->
		    		</view>
		    	</view>
		    </view>
		    <view style="border-bottom: solid 1rpx #F1F1F1; margin: 20rpx 0;"></view>
		    <view style="margin-left: 40rpx; margin-bottom: 30rpx;">全部回复</view>
		    <!-- 回复列表 -->
		    <view class="huifulist">
		    	<view class="huifurenxinxi">
		    		<view class="huifutouxiang">
		    			<image src="https://img2.baidu.com/it/u=3615765753,663792386&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1162"></image>
		    		</view>
		    		<view class="huifunicheng">
		    			大漂亮
		    		</view>
		    		<view class="zanhuifu">
		    			<text>赞</text>
		    			<image src="../../static/icons/dianzan.png"></image>
		    			<!-- <image src="../../static/icons/dianzan2.png" mode=""></image> -->
		    		</view>
		    		<view class="zanhuifu">
		    			<text>踩</text>
		    			<image src="../../static/icons/cai.png" mode=""></image>
		    			<!-- <image src="../../static/icons/caile.png" mode=""></image> -->
		    		</view>
		    	</view>
		    	<view class="huifu">
		    		你想干嘛
		    	</view>
		    	<view class="huifutime">
		    		<text class="huifushu">回复 ></text>
		    		<text>9小时前</text>
		    	</view>
		    </view>

		    <view class="huifulist">
		    	<view class="huifurenxinxi">
		    		<view class="huifutouxiang">
		    			<image src="https://img2.baidu.com/it/u=3615765753,663792386&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1162"></image>
		    		</view>
		    		<view class="huifunicheng">
		    			大漂亮
		    		</view>
		    		<view class="zanhuifu">
		    			<text>赞</text>
		    			<image src="../../static/icons/dianzan.png"></image>
		    			<!-- <image src="../../static/icons/dianzan2.png" mode=""></image> -->
		    		</view>
		    		<view class="zanhuifu">
		    			<text>踩</text>
		    			<image src="../../static/icons/cai.png" mode=""></image>
		    			<!-- <image src="../../static/icons/caile.png" mode=""></image> -->
		    		</view>
		    	</view>
		    	<view class="huifushui">
		    		@我是乖宝宝: 你好讨厌呀,快来打我呀啊单发看到那 啊的反击
		    	</view>
		    	<view class="huifu">
		    		你想干嘛
		    	</view>
		    	<view class="huifutime">
		    		<text class="huifushu">回复 ></text>
		    		<text>9小时前</text>
		    	</view>
		    </view>
		    <!-- 回复列表的底部按钮区 -->
		    <view class="buttontopxian"></view>
			<view class="huifubuttons">
		    	<!-- 写评论 -->
		    	<view class="xiepinglun">
		    		<view class="bianjitubiao">
		    			<image src="../../static/icons/bianjishuru.png" mode="widthFix"></image>
		    		</view>
		    		<view class="tishiqu">
		    			<text space="nbsp">写评论 ...</text>
		    		</view>
		    	</view>
		    	<!-- 表情图标 -->
		    	<view class="btn">
		    		<image src="../../static/icons/biaoqing.png"></image>
		    	</view>
		    	<!-- 点赞 -->
		    	<view class="btn">
		    		<image src="../../static/icons/dianzan.png"></image>
		    		<!-- <image src="../../static/icons/dianzan2.png"></image> -->
		    	</view>
		    	<!-- 踩 -->
		    	<view class="btn">
		    		<image src="../../static/icons/cai.png"></image>
		    		<!-- <image src="../../static/icons/caile.png"></image> -->
		    	</view>
		    	<!-- 分享 -->
		    	<view class="fenxiangbutton btn">
		    		<image src="../../static/icons/fenxiang.png"></image>
		    		<button open-type="share" 
		    			:data-image='item'
		    			plain="true">
		    		</button>
		    	</view>
		    </view>
		</view>
	</view>
</template>

<script>
	import emojis from '../../static/js/emojis.js'
	export default {
		data() {
			const baseUrl = getApp().globalData.baseUrl;
			return {
				baseUrl: baseUrl,
				image: {},
				openId: '',
				shareState: false,
				emojis: emojis,
				isFocus: false,
				comments: '',
				keyboardheight: 0
			}
		},
		onLoad(options) {
			this.openId = uni.getStorageSync("openId");
			// #ifdef APP-NVUE
			const eventChannel = this.$scope.eventChannel; // 兼容APP-NVUE
			// #endif
			// #ifndef APP-NVUE
			const eventChannel = this.getOpenerEventChannel();
			// #endif
			// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
			eventChannel.on('acceptDataFromOpenerPage', (data)=> {
			  this.image = data
			})
			
			console.log(this.image);
			
		},
		onShareAppMessage: (res) => {
			if (res.from === 'button') {
				return {
				    title: this.image.title,
				    path: '/pages/images/images',
					imageUrl: this.image.imagesList[0],
					success: (res) => {
						let userAction = {
							openId: this.openId,
							imagesId: this.image.id,
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
		onShow(options) {},
		
		methods: {
			focus(e){
				console.log(e);
				this.keyboardheight = e.detail.height;
				console.log(this.keyboardheight);
				
				// rpx换算px (屏幕宽度/750)	px换算rpx (750/屏幕宽度)
				// let pxToRpx = 750/width;
				// let width = uni.getSystemInfoSync().windowWidth;
				// let pxToRpx = 750/width;
				// this.keyboardheight = pxToRpx*height;
				
			},
			keyboardheightchange(e){
				console.log("keyboardheightchange",e);
				if(e.detail.height==0){
					this.isFocus = false;
				}
			},
			confirm(e){
				console.log(e);
			}
		}
	}
</script>

<style  lang="scss">
	.details {
		margin: 30rpx 40rpx 110rpx 40rpx;
		.image_details {
			.title {
				margin-bottom: 30rpx;
				width: 100%;
				font-size: 50rpx;
				font-weight: 600;
			}
			.author {
				display: flex;
				margin-bottom: 50rpx;
				.author_avatar {
					width: 62rpx;
					height: 62rpx;
					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				.nickName_time {
					margin-left: 14rpx;
					font-weight: 800;
					.author_nickName {
						font-size: 30rpx;
					}
					.createTime {
						font-size: 22rpx;
						color: #999999;
					}
				}
			}
			.images {
				width: 100%;
				margin-bottom: 30rpx;
				image {
					width: 100%;
					border-radius: 10rpx;
				}
			}
			.pinglunqu {
				
				.shuliang {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					margin-bottom: 30rpx;
					.plshu {
						flex: 4;
						font-weight: 560;
					}
					.zan {
						flex: 1;
						display: flex;
						justify-content: flex-start;
						font-size: 26rpx;
						color: #999999;
					}
					.zhuanfa {
						flex: 1;
						display: flex;
						justify-content: flex-end;
						border-left: 1rpx solid #007AFF;
						font-size: 26rpx;
						color: #999999;
					}
				}
				
				.pinglunlist {
					margin-bottom: 30rpx;
					.pinglunzhe {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: center;
						margin-bottom: 8rpx;
						.touxiang {
							flex: 1;
							width: 50rpx;
							height: 50rpx;
							image {
								width: 100%;
								height: 100%;
								border-radius: 50%;
							}
						}
						.nicheng {
							flex: 8;
							margin-left: 20rpx;
							font-size: 28rpx;
							font-weight: 800;
						}
						.dianzan {
							flex: 2;
							display: flex;
							justify-content: flex-end;
							width: 30rpx;
							height: 30rpx;
							font-size: 24rpx;
							line-height: 32rpx;
							color: #999999;
							image {
								width: 29%;
								height: 100%;
							}
							text {
								margin-right: 10rpx;
							}
						}
						
					}
					.pinglunneirong {
						font-size: 28rpx;
						margin-left: 70rpx;
						margin-bottom: 18rpx;
					}
					.huifu {
						font-size: 24rpx;
						margin-left: 70rpx;
						height: 40rpx;
						line-height: 40rpx;
						.huifushu {
							padding: 6rpx 10rpx 6rpx 16rpx;
							background-color: #F1F1F1;
							border-radius: 20rpx;
							margin-right: 20rpx;
							
						}
						
					}
					
				}
				
			}
			
		}
	
		.buttons {
			width: 100%;
			height: 80rpx;
			position: fixed;
			padding-bottom: 20rpx;
			bottom: 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			.xiepinglun {
				flex: 3;
				font-size: 28rpx;
				border-radius: 30rpx;
				display: flex;
				background-color: #F1F1F1;
				.bianjitubiao {
					padding: 6rpx 20rpx;
					image {
						width: 34rpx;
					}
				}
				.tishiqu {
					padding: 6rpx 20rpx 6rpx 0;
				}
				
			}
			.pinglunbutton {
				position: relative;
				.pinglunshu {
					position: absolute;
					color: #FFFFFF;
					font-size: 18rpx;
					border-radius: 10rpx;
					z-index: 9999;
					background-color: #FF6A6A;
					padding: 2rpx 4rpx;
					height: 18rpx;
					line-height: 18rpx;
					left: 60rpx;
					
				}
			}
			.fenxiangbutton {
				margin-right: 54rpx;
				button {
					position: absolute;
					height: 44rpx;
					border: none;
				}
			}
		}
		
		// 进入分享动画
		.share-show {
		    transition: all 0.3s ease;
		    transform: translateY(0%) !important;
		}
		// 离开分享动画
		.share-item {
		    position: fixed;
		    left: 0;
		    bottom: 0;
		    width: 100%;
		    height: 100vh;
		    background-color: #FFFFFF;
		    transition: all 0.3s ease;
		    transform: translateY(100%);
		    z-index: 1999;
			
			.jitiaohuifu {
				text-align: center;
				padding: 10rpx;
				font-size: 28rpx;
				border-bottom: 1rpx solid #F1F1F1;
				height: 30rpx;
				line-height: 30rpx;
				image {
					float: left;
					margin-left: 20rpx;
					width: 26rpx;
					height: 26rpx;
				}
			}
			.louzhu {
				margin: 20rpx 40rpx;
				.louzhuxinxi {
					margin-bottom: 8rpx;
					display: flex;
					.louzhutouxiang {
						flex: 1;
						width: 62rpx;
						height: 62rpx;
						image {
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
					.louzhunicheng {
						flex: 9;
						display: flex;
						align-items: center;
						justify-content: flex-start;
						margin-left: 20rpx;
						font-weight: 600;
					}
					.guanzhuanniu {
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: flex-end;
						color: #DD524D;
						font-size: 28rpx;
					}
				}
				.pinglun {
					margin-left: 82rpx;
					font-size: 30rpx;
					margin-bottom: 10rpx;
				}
				.pingluntime {
					margin-left: 82rpx;
					font-size: 24rpx;
					color: #C0C0C0;
					margin-bottom: 20rpx;
				}
				.dianzanliebiao {
					display: flex;
					margin-left: 82rpx;
					.touxiangliebiao {
						display: flex;
						.touxiang_item {
							margin-right: 10rpx;
							width: 40rpx;
							height: 40rpx;
							image {
								width: 100%;
								height: 100%;
								border-radius: 50%;
							}
						}
					}
					.dianzangeshu {
						flex: 6;
						margin-left: 10rpx;
						font-size: 22rpx;
						height: 40rpx;
						line-height: 40rpx;
					}
					.zan {
						flex: 2;
						display: flex;
						align-items: center;
						justify-content: flex-end;
						font-size: 24rpx;
						width: 30rpx;
						height: 30rpx;
						height: 40rpx;
						line-height: 40rpx;
						image {
							margin-left: 6rpx;
							width: 30%;
							height: 70%;
							border-radius: 50%;
						}
					}
					
				}
				
			}
			
			.huifulist {
				margin: 0 40rpx 30rpx 40rpx;
				.huifurenxinxi {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					margin-bottom: 8rpx;
					.huifutouxiang {
						flex: 1;
						width: 50rpx;
						height: 50rpx;
						image {
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
					.huifunicheng {
						flex: 8;
						margin-left: 20rpx;
						font-size: 28rpx;
						font-weight: 550;
					}
					.zanhuifu {
						flex: 2;
						display: flex;
						justify-content: flex-end;
						width: 30rpx;
						height: 30rpx;
						font-size: 24rpx;
						line-height: 32rpx;
						color: #999999;
						image {
							width: 29%;
							height: 100%;
						}
						text {
							margin-right: 10rpx;
						}
					}
					
				}
				.huifushui {
					font-size: 26rpx;
					margin-left: 70rpx;
					margin-bottom: 18rpx;
					background-color: #F1F1F1;
					padding: 10rpx;
					border-radius: 10rpx;
				}
				.huifu {
					font-size: 28rpx;
					margin-left: 70rpx;
					margin-bottom: 18rpx;
				}
				.huifutime {
					font-size: 24rpx;
					margin-left: 70rpx;
					height: 40rpx;
					line-height: 40rpx;
					.huifushu {
						padding: 6rpx 10rpx 6rpx 16rpx;
						background-color: #F1F1F1;
						border-radius: 20rpx;
						margin-right: 20rpx;
						
					}
					
				}
				
			}

			.huifubuttons {
				margin: 30rpx 40rpx 10rpx 40rpx;
				width: 100%;
				height: 80rpx;
				position: fixed;
				padding-bottom: 10rpx;
				bottom: 0;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				.xiepinglun {
					flex: 3;
					font-size: 28rpx;
					border-radius: 30rpx;
					border-top-left-radius: 30rpx;
					border-bottom-left-radius: 30rpx;
					display: flex;
					background-color: #F1F1F1;
					.bianjitubiao {
						padding: 6rpx 20rpx;
						image {
							width: 34rpx;
						}
					}
					.tishiqu {
						padding: 6rpx 20rpx 6rpx 0;
					}
					
				}
				.fenxiangbutton {
					margin-right: 54rpx;
					button {
						position: absolute;
						height: 44rpx;
						border: none;
					}
				}
			}
		}
		
	}
	
	.btn {
		flex: 1;
		display: flex;
		justify-content: center;
		image {
			width: 44rpx;
			height: 44rpx;
		}
	}
	
	.buttontopxian {
		width: 100%;
		position: fixed;
		bottom: 100rpx;
		border: 1rpx solid #F1F1F1;
		z-index: 999;
	}
	
	.bianji {
		margin-left: -40rpx;
		background-color: #FFFFFF;
		border-top: 1rpx solid #C8C7CC;
		position: fixed;
		z-index: 9999;
		width: 100%;
		.wuti {
			margin: 20rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			.xie {
				background-color: #F1F1F1;
				flex: 5;
				border-radius: 6rpx;
				textarea{
					padding: 20rpx;
					width: 92%;
					max-height: 150rpx;
				}
			}
			.fabu {
				flex: 1;
				text-align: right;
				margin-left: 10rpx;
				text{
					width: 100%;
					padding: 18rpx;
					background-color: #C8C7CC;
					border-radius: 6rpx;
				}
			}
		}
		
	}
	
</style>
