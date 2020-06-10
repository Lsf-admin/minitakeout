// pages/foodcategory/foodcategory.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		show: false,
		swiperCurrent: 0,
		riceCurrent: 0,
		foodcategory: [
			{
				foodname: "饮品",
				friedrice: [
					{
					url:'../../images/推荐美食图.png',
					nam: '一点点',
					class: '饮品店'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '益禾堂',
						class: '饮品店'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '鹿角巷',
						class: '饮品店'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '1点点',
						class: '饮品店'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '古茗',
						class: '饮品店'
					},
				]
			},
			{
				foodname: "甜点",
				friedrice: [
					{
					url:'../../images/推荐美食图.png',
					nam: '甜点店1',
					class: '甜点'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '甜点店2',
						class: '甜点'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '甜点店3',
						class: '甜点'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '甜点店4',
						class: '甜点'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '甜点店5',
						class: '甜点'
					},
				]
			},
			{
				foodname: "水果",
				friedrice: [
					{
					url:'../../images/推荐美食图.png',
					nam: '水果店1',
					class: '水果'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '水果店2',
						class: '水果'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '水果店3',
						class: '水果'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '水果店4',
						class: '水果'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '水果店5',
						class: '水果'
					},
				]
			}
		]
//做个分界线		
		// riceNames: [
		// 	"饮品",
		// 	"甜点",
		// 	"水果",
		// ],
		// riceimgUrls: [
    //   {
		// 		url:'../../images/推荐美食图.png',
		// 		nam: '经典奶盖'
    //   },
    //   {
		// 		url:'../../images/推荐美食图.png',
		// 		nam: '泡芙'
    //   },
    //   {
		// 		url:'../../images/推荐美食图.png',
		// 		nam: '蓝莓'
		// 	},
		// 	{
    //     url:'../../images/推荐美食图.png',
		// 	},
		// 	{
    //     url:'../../images/推荐美食图.png',
    //   }
    // ],
	},
	riceSwiperChange(e) {
		let current = e.detail.current;
		let that = this;
		that.setData({
		swiperCurrent: current,
		})
	},
	todessert () {
		wx.navigateTo ({
			url: "../dessertcategory/dessertcategory"
		}) 
	},
	onMyEvent: function (e) {
    this.setData({
      show: e.detail.myshow
    })
	},
	onhisEvent: function (e) {
    this.setData({
      show: e.detail.hisshow
    })
	},
	changeclass (e) {
		this.setData({
			riceCurrent: e.currentTarget.dataset.id,
			swiperCurrent: 0
		})
		console.log(e.currentTarget.dataset.id)
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}


	
})