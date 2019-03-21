// pages/moments/moments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    DataSource:[{
      icon:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3175633703,3855171020&fm=27&gp=0.jpg',
      title:'标题1',
      nickname:'用户1',
      content:'内容1',
      resource: [
        'http://img0.imgtn.bdimg.com/it/u=2277942808,1417432970&fm=27&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=1504812505,3480403568&fm=27&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=3456219059,4251129897&fm=27&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=3912316188,1981132393&fm=27&gp=0.jpg'],
      address:'地点1',
      time:'时间1'
    },
      {
        icon: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3175633703,3855171020&fm=27&gp=0.jpg',
        title: '标题2',
        nickname: '用户2',
        content: '内容2',
        resource: [
          'http://img0.imgtn.bdimg.com/it/u=2277942808,1417432970&fm=27&gp=0.jpg',
          'http://img5.imgtn.bdimg.com/it/u=1504812505,3480403568&fm=27&gp=0.jpg',
          'http://img4.imgtn.bdimg.com/it/u=3456219059,4251129897&fm=27&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=3912316188,1981132393&fm=27&gp=0.jpg'],
        address: '地点2',
        time: '2019年3月6日15：12'
      },
    ],
    photoWidth: wx.getSystemInfoSync().windowWidth / 5,
    popTop: 0, //弹出点赞评论框的位置
    popWidth: 0, //弹出框宽度
    isShow: true, //判断是否显示弹出框
  },
  // 删除
  delete: function () {
    wx.showToast({
      title: '删除成功',
    })
  },
  TouchDiscuss: function (e) {
    // this.data.isShow = !this.data.isShow
    // 动画
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'linear',
      delay: 0,
    })

    if (that.data.isShow == false) {
      that.setData({
        popTop: e.target.offsetTop - (e.detail.y - e.target.offsetTop) / 2,
        popWidth: 0,
        isShow: true
      })

      // 0.3秒后滑动
      setTimeout(function () {
        animation.width(0).opacity(1).step()
        that.setData({
          animation: animation.export(),
        })
      }, 100)
    } else {
      // 0.3秒后滑动
      setTimeout(function () {
        animation.width(120).opacity(1).step()
        that.setData({
          animation: animation.export(),
        })
      }, 100)

      that.setData({
        popTop: e.target.offsetTop - (e.detail.y - e.target.offsetTop) / 2,
        popWidth: 0,
        isShow: false
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  LookPhoto: function (e) {
    wx.previewImage({
      current: e.currentTarget.dataset.photurl,
      urls: this.data.resource,
    })
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