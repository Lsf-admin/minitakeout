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
				foodname: "炒饭",
				friedrice: [
					{
					url:'../../images/推荐美食图.png',
					class: '素菜',
					nam: '洋芋丝炒饭'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '青椒肉丝炒饭',
						class: '猪肉'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '芹菜牛肉炒饭',
						class: '牛肉'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '回锅肉炒饭',
						class: '猪肉'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '老干妈鸡蛋炒饭',
						class: '蛋类'
					},
				]
			},
			{
				foodname: "盖饭",
				friedrice: [
					{
					url:'../../images/推荐美食图.png',
					class: '素菜',
					nam: '洋芋丝盖饭'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '青椒肉丝盖饭',
						class: '猪肉'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '芹菜牛肉盖饭',
						class: '牛肉'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '回锅肉盖饭',
						class: '猪肉'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '老干妈鸡蛋盖饭',
						class: '蛋类'
					},
				]
			},
			{
				foodname: "泡饭",
				friedrice: [
					{
					url:'../../images/推荐美食图.png',
					class: '素菜',
					nam: '酸菜汤泡饭'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '猪肝汤泡饭',
						class: '猪肉'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '牛肉汤泡饭',
						class: '牛肉'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '排骨汤泡饭',
						class: '猪肉'
					},
					{
						url:'../../images/推荐美食图.png',
						nam: '番茄鸡蛋汤泡饭',
						class: '蛋类'
					},
				]
			}
		]
// 做个分界线
		// riceNames: [
		// 	"炒饭",
		// 	"盖饭",
		// 	"泡饭",
		// 	"米饭"
		// ],
		// riceimgUrls: [
    //   {
		// 		url:'../../images/推荐美食图.png',
		// 		nam: '青椒洋芋丝炒饭'
    //   },
    //   {
		// 		url:'../../images/推荐美食图.png',
		// 		nam: '回锅肉盖饭'
    //   },
    //   {
		// 		url:'../../images/推荐美食图.png',
		// 		nam: '猪肚鸡泡饭'
		// 	},
		// 	{
		// 		url:'../../images/推荐美食图.png',
		// 		nam: '大米饭'
		// 	},
		// 	{
		// 		url:'../../images/推荐美食图.png',
		// 		nam: '爱啥啥饭'
    //   }
    // ],
	},

	// 这是方法
	riceSwiperChange(e) {
		let current = e.detail.current;
		let that = this;
		that.setData({
		swiperCurrent: current,
		//riceCurrent: current
		})
	},
	tobusiness () {
		wx.navigateTo ({
			url: "../businesscategory/businesscategory"
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
	onLoad: function () {

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