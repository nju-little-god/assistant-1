// pages/moments/moments.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    animationData: {},
    articleList:[{
      icon:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3175633703,3855171020&fm=27&gp=0.jpg',
      title:'标题1',
      nickname:'用户1',
      content:'内容1',
      pic_link: [
        'http://img0.imgtn.bdimg.com/it/u=2277942808,1417432970&fm=27&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=1504812505,3480403568&fm=27&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=3456219059,4251129897&fm=27&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=3912316188,1981132393&fm=27&gp=0.jpg'],
      location:'地点1',
      release_time:'时间1',
      cz_flag: false, // 控制点赞评论按钮
      cz_right: 0, // 点赞评论定位right
      cz_top: 80, // 点赞评论定位top
      dz_id: null, // 点赞评论ID
      praiseFlag: false,
    },
      {
        icon: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3175633703,3855171020&fm=27&gp=0.jpg',
        title: '标题2',
        nickname: '用户2',
        content: '内容2',
        pic_link: [
          'http://img0.imgtn.bdimg.com/it/u=2277942808,1417432970&fm=27&gp=0.jpg',
          'http://img5.imgtn.bdimg.com/it/u=1504812505,3480403568&fm=27&gp=0.jpg',
          'http://img4.imgtn.bdimg.com/it/u=3456219059,4251129897&fm=27&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=3912316188,1981132393&fm=27&gp=0.jpg'],
        location: '地点2',
        release_time: '2019年3月6日15：12'
      },
    ],
    photoWidth: wx.getSystemInfoSync().windowWidth / 5,
  },/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticleList()},
  getArticleList:function(){
    var that=this
    wx.request({
      url: app.baseUrl +'/article/getArticleList',
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": app.globalData.sessionKey
      },
      data: {
      },
      success(res){
        //console.log(res.data.data)
        that.setData({
          articleList:res.data.data
        })
      }
    })
  },
  bindCaoZuo: function (e) {  //评论点赞
    var that = this
    var dz_id = e.currentTarget.dataset.id
    // 获取当前节点的偏移TOP值计算当前点赞操作的位置
    var offsetTop = Math.floor(e.currentTarget.offsetTop)
    // 赋值计算好的TOP值显示按钮
    that.setData({
      dz_id: dz_id,
      cz_top: offsetTop,
      cz_flag: true
    })

    // 动画
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear',
      delay: 0,
    })

    // 0.3秒后滑动
    setTimeout(function () {
      animation.right(40).opacity(1).step()
      that.setData({
        animationData: animation.export()
      })
    }, 300)

    // 5秒后自动隐藏按钮
    var timeout = setTimeout(function () {
      animation.right(0).opacity(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 5000)

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