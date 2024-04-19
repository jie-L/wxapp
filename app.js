// app.js
App({
  onLaunch() {
    wx.onNetworkStatusChange((res) => {
      console.log('%c [ onNetworkStatusChange ]', 'font-size:14px; background:pink; color:#bf2c9f;', res)
      // 当网络状态变化时，重新加载当前页面
      // if (res.isConnected === true && res.networkType === 'wifi') {
      //   wx.reLaunch({
      //     url: "/pages/screen/index",
      //   });
      // }
    });
  }

})