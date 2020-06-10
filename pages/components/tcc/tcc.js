// pages/components/tcc1/tcc.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		show: {
			type: Boolean,
			value: true
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		hisshow: null
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		tomap () {
			wx.navigateTo({
				url: "../map/map"
			}) 
		},
		tomycenter () {
			wx.navigateTo({
				url: "../mycenter/mycenter"
			}) 
		},
		changehidden () {
			this.setData({
				hisshow: this.properties.show
			})
			this.triggerEvent('hisevent', { hisshow: false })
		},
	}
})
