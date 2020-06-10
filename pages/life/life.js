// pages/life/life.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		show: false,
		headimage: "../../images/生活头.png",
		headerimage: "../../images/头像.png",
		name: 'name',
		swiperCurrent: 0,
		drinkimgUrls: [
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
		tag: '享受美好的生活，爱自己'
	},
	riceSwiperChange(e) {
		let current = e.detail.current;
		let that = this;
		that.setData({
		swiperCurrent: current,
		})
	},
	changetag (e) {
		let that = this;
		that.setData({
			tag: e.detail.value
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