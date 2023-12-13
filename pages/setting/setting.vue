<template>
	<view class="content">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">设置</block>
		</cu-custom>
		<view class="main">
			<view class="cu-form-group">
				<view class="title">账号注销</view>
				<view class="icon cuIcon-right"></view>
			</view>
			<view class="cu-form-group">
				<view class="title">用户服务协议</view>
				<view class="icon cuIcon-right"></view>
			</view>
			<view class="cu-form-group">
				<view class="title">隐私策略</view>
				<view class="icon cuIcon-right"></view>
			</view>
			<view class="cu-form-group">
				<view class="title">关于我们</view>
				<view class="icon cuIcon-right"></view>
			</view>
			<view class="cu-form-group">
				<view class="title">意见反馈</view>
				<view class="icon cuIcon-right"></view>
			</view>
			<view class="cu-form-group">
				<view class="title">个人信息收集清单</view>
				<view class="icon cuIcon-right"></view>
			</view>
		</view>
		<view class="button">
			退出登录
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.main {
		padding: 40rpx 36rpx;
		border-radius: 16px;
		overflow: hidden;
		margin-bottom: 48rpx;
	}

	.button {
		width: 260rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		margin: 0 auto;
		border: 1px solid #bfbfbf;
		border-radius: 80rpx;
		font-size: 16px;
		color: #bfbfbf;
	}
</style>