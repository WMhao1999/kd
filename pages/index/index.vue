<template>
	<view class="content">
		<statusBar></statusBar>
		<view class="search">
			<view class="city">
				北京
			</view>
			<view class="search_main">
				<view class="icon cuIcon-search"></view>
				<view class="holder">
					搜索目的地/电站
				</view>
			</view>
		</view>
		<scroll-view @scroll="handleScroll" scroll-y="true" class="main">
			<view style="height: 100%;">
				<view class="banner">
					<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true"
						:circular="true" :autoplay="true" interval="5000" duration="500" @change="cardSwiper"
						indicator-color="#8799a3" indicator-active-color="#0081ff">
						<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
							<view class="swiper-item">
								<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
								<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false"
									objectFit="cover" v-if="item.type=='video'"></video>
							</view>
						</swiper-item>
					</swiper>
				</view>
				<scroll-view scroll-x="true" show-scrollbar="true" class="iconMethods">
					<view>
						<view v-for="(item, index) in iconMethodList" :key="index" class="item">
							<view :class="item.color + ' itemIcon'">
								<view class="title">
									{{item.name}}
								</view>
								<image :src="item.icon" class="img"></image>
							</view>
							<view class="title">
								{{item.title}}
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="list">
					<view class="filter">
						<view class="item" @click="setModal(0)">
							{{filter_title.f1}}
							<view class="icon cuIcon-triangledownfill"></view>
						</view>
						<view class="item" @click="setModal(1)">
							{{filter_title.f2}}
							<view class="icon cuIcon-triangledownfill"></view>
						</view>
						<view class="item" @click="setModal(2)">
							{{filter_title.f3}}
							<view class="icon cuIcon-triangledownfill"></view>
						</view>
						<view class="item" @click="setModal(3)">
							{{filter_title.f4}}
							<view class="icon cuIcon-triangledownfill"></view>
						</view>
					</view>
					<scroll-view scroll-x="true" show-scrollbar="true" class="quickFilter" :style="dynamicStyle">
						<view>
							<view v-for="(item, index) in quick_filter" :key="index"
								:class="(item.active ? 'active' : '') + ' item'" @click="quickFilterClick(item)">
								{{item.name}}
							</view>
						</view>
					</scroll-view>
					<view class="list_main">
						<view v-for="(item, index) in list_data" :key="index" class="item">
							<listItem :config="item"></listItem>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 筛选面板 -->
		<view class="cu-modal bottom-modal" :class="showModal?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<!-- f1 -->
					<view v-if="filter_type==0" class="action text-green"></view>
					<view v-if="filter_type==0" class="action text-blue" @tap="showModal=false">取消</view>
					<!-- f2 -->
					<view v-if="filter_type==1" class="action text-green" @tap="controlFilter2('reset')">重置</view>
					<view v-if="filter_type==1" class="action text-blue" @tap="controlFilter2('confirm')">确定</view>
					<!-- f3 -->
					<view v-if="filter_type==2" class="action text-green" @tap="controlFilter3('reset')">重置</view>
					<view v-if="filter_type==2" class="action text-blue" @tap="controlFilter3('confirm')">确定</view>
				</view>
				<view class="padding-xl" v-if="filter_type==0">
					<view class="filter1_list">
						<view v-for="(item,index) in filter1_list" :key="index" @click="selectFilter1(item)"
							:class="(item.id == filter1_active ? 'active':'') + ' item'">
							{{item.name}}
						</view>
					</view>
				</view>
				<view class="padding-xl" v-if="filter_type==1">
					<view class="filter1_list">
						<view v-for="(item,index) in filter2_list" :key="index" @click="selectFilter2(item)"
							:class="(item.active?'active':'') + ' item'">
							{{item.name}}
						</view>
					</view>
				</view>
				<view class="padding-xl" v-if="filter_type==2">
					<view class="filter1_list">
						<view v-for="(item,index) in filter3_list" :key="index" @click="selectFilter2(item)"
							:class="(item.active?'active':'') + ' item'">
							{{item.name}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 右侧筛选面板 -->
		<view class="detail_filter" :style="{left:(rightModalShow?'0':'100%')}">
			<view class="returnIcon">
				<view @click="rightModalShow=false" class="icon cuIcon-back"></view>
				<view class="text">
					智能筛选
				</view>
			</view>
			<scroll-view scroll-y="true" class="detail_filter_main">
				<view>
					<view v-for="(item,index) in detailFilter" :key="index" class="filterItem">
						<view class="title">
							{{item.title}}
						</view>
						<view class="options">
							<view v-for="(ite,ind) in item.options" :key="ind" @click="selectOptions(ite)"
								:class="ite.active?'active':''">
								{{ite.name}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="filter_btn solid-top">
				<button @click="controlDetailFilter('reset')" class="cu-btn lg round" style="float: left;">默认</button>
				<button @click="controlDetailFilter('confirm')" class="cu-btn lg round bg-orange"
					style="float: right;">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getIndexInArray
	} from "@/common/utils.js";
	import listItem from "@/component/list_item.vue";

	export default {
		components: {
			listItem
		},
		data() {
			return {
				filter_fixed: false,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}],
				dotStyle: true,
				cardCur: 0,
				iconMethodList: [{
						name: "签到",
						title: "签到有礼",
						color: "bg-red",
						icon: "../../static/image/home/calendar.svg",
						id: 0
					},
					{
						name: "会员",
						title: "开通会员",
						color: "bg-yellow",
						icon: "../../static/image/home/business-icon-buyers-club.svg",
						id: 1
					},
					{
						name: "领券",
						title: "领券中心",
						color: "bg-orange",
						icon: "../../static/image/home/coupon.svg",
						id: 2
					},
					{
						name: "碳积分",
						title: "碳积分专区",
						color: "bg-green",
						icon: "../../static/image/home/assessed-badge.svg",
						id: 3
					},
					{
						name: "抽奖",
						title: "赢季度会员",
						color: "bg-blue",
						icon: "../../static/image/home/charts-pie.svg",
						id: 4
					},
					{
						name: "通知",
						title: "重要通知",
						color: "bg-pink",
						icon: "../../static/image/home/message-comments.svg",
						id: 5
					}
				],
				showModal: false,
				filter_type: 0,
				filter_title: {
					f1: "智能推荐",
					f2: "停车费",
					f3: "快慢冲",
					f4: "筛选"
				},
				filter1_list: [{
					name: "智能推荐",
					id: 0
				}, {
					name: "距离较近",
					id: 1
				}, {
					name: "价格较低",
					id: 2
				}, {
					name: "充电较快",
					id: 3
				}, {
					name: "空闲较多",
					id: 4
				}],
				filter1_active: 0,
				filter2_list: [{
					name: "收费停车",
					id: 0,
					active: false
				}, {
					name: "限时免费停车",
					id: 1,
					active: false
				}, {
					name: "免费停车",
					id: 2,
					active: false
				}],
				filter3_list: [{
					name: "快充",
					id: 0,
					active: false
				}, {
					name: "慢充",
					id: 1,
					active: false
				}],
				list_data: [{
						title: "开迈斯充电站(北京市海淀区大南路)",
						round_date: 24,
						price: 1.48,
						special_offer: true,
						vip_price: 1.42,
						tips: ["碳积分最高抵1.00元", "充电险"],
						distance: 3.76,
						car_count: 8,
						used: 6,
						p_tips: "限时免费停车: 绑定车牌,充电，1小时内免费,超时按电费算",
						id: 0
					},
					{
						title: "开迈斯充电站(北京市海淀区龙德购物广场)",
						round_date: 24,
						price: 1.91,
						special_offer: false,
						vip_price: 1.84,
						tips: ["充电险"],
						distance: 4.49,
						car_count: 5,
						used: 3,
						p_tips: "收费停车: 8元每小时",
						id: 1
					},
					{
						title: "开迈斯充电站(北京市国家体育馆南门)",
						round_date: 12,
						price: 1.50,
						special_offer: true,
						vip_price: 1.42,
						tips: [],
						distance: 8.71,
						car_count: 84,
						used: 64,
						p_tips: "限时免费停车: 绑定车牌",
						id: 2
					},
					{
						title: "开迈斯充电站(北京市海淀区大南路)",
						round_date: 24,
						price: 1.48,
						special_offer: true,
						vip_price: 1.42,
						tips: ["碳积分最高抵1.00元", "充电险"],
						distance: 3.76,
						car_count: 8,
						used: 6,
						p_tips: "限时免费停车: 绑定车牌,充电，1小时内免费,超时按电费算",
						id: 3
					},
					{
						title: "开迈斯充电站(北京市海淀区龙德购物广场)",
						round_date: 24,
						price: 1.91,
						special_offer: false,
						vip_price: 1.84,
						tips: ["充电险"],
						distance: 4.49,
						car_count: 5,
						used: 3,
						p_tips: "收费停车: 8元每小时",
						id: 4
					},
					{
						title: "开迈斯充电站(北京市国家体育馆南门)",
						round_date: 12,
						price: 1.50,
						special_offer: true,
						vip_price: 1.42,
						tips: [],
						distance: 8.71,
						car_count: 84,
						used: 64,
						p_tips: "限时免费停车: 绑定车牌",
						id: 5
					}
				],
				quick_filter: [{
						name: "快速稳定",
						id: 0,
						active: false
					},
					{
						name: "VIP站",
						id: 1,
						active: false
					},
					{
						name: "免费停车",
						id: 2,
						active: false
					},
					{
						name: "快电优选",
						id: 3,
						active: false
					},
					{
						name: "饮用水",
						id: 4,
						active: false
					}
				],
				rightModalShow: false,
				detailFilter: [{
						title: "运营类型",
						options: [{
							name: "公共站",
							active: false
						}, {
							name: "个人站",
							active: false
						}]
					},
					{
						title: "电桩类型",
						options: [{
							name: "快充",
							active: false
						}, {
							name: "慢充",
							active: false
						}]
					},
					{
						title: "停车费",
						options: [{
							name: "收费停车",
							active: false
						}, {
							name: "限时免费停车",
							active: false
						}, {
							name: "免费停车",
							active: false
						}]
					},
					{
						title: "营销活动",
						options: [{
								name: "天天特价",
								active: false
							}, {
								name: "限时特价",
								active: false
							},
							{
								name: "818特价站",
								active: false
							},
							{
								name: "充电险",
								active: false
							},
							{
								name: "休闲配套",
								active: false
							},
							{
								name: "特患站",
								active: false
							}
						]
					},
					{
						title: "位置",
						options: [{
							name: "地上",
							active: false
						}, {
							name: "地下",
							active: false
						}, {
							name: "室内",
							active: false
						}]
					},
					{
						title: "站点设施",
						options: [{
							name: "卫生间",
							active: false
						}, {
							name: "休息室",
							active: false
						}, {
							name: "大车能充电",
							active: false
						}, {
							name: "便利店",
							active: false
						}, {
							name: "餐饮",
							active: false
						}, {
							name: "饮用水",
							active: false
						}, {
							name: "750V",
							active: false
						}, {
							name: "自动售货机",
							active: false
						}, {
							name: "有人值守",
							active: false
						}, {
							name: "洗车免费",
							active: false
						}, {
							name: "共享充电宝",
							active: false
						}, {
							name: "洗车",
							active: false
						}, {
							name: "雨棚",
							active: false
						}, {
							name: "可降地锁",
							active: false
						}]
					},
					{
						title: "站点等级",
						options: [{
							name: "普通",
							active: false
						}, {
							name: "优选",
							active: false
						}, {
							name: "精选",
							active: false
						}, {
							name: "星级",
							active: false
						}]
					},
					{
						title: "其它",
						options: [{
							name: "精品站",
							active: false
						}, {
							name: "快电优选",
							active: false
						}, {
							name: "出租车特惠",
							active: false
						}, {
							name: "进门需登记",
							active: false
						}, {
							name: "油车占位严重",
							active: false
						}, {
							name: "低价特惠",
							active: false
						}, {
							name: "商家会员卡",
							active: false
						}, {
							name: "只对内部开放",
							active: false
						}, {
							name: "超时占位收费",
							active: false
						}]
					}
				]
			}
		},
		methods: {
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			setModal(type) {
				if (type == 3) {
					this.rightModalShow = true;
				} else {
					this.showModal = true;
				};
				this.filter_type = type;
			},
			selectFilter1(data) {
				this.filter1_active = data.id;
				this.filter_title.f1 = data.name;
				this.showModal = false;
			},
			selectFilter2(data) {
				data.active = !data.active;
			},
			controlFilter2(type) {
				if (type === "reset") {
					this.filter2_list.forEach(item => {
						item.active = false;
					})
				};
				if (type === "confirm") {
					let title = "";
					this.filter2_list.forEach(item => {
						if (item.active) {
							title += item.name + ",";
						}
					});
					if (!title) {
						title = "停车费"
					};
					this.filter_title.f2 = title;
					this.showModal = false;
				}
			},
			controlFilter3(type) {
				if (type === "reset") {
					this.filter3_list.forEach(item => {
						item.active = false;
					})
				};
				if (type === "confirm") {
					let title = "";
					this.filter3_list.forEach(item => {
						if (item.active) {
							title += item.name + ",";
						}
					});
					if (!title) {
						title = "快慢冲"
					};
					this.filter_title.f3 = title;
					this.showModal = false;
				}
			},
			hideModal() {
				this.rightModalShow = false;
			},
			quickFilterClick(data) {
				data.active = !data.active;
			},
			handleScroll(e) {
				const scrollTop = e.detail.scrollTop;
				if (scrollTop >= 300) {
					this.filter_fixed = true;
				} else {
					this.filter_fixed = false;
				}
			},
			selectOptions(data) {
				data.active = !data.active
			},
			controlDetailFilter(type) {
				if (type === "reset") {
					this.detailFilter.forEach(item => {
						item.options.forEach(ite => {
							ite.active = false;
						})
					})
				};
				if (type === "confirm") {
					this.rightModalShow = false;
				};
			}
		},
		computed: {
			dynamicStyle() {
				if (this.filter_fixed) {
					return {
						position: 'fixed',
						top: "80rpx",
						left: 0,
						"z-index": 999,
						"background-color": "#f6f6f6"
					};
				} else {
					return {}; // 默认样式或其他样式  
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		padding: 16rpx 0rpx;
		background-color: #f6f6f6;
	}

	.search {
		width: 80%;
		height: 64rpx;
		// background-color: #f4f4f4;
		background-color: #ffffff;
		border-radius: 64rpx;
		margin: 0 auto;

		.city {
			width: 120rpx;
			float: left;
			text-align: center;
			line-height: 64rpx;
			height: 64rpx;
			font-size: 12px;
			position: relative;

			&::after {
				content: "";
				position: absolute;
				width: 1px;
				height: 36rpx;
				background-color: #e5e5e5;
				right: 0;
				top: 14rpx;
				display: block;
			}
		}

		.search_main {
			padding-left: 26rpx;
			float: left;
			width: calc(100% - 120rpx);

			.icon {
				line-height: 64rpx;
				display: inline-block;
				margin-right: 20rpx;
				color: #a7a7a9;
			}

			.holder {
				display: inline-block;
				font-size: 12px;
				color: #a7a7a9;
			}
		}
	}

	.main {
		width: 100%;
		height: calc(100% - 152rpx);

		.iconMethods {
			height: 140rpx;
			white-space: nowrap;
			padding: 0 20rpx;
			margin-bottom: 30rpx;

			.item {
				display: inline-block;
				width: 140rpx;
				height: 140rpx;
				padding: 10rpx;

				.itemIcon {
					width: 90rpx;
					height: 90rpx;
					border-radius: 16px;
					padding-top: 12rpx;
					margin: 0 auto 8rpx;
					text-align: center;
					overflow: hidden;

					.title {
						font-size: 12px;
						font-weight: bold;
						color: #FFFFFF;
						text-align: center;
					}

					.img {
						width: 70rpx;
						height: 70rpx;
					}
				}

				.title {
					font-size: 12px;
					text-align: center;
				}
			}
		}

		.list {
			width: 100%;
			min-height: calc(100% - 590rpx);
			background-color: #FFFFFF;
			border-radius: 16px 16px 0 0;
			padding: 16rpx;

			.filter {
				display: flex;
				height: 40rpx;
				margin-bottom: 26rpx;

				.item {
					flex: 1;
					text-align: center;
					font-size: 14px;
					position: relative;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;

					.icon {
						position: absolute;
						right: 0;
						top: 50%;
						transform: translateY(-50%);
						font-size: 24px;
					}
				}
			}

			.quickFilter {
				height: 70rpx;
				white-space: nowrap;
				padding: 20rpx 20rpx 0;
				margin-bottom: 30rpx;
				background-color: #FFFFFF;

				.item {
					display: inline-block;
					height: 40rpx;
					line-height: 38rpx;
					font-size: 12px;
					padding: 0 16rpx;
					background-color: #f5f5f5;
					border-radius: 8px;
					margin: 0 8rpx;
					border: 1px solid transparent;
				}

				.active {
					background-color: #ffefe7;
					border: 1px solid #ff5f0f;
					color: #ff5f0f;
				}
			}

			.list_main {

				.item {
					width: 100%;
					height: 280rpx;
					background-color: #FFFFFF;
					margin-bottom: 30rpx;
				}
			}
		}
	}

	.padding-xl {
		background-color: #fff;
		border-top: 1px solid #cccccc;
		padding: 0;

		.filter1_list {
			padding: 16rpx 30rpx;

			.item {
				padding: 0 20rpx;
				border-bottom: 1px solid #f4f4f4;
				height: 80rpx;
				line-height: 80rpx;
				font-size: 14px;
				text-align: left;
			}
		}

		.active {
			color: #ff5f0f;
		}
	}

	.detail_filter {
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 100%;
		top: 0;
		z-index: 99999;
		background-color: #FFFFFF;
		padding: 16rpx 20rpx;
		transition: .3s all;

		.returnIcon {
			height: 60rpx;
			font-size: 20px;
			line-height: 60rpx;
			text-align: center;
			margin-bottom: 30rpx;

			.text {
				font-size: 14px;
			}

			.icon {
				float: left;
			}
		}

		.detail_filter_main {
			height: calc(100% - 180rpx);

			.filterItem {
				margin-bottom: 30rpx;

				.title {
					font-size: 16px;
					font-weight: bold;
					margin-bottom: 24rpx;
				}

				.options {

					view {
						width: 30%;
						font-size: 14px;
						height: 66rpx;
						line-height: 66rpx;
						background-color: #f2f2f2;
						color: #666666;
						margin: 0 1.5% 30rpx;
						text-align: center;
						border-radius: 4px;
						display: inline-block;
					}

					.active {
						background-color: #ffedec;
						color: #ff5f0f;
					}
				}
			}
		}

		.filter_btn {
			text-align: center;
			padding-top: 14rpx;

			button {
				width: 300rpx;
			}
		}
	}
</style>