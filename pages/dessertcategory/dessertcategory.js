// pages/businesscategory/businesscategory.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		show: false,
		swiperCurrent: 0,
		riceCurrent: 0,
		riceNames: [
			"奶盖",
			"气泡水",
			"果汁"
		],
		riceimgUrls: [
      {
        url:'../../images/推荐美食图.png',
      },
      {
        url:'../../images/推荐美食图.png',
      },
      {
        url:'../../images/推荐美食图.png',
			},
			{
        url:'../../images/推荐美食图.png',
			},
			{
        url:'../../images/推荐美食图.png',
      }
    ],
	},
	riceSwiperChange(e) {
		let current = e.detail.current;
		let that = this;
		that.setData({
		swiperCurrent: current,
		riceCurrent: current
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
	tomap () {
		wx.navigateTo({
			url: "../map/map"
		})
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