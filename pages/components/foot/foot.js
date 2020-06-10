// pages/components/foot/foot.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		show: {
			type: Boolean,
			value: false
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		myshow: null
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		tolife () {
			wx.navigateTo ({
				url: "/pages/life/life"
			})
		},
		tofirstpage () {
			wx.navigateBack ({
				delta: 1
			})
		},
		showgr () {
			this.setData({
				myshow: this.properties.show
			})
			this.triggerEvent('myevent', { myshow: true })
		}
	}
})
