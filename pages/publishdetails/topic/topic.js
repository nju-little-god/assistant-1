// pages/publishdetails/topic/topic.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    topictitle:null,
    topiccontent:null,
    height: 20,
    focus: false,
    source:''
  },
  topictitle:function(e){
    this.data.topictitle=e.detail.value;
  },

  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages() //  获取页面栈   
    console.log(pages)
    var prevPage = pages[pages.length - 2]    // 上一个页面  
    prevPage.setData({
      // 给上一个页面变量赋值   
      isRouteMy: '2'
    })
  },
  uploadimg: function () {
    var that = this;
    wx.chooseImage({  //从本地相册选择图片或使用相机拍照
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有

      success: function (res) {
        //console.log(res)
        //前台显示
        that.setData({
          source: res.tempFilePaths
        })

        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://www.website.com/home/api/uploadimg',
          filePath: tempFilePaths[0], 
          name: 'file',

          success: function (res) {
            //打印
            console.log(res.data)
          }
        })

      }
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
    if (this.data.isRouteMy == '2') {
      wx.switchTab({
        url: '../../pages/publish/publish',
        success: function (e) {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return; page.onLoad();
        }
      })

    }
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