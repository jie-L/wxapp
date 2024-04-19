// index.js
Page({

  onLoad: function (options) {
    // 页面创建时执行
    this.getImg()
  },

  getImg() {
    // let isloaded = false
    wx.showLoading()
    const times = new Date().getTime()
    console.log('%c [ get ]', 'font-size:14px; background:pink; color:#bf2c9f;', times, this.timestampToDate(times))

    const requestTask = wx.request({
      url: 'https://www.baidu.com',
      method: 'GET',
      data: {
        'abcdefg': times
      },
      success: res => {
        // isloaded = true
        console.log('%c [ res ]', 'font-size:14px; background:pink; color:#bf2c9f;', res, this.timestampToDate(times), '--', this.timestampToDate(new Date().getTime()))
        wx.hideLoading()
        wx.navigateTo({
          url: '/pages/index/index',
        })
      },
      fail: err => {
        wx.hideLoading()
        console.log('%c [ err ]', 'font-size:14px; background:pink; color:#bf2c9f;', err, this.timestampToDate(times), '--', this.timestampToDate(new Date().getTime()))
      }
    })


    // let counters = 0
    // let timer = setInterval(() => {
    //   counters += 1
    //   if (isloaded) {
    //     clearInterval(timer)
    //   } else if (counters >= 2 && !isloaded) {
    //     clearInterval(timer)
    //     timer = null
    //     requestTask.abort()
    //     this.getImg()
    //   }
    // }, 500);
  },

  timestampToDate(timestamp) {
    var date = new Date(timestamp); // 时间戳为毫秒级别
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + h + m + s; // 返回格式：YYYY-MM-DD HH:mm:ss
  }
})