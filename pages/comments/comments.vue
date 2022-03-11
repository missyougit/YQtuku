<template>
	<view class="comments">
		<view class="jitiaohuifu">
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
		<!-- 底部按钮区 -->
		<view class="buttons">
			<!-- 写评论 -->
			<view class="xiepinglun">
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
	</view>
</template>

<script>
</script>

<style lang="scss">
	.comments {
		.jitiaohuifu {
			text-align: center;
			padding: 10rpx;
			font-size: 26rpx;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
			border-bottom: 1rpx solid #F1F1F1;
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
					font-size: 26rpx;
				}
			}
			.pinglun {
				margin-left: 82rpx;
				font-size: 28rpx;
				margin-bottom: 10rpx;
			}
			.pingluntime {
				margin-left: 82rpx;
				font-size: 22rpx;
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
					font-size: 20rpx;
					height: 40rpx;
					line-height: 40rpx;
				}
				.zan {
					flex: 2;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					font-size: 22rpx;
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
					font-size: 26rpx;
					font-weight: 550;
				}
				.zanhuifu {
					flex: 2;
					display: flex;
					justify-content: flex-end;
					width: 30rpx;
					height: 30rpx;
					font-size: 22rpx;
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
				font-size: 24rpx;
				margin-left: 70rpx;
				margin-bottom: 18rpx;
				background-color: #F1F1F1;
				padding: 10rpx;
				border-radius: 10rpx;
			}
			.huifu {
				font-size: 26rpx;
				margin-left: 70rpx;
				margin-bottom: 18rpx;
			}
			.huifutime {
				font-size: 22rpx;
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
		
		.buttons {
			margin: 30rpx 40rpx 110rpx 40rpx;
			width: 100%;
			height: 80rpx;
			position: fixed;
			padding-bottom: 20rpx;
			bottom: 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			background: #FFFFFF;
			.xiepinglun {
				flex: 3;
				font-size: 26rpx;
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
					font-size: 16rpx;
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
</style>
