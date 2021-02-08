App({
// 全局共享数据
  globalData: {
    access_token: ''
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // this.globalData.access_token = 'aaa'
    wx.request({
      method: 'POST',
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=tQGYek5vYIGvwZxSvwfQj3na&client_secret=qogAdzPxz0AIL8SPr5pWTGG3NmH7p9Sj',
      success: (res) => {
        // console.log(res)
        this.globalData.access_token = res.data.access_token
      },
      fail: () => {
        wx.showToast({
          title: '鉴权失败！',
        })
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
