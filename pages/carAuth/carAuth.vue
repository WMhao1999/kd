<template>
	<view class="containers">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">车辆认证</block>
		</cu-custom>
		<view class="parking-box">
			添加车辆
			<view class="card">
				<view class="title">
					车辆认证
				</view>
				<view class="text">
					可上传行驶证自动填写车牌
				</view>
				<view class="radio">
					<switch @change="switchA=!switchA" :class="switchA?'checked':''" :checked="switchA?true:false">
					</switch>
				</view>
			</view>
		</view>
		<view class="car_input_box">
			<view>车牌号码 *</view>
			<view class="small_text">
				正确填写本次充电车辆的车牌号，可减免部分停车费
			</view>
			<view class="car_number_input">
				<view class="car_type">
					<view class="default_car" :class="{active_car : activeNum == '0'}"
						@click="chooseNumber(carNumber[0],'0')">
						<view class="" v-show="carNumber[0]">
							{{carNumber[0]}}
						</view>
					</view>
					<view class="default_car default_car1" :class="{active_car: activeNum == '1'}"
						@click="chooseNumber(carNumber[1],'1')">
						<view class="" v-show="carNumber[1]">
							{{carNumber[1]}}
						</view>
					</view>
					<view class="default_dot"></view>
					<view class="default_car" :class="{active_car:activeNum == '2'}"
						@click="chooseNumber(carNumber[2],'2')">
						<view class="" v-show="carNumber[2]">
							{{carNumber[2]}}
						</view>
					</view>
					<view class="default_car" :class="{active_car : activeNum == '3'}"
						@click="chooseNumber(carNumber[3],'3')">
						<view class="" v-show="carNumber[3]">
							{{carNumber[3]}}
						</view>
					</view>
					<view class="default_car" :class="{active_car : activeNum == '4'}"
						@click="chooseNumber(carNumber[4],'4')">
						<view class="" v-show="carNumber[4]">
							{{carNumber[4]}}
						</view>
					</view>
					<view class="default_car" :class="{active_car : activeNum == '5'}"
						@click="chooseNumber(carNumber[5],'5')">
						<view class="" v-show="carNumber[5]">
							{{carNumber[5]}}
						</view>
					</view>
					<view class="default_car" :class="{active_car : activeNum == '6'}"
						@click="chooseNumber(carNumber[6],'6')">
						<view class="" v-show="carNumber[6]">
							{{carNumber[6]}}
						</view>
					</view>
					<view class="default_car"
						:class="{diabled_car:currentIndex != 1,active_car:activeNum == '7' && currentIndex == 1}"
						@click="chooseNumber(carNumber[7],'7')">
						<view class="" v-show="carNumber[7]">
							{{carNumber[7]}}
						</view>
					</view>
				</view>
			</view>
			<view class="check_energy">
				<view>新能源车牌号</view>
			</view>
			<!-- 	<view class="confirm_btn" @click="submit">
				确认
			</view> -->
			<view class="car_used">
				<view class="title">
					车辆用途
				</view>
				<view class="list">
					<view class="item">
						<view class="item_main">
							<view class="title">
								物流车/商用车
							</view>
						</view>
					</view>
					<view class="item">
						<view class="item_main">
							<view class="title">
								专快车
							</view>
						</view>
					</view>
					<view class="item">
						<view class="item_main">
							<view class="title">
								出租车
							</view>
						</view>
					</view>
					<view class="item">
						<view class="item_main">
							<view class="title">
								私家车
							</view>
						</view>
					</view>
				</view>
			</view>
			<view style="height: 200rpx;"></view>
		</view>
		<!-- 键盘 -->
		<view v-if="activeNum>-1" class="keyboard-content">
			<view class="finish">
				<view class="text" @click="submit">
					完成
				</view>
			</view>
			<!-- 省份键盘 -->
			<template v-if="provinceBoardShow">
				<view style="position: relative;">
					<view class="province-keyboard flex jus-center">
						<view class="td-nor color-333 province-td" v-for="(item,index) in provincesKeyList" :key="index"
							@click="provinceKeyClick(item,index)" hover-class="board-active" hover-start-time="0"
							hover-stay-time="80">
							<view class="province-font">
								{{item}}
							</view>
						</view>
					</view>
					<view class="province-keyboard flex jus-center">
						<view class="td-nor color-333 province-td" v-for="(item,index) in provincesKeyTwo" :key="index"
							@click="provinceKeyClick(item,index)" hover-class="board-active" hover-start-time="0"
							hover-stay-time="80">
							<view class="province-font">
								{{item}}
							</view>
						</view>
					</view>
					<view class="province-keyboard flex jus-center">
						<view class="td-nor color-333 province-td" v-for="(item,index) in provincesKeyThree"
							:key="index" @click="provinceKeyClick(item,index)" hover-class="board-active"
							hover-start-time="0" hover-stay-time="80">
							<view class="province-font">
								{{item}}
							</view>
						</view>
					</view>
					<view class="province-keyboard flex">
						<view class="td-nor color-333 province-td" v-for="(item,index) in provincesKeyFour" :key="index"
							@click="provinceKeyClick(item,index)" hover-class="board-active" hover-start-time="0"
							hover-stay-time="80">
							<view class="province-font">
								{{item}}
							</view>
						</view>
					</view>
					<view @click.stop="backspace" class="delete flex del-province">
						<!-- <img src="../../static/img/del@2x.png" class="del-con" alt=""> -->
					</view>
				</view>
			</template>
			<!--数字键盘-->
			<template v-if="!provinceBoardShow">
				<view class="number-keyboard flex between">
					<template>
						<view class="td td-num color-333" :class="numberIsDis ? 'board-active' : ''"
							v-for="(item,index) in numberKeyList" :key="index" @click="numberKeyClick(item,index)"
							:hover-class="numberIsDis ? '' : 'board-active'" hover-start-time="0" hover-stay-time="80">
							{{item}}
						</view>
					</template>
				</view>
			</template>
			<!--字母键盘-->
			<template v-if="!provinceBoardShow">
				<view class="english-keyboard flex between">
					<template>
						<view class="td td-num color-333" :class="englishIsDis ? 'board-active' : ''"
							v-for="(item,idx) in englishKeyOneList" :key="idx" @click="englishKeyClick(item,idx)"
							:hover-class="englishIsDis ? '' : 'board-active'" hover-start-time="0" hover-stay-time="80">
							{{item}}
						</view>
					</template>
				</view>
				<!-- 最后一行 -->
				<view class="english-keyboard flex between">
					<template>
						<view class="td td-num color-333" :class="englishIsDis ? 'board-active' : ''"
							v-for="(item,index) in englishKeyTwoList" :key="index" @click="englishKeyClick(item,index)"
							:hover-class="englishIsDis ? '' : 'board-active'" hover-start-time="0" hover-stay-time="80">
							{{item}}
						</view>
					</template>

					<!-- 挂字键 -->
					<template>
						<!-- <view @click="trailerFiledClick('港')" class="td td-num color-333"
							:class="trailerFiledIsDis ? 'board-active' : ''"
							:hover-class="trailerFiledIsDis ? '' : 'board-active'" hover-start-time="0"
							hover-stay-time="80">港</view> -->
						<view @click="trailerFiledClick('澳')" class="td td-num color-333"
							:class="trailerFiledIsDis ? 'board-active' : ''"
							:hover-class="trailerFiledIsDis ? '' : 'board-active'" hover-start-time="0"
							hover-stay-time="80">澳</view>
						<view @click="trailerFiledClick('学')" class="td td-num color-333"
							:class="trailerFiledIsDis ? 'board-active' : ''"
							:hover-class="trailerFiledIsDis ? '' : 'board-active'" hover-start-time="0"
							hover-stay-time="80">学</view>
						<view @click="trailerFiledClick('挂')" class="td td-num color-333"
							:class="trailerFiledIsDis ? 'board-active' : ''"
							:hover-class="trailerFiledIsDis ? '' : 'board-active'" hover-start-time="0"
							hover-stay-time="80">挂</view>
						<view @click="trailerFiledClick('警')" class="td td-num color-333"
							:class="trailerFiledIsDis ? 'board-active' : ''"
							:hover-class="trailerFiledIsDis ? '' : 'board-active'" hover-start-time="0"
							hover-stay-time="80">警</view>
					</template>
					<view @click.stop="backspace" class="delete flex">
					</view>
				</view>
			</template>
		</view>
		<view class="footer">
			<view @click="" class="button">
				保存并提交
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "add-car-input",
		data() {
			return {
				current: 0,
				carNumber: [],
				carTypeList: [{
					text: '新能源',
					value: 1,
				}],
				currentIndex: 0,
				provincesKeyList: '京津冀晋蒙辽吉黑',
				provincesKeyTwo: '沪苏浙皖闽赣鲁豫',
				provincesKeyThree: '鄂湘粤桂琼渝川贵',
				provincesKeyFour: '云藏陕甘青宁新',
				provinceBoardShow: true, // 省键盘
				numberKeyList: '1234567890',
				numberIsDis: true, // 输入键盘不可点击 true为不可点击
				englishIsDis: false, // 字母键盘可点击
				englishKeyOneList: 'ABCDEFGHJKLMNPQRSTUV',
				englishKeyTwoList: 'WXYZ',
				trailerFiledIsDis: true, // 挂字禁用
				activeNum: '-1',
				isClickCarNum: false,
				isCheckEnergy: false,
				switchA: false,
				keybardShow: false
			};
		},
		watch: {
			'carNumber.length': {
				handler(newVal, oldValue) {
					this.setTrailerKeyboardDis()
				},
				deep: true
			}
		},
		methods: {
			//  确定按钮
			submit() {
				//普通车车牌校验
				const carCardP =
					/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
				//新能源车牌校验
				const carCardD =
					/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
				let carPlate = this.carNumber.join('')
				if (this.carNumber.length == 0) {
					uni.showToast({
						title: '请输入车牌号',
						icon: 'none',
						duration: 2000
					})
					return;
				}
				if (!carCardP.test(carPlate) && (this.currentIndex == 0)) {
					// 普通车
					uni.showToast({
						title: '车牌号输入有误',
						icon: 'none',
						duration: 2000
					})
					return;
				}
				if (!carCardD.test(carPlate) && this.currentIndex == 1) {
					// 新能源
					uni.showToast({
						title: '车牌号输入有误',
						icon: 'none',
						duration: 2000
					})
					return;
				}
				this.activeNum = "-1";
			},
			// 点击车牌号输入框
			chooseNumber(item, active) {
				if (active == 1) {
					// 第二位
					this.numberIsDis = true
					this.provinceBoardShow = false
				} else if (active == '0') {
					// 第一位
					this.provinceBoardShow = true
					this.numberIsDis = true
				} else {
					this.numberIsDis = false
					this.provinceBoardShow = false
				}
				if (this.currentIndex == 0 && active == '7') {
					// 普通车牌 不让点击一位
				} else {
					this.activeNum = active
					this.current = active
					this.isClickCarNum = true
				}
				if ((this.currentIndex == 0 && this.carNumber.length >= 6 && this.current >= 6) || (this.currentIndex ==
						1 && this.carNumber
						.length >= 7 && this.current >= 7)) {
					this.trailerFiledIsDis = false;
				} else {
					this.trailerFiledIsDis = true;
				}
			},
			// 点击新能源或者普通车
			chooseIsNewEnergy() {
				if (this.currentIndex == 1) {
					this.currentIndex = 0
					if (this.carNumber.length == 8) {
						this.carNumber.pop()
					}
				} else {
					this.currentIndex = 1
					if (this.carNumber.length == 7) {
						this.current = 7
						this.activeNum = 7
					}
				}
				this.$forceUpdate()
			},
			// 省份键盘
			provinceKeyClick(val, index) {
				this.carNumber[0] = val
				this.provinceBoardShow = false
				this.numberIsDis = true;
				this.englishIsDis = false;
				this.current++
				this.activeNum = this.current
				this.$forceUpdate()
			},
			// 数字键盘
			numberKeyClick(val, idx) {
				let flag = this.carNumber.indexOf("") === -1
				if (this.numberIsDis) return
				if ((this.currentIndex == 0 && this.carNumber.length >= 7 && this.current >= 7) || (this.currentIndex ==
						1 && this.carNumber.length >= 8 && this.current >= 8)) {
					return
				}
				this.current++
				this.carNumber[this.current - 1] = val;
				this.setTrailerKeyboardDis()
				this.$forceUpdate()
				this.activeNum = this.current
				this.numberIsDis = false
			},
			// 字母键盘
			englishKeyClick(val, idx) {
				let flag = this.carNumber.indexOf("") === -1
				// this.activeNum = this.carNumber.length
				if (this.englishIsDis) return
				if ((this.currentIndex == 0 && this.carNumber.length >= 7 && this.current >= 7) || (this.currentIndex ==
						1 && this.carNumber.length >= 8 && this.current >= 8)) {
					return
				}
				this.current++
				this.carNumber[this.current - 1] = val;
				if (this.current == 2) this.numberIsDis = false;
				this.setTrailerKeyboardDis()
				this.$forceUpdate()
				this.activeNum = this.current
				this.numberIsDis = false
			},
			// 设置挂车键盘禁用（只能最后一个选择挂）
			setTrailerKeyboardDis() {
				if ((this.currentIndex == 0 && this.carNumber.length >= 6 && this.current >= 6) || (this.currentIndex ==
						1 && this.carNumber
						.length >= 7 && this.current >= 7)) {
					this.trailerFiledIsDis = false;
				} else {
					this.trailerFiledIsDis = true;
				}
			},
			// 点击挂字
			trailerFiledClick(val) {
				if (this.trailerFiledIsDis) return
				if ((this.currentIndex == 0 && this.carNumber.length >= 7 && this.current >= 7) || (this.currentIndex ==
						1 && this.carNumber.length >= 8 && this.current >= 8)) {
					return
				}
				this.current++
				this.carNumber[this.current - 1] = val;
				this.activeNum = this.current
				this.$forceUpdate()
			},
			// 删除键
			backspace() {
				if (this.current < 0) return
				if (this.current == 0) {
					this.provinceBoardShow = true
					this.activeNum = 0
					this.carNumber[0] = ''
					this.$forceUpdate()
					return
					// this.numberIsDis = true
					// this.englishIsDis = true
					// this.trailerFiledIsDis = true
				} else if (this.current == 1) {
					this.provinceBoardShow = true
					this.activeNum = 1
					this.carNumber[1] = ''
				} else if (this.current == 2) {
					this.provinceBoardShow = false
					this.numberIsDis = true
					this.carNumber[this.current] = ''
				} else {
					this.provinceBoardShow = false
					this.carNumber[this.current - 1] = ''
				}
				if ((this.currentIndex == 0 && this.current <= 6) || (this.currentIndex == 1 && this.current <= 7)) {
					this.trailerFiledIsDis = true;
				} else {
					this.trailerFiledIsDis = false;
				}
				this.current--
				this.activeNum = this.current
				this.$forceUpdate()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.containers {
		box-sizing: border-box;
	}

	.finish {
		overflow: hidden;

		.text {
			float: right;
			padding: 0 36rpx;
			margin-bottom: 16rpx;
		}
	}

	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 200rpx;
		background-color: #ffffff;
		box-shadow: 0 0 20px 6px rgba(0, 0, 0, .2);
		padding: 32rpx 48rpx;

		.button {
			width: 80%;
			height: 98rpx;
			line-height: 98rpx;
			border-radius: 98rpx;
			font-size: 14px;
			font-weight: bold;
			text-align: center;
			background-color: #ff5f0f;
			color: #ffffff;
			margin: 0 auto;
		}
	}

	.card {
		min-height: 160rpx;
		background-color: #FFFFFF;
		border-radius: 12px;
		padding: 24rpx;
		margin: 0 auto;
		position: relative;

		.title {
			margin-bottom: 16rpx;
		}

		.text {
			font-size: 12px;
			font-weight: 400;
		}

		.radio {
			position: absolute;
			right: 20rpx;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	.parking-box {
		width: 100%;
		background: #f9dbcd;
		font-size: 44rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		padding: 52rpx 40rpx;
		box-sizing: border-box;

		&>.card {
			margin-top: 40rpx;
		}
	}

	.car_input_box {
		background: #FFFFFF;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		padding: 40rpx 20rpx;
		box-sizing: border-box;

		.small_text {
			font-size: 10px;
			margin-top: 16rpx;
		}

		.list {
			overflow: hidden;

			.item {
				float: left;
				width: 50%;
				padding: 24rpx 28rpx;
				height: 180rpx;

				.item_main {
					background-color: #f5f5f5;
					width: 100%;
					height: 100%;
					border-radius: 8px;
					padding: 16rpx;

					&>.title {}
				}
			}
		}
	}

	@keyframes fade {
		from {
			opacity: 1.0;
		}

		50% {
			opacity: 0;
		}

		to {
			opacity: 1.0;
		}
	}

	@-webkit-keyframes fade {
		from {
			opacity: 1.0;
		}

		50% {
			opacity: 0;
		}

		to {
			opacity: 1.0;
		}
	}

	.flex {
		display: flex;
	}

	.between {
		justify-content: space-between;
		align-items: center;
	}

	.font-30 {
		font-size: 30rpx;
	}

	.color-333 {
		color: #333333;
	}

	.car_type {
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		width: 100%;
		align-items: center;
	}

	.default_car {
		width: 72rpx;
		height: 94rpx;
		background: #FFFFFF;
		border-radius: 4rpx;
		border: 2rpx solid rgba(0, 0, 0, 0.1);
		text-align: center;
		line-height: 94rpx;
		font-size: 40rpx;
		font-weight: bold;
		color: #333333;


	}

	.line {
		color: #EA4070;
		border-radius: 2rpx;
		animation: fade 1500ms infinite;
		-webkit-animation: fade 1500ms infinite;
	}

	.car_type_box {
		display: flex;
		justify-content: start;
		width: 390rpx;
		margin: 0 auto;


	}

	.car_type_item {
		width: 130rpx;
		height: 69rpx;
		border: 1px solid #999999;
		text-align: center;
		line-height: 69rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}

	.check_energy {
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #6D7278;
		display: flex;
		justify-content: flex-end;
		margin-top: 16rpx;
	}

	.check_energy img {
		width: 32rpx;
		height: 32rpx;
		margin-right: 8rpx;
	}

	.car_type_item:nth-child(1) {
		border-radius: 6rpx 0rpx 0rpx 6rpx;
		border-right: 0.5rpx solid #999999;
	}

	.car_type_item:nth-child(2) {
		border-right: none;
		border-left: none;
	}

	.car_type_item:nth-child(3) {
		border-radius: 0rpx 6rpx 6rpx 0rpx;
	}

	.active {
		width: 130rpx;
		height: 69rpx;
		border: 1px solid #999999;
		text-align: center;
		line-height: 69rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		font-weight: bold;
		color: #EA4070;
		background: rgba(#EA4070, .1);
	}

	.active:nth-child(1) {
		border-radius: 6rpx 0rpx 0rpx 6rpx;
		border-right: 0.5rpx solid #999999;
	}

	.active:nth-child(2) {
		border-right: none;
		border-left: none;
	}

	.active:nth-child(3) {
		border-radius: 0rpx 6rpx 6rpx 0rpx;
	}

	.car_number_input {
		margin-top: 40rpx;
	}

	.tips {
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #6D7278;
		margin: 16rpx 24rpx;
	}

	.add_car_box {
		width: calc(100% - 64rpx);
		height: 80rpx;
		background: linear-gradient(180deg, #DF4270, #F299AB);
		border-radius: 40rpx;
		margin: 0 auto;


	}

	.add_car {
		height: 100%;
		line-height: 80rpx;
		font-size: 34rpx;
		font-weight: 500;
		color: #FFFFFF;
		text-align: center;
	}

	.dis_car {
		height: 100%;
		line-height: 80rpx;
		font-size: 34rpx;
		font-weight: 500;
		color: #FFFFFF;
		background: #999999;
		text-align: center;
		border-radius: 40px;
	}

	.keyboard-content {
		width: 100%;
		height: 500rpx;
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: rgba(205, 208, 212, 0.92);
		padding-top: 13rpx;

	}

	.td {
		font-family: "PingFangSC";
		font-size: 34rpx;
		color: #333333;
		font-weight: 500;
		margin: 12rpx 1rpx;
		background: #FCFCFE;
		box-shadow: 0rpx 2rpx 0rpx 0rpx #898A8D;
		border-radius: 9rpx;
		height: 84rpx;
		line-height: 84rpx;
		text-align: center;
		background-color: #fff;
	}

	.province-keyboard {
		margin: 0 5rpx;
		padding: 0 10rpx;
		// flex-wrap: wrap;


	}

	.td-nor {
		// flex: 0 1 9%;
		// margin-right: 3px;
	}

	.number-keyboard {
		margin: 0 5rpx;


	}


	.board-active {
		box-shadow: 0 0 0 #e5e5e5;
		background: #e5e5e5;
	}

	.english-keyboard {
		margin: 0 5rpx;
		flex-wrap: wrap;


	}

	.td-num {
		flex: 0 1 9%;
	}

	.board-active {
		box-shadow: 0 0 0 #e5e5e5;
		background: #e5e5e5;
	}

	.delete {
		width: 144rpx;
		height: 88rpx;
		text-align: center;
		background-color: #AAADB7;
		border-radius: 8rpx;
		// position: absolute;
		// right: 8rpx;
		// bottom: 30rpx;
		justify-content: center;
		align-items: center;
		box-shadow: 0rpx 2rpx 0rpx 0rpx #898A8D;
	}

	.del-province {
		position: absolute;
		right: 28rpx;
		bottom: 13rpx;
		width: 64rpx;
		box-shadow: 0rpx 2rpx 0rpx 0rpx #898A8D;
		border-radius: 9rpx;
		font-family: "PingFangSC";
		font-size: 34rpx;
		color: #333333;
		font-weight: 500;
		// margin: 12rpx auto;
		background: #FCFCFE;
		box-shadow: 0rpx 2rpx 0rpx 0rpx #898A8D;
		border-radius: 9rpx;
		height: 84rpx;
		line-height: 84rpx;
		text-align: center;
		background: #AAADB7;
	}

	.sure {
		width: 100rpx;
		height: 84rpx;
		text-align: center;
		background-color: #AFB2BC;
		border-radius: 8rpx;
		position: absolute;
		right: 10rpx;
		bottom: 30rpx;
		justify-content: center;
		align-items: center;
	}

	.default_dot {
		width: 8rpx;
		height: 8rpx;
		background: #333333;
		margin: 0 4rpx;
	}

	.del-con {
		width: 44rpx;
		height: 32rpx;
	}

	.jus-center {
		justify-content: center;
	}

	.diabled_car {
		background: #F5F5F5;
		border-radius: 4rpx;
		border: 2rpx solid rgba(0, 0, 0, 0.1);
	}

	.active_car {
		border-radius: 4rpx;
		border: 2rpx solid #375DE9;
	}

	.province-mr {
		margin-right: 10rpx;
	}

	.confirm_btn {
		width: 662rpx;
		height: 92rpx;
		line-height: 92rpx;
		background: #11B690;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		border-radius: 46rpx;
		margin-top: 40rpx;
	}

	.province-td {
		width: 12.5%;
	}

	.province-font {
		width: 64rpx;
		box-shadow: 0rpx 2rpx 0rpx 0rpx #898A8D;
		border-radius: 9rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-size: 34rpx;
		color: #000;
		font-weight: 500;
		margin: 12rpx auto;
		box-shadow: 0rpx 2rpx 0rpx 0rpx #898A8D;
		border-radius: 9rpx;
		height: 84rpx;
		line-height: 84rpx;
		text-align: center;
		background-color: #fff;
	}

	.confirm-cash-box {
		width: 100vh;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.7);
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 99;
	}

	.cash-box {
		width: 570rpx;
		//height: 300px;
		background: rgb(223, 223, 223);
		border-radius: 28rpx;
		margin: 30vh auto 0;
		text-align: center;
		min-height: 200rpx;
	}

	.cash-title {
		font-size: 34rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #000000;
		padding-top: 38rpx;
		margin: 0 0 24rpx;
	}

	.content-cash {
		font-size: 26rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #000000;
		margin-bottom: 54rpx;
		padding: 0 32rpx;
	}

	.line-cash {
		width: 100%;
		height: 1rpx;
		background: rgba(60, 60, 67, 0.29);
	}

	.cancel-box {
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		color: #11B690;
		font-size: 32rpx;
		text-align: center;
	}

	.flex-btwn {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>