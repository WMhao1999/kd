<template>
	<view class="content">
		<statusBar></statusBar>
		<view class="cardTab">
			<view :class="select_type=='charge' ? 'active charge item' : 'charge item'"
				@click="tabSelectType('charge')">
				<view class=" title">
					充电
				</view>
				<image src="../../static/image/code/gongdian.svg" class="icon"></image>
			</view>
			<view :class="select_type=='carWash' ? 'active carWash item' : 'carWash item'"
				@click="tabSelectType('carWash')">
				<view class="title">
					洗车
				</view>
				<image src="../../static/image/code/gongshui.svg" class="icon"></image>
			</view>
		</view>
		<input v-model="value" type="text" class="code_input"
			:placeholder="select_type=='charge'?'请输入充电枪编码':'请输入洗车机编码'" />
		<view :class="value==''?'button' : 'button btn_active'">
			确定
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				select_type: "charge",
				value: ""
			}
		},
		onLoad() {

		},
		methods: {
			tabSelectType(type) {
				this.select_type = type;
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		padding: 32rpx 40rpx;
		background-color: #ffffff;

		.cardTab {
			width: 100%;
			overflow: hidden;
			margin-bottom: 40rpx;

			.item {
				width: 48%;
				height: 200rpx;
				border: 2px solid #f2f2f2;
				border-radius: 8px;

				.title {
					font-size: 16px;
					font-weight: bold;
					padding: 8rpx 14rpx;
				}

				.icon {
					width: 100%;
					height: 120rpx;
				}
			}

			.active {
				border-color: #242424;
			}

			.charge {
				float: left;
			}

			.carWash {
				float: right;
			}
		}

		.code_input {
			width: 100%;
			height: 90rpx;
			line-height: 90rpx;
			background-color: #f2f2f2;
			border-radius: 18rpx;
			padding: 0 32rpx;
			margin-bottom: 40rpx;
		}

		.button {
			width: 100%;
			height: 90rpx;
			line-height: 90rpx;
			border-radius: 90rpx;
			background-color: #f2f2f2;
			text-align: center;
			color: #a78c8c;
			font-size: 16px;
		}

		.btn_active {
			background-color: #ff5f0f;
			color: #ffffff;
		}
	}
</style>