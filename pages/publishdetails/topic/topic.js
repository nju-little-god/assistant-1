const app = getApp()
Page({
  data: {
    pic_link: [],
    content: '',
    moment_src:'../../../image/add.png',
    addressData: null,
    location:false,
  },
  onLoad: function (options) {
  },
  input: function (e) {
    this.setData({
      content: e.detail.value
    })
  },
  chooseimage: function () {
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9 
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        if (res.tempFilePaths.length > 0) {
          //图如果满了9张，不显示加图
          if (res.tempFilePaths.length == 9) {
            that.setData({
              hideAdd: 1
            })
          } else {
            that.setData({
              hideAdd: 0
            })
          }
          //把每次选择的图push进数组
          let pic_link = that.data.pic_link;
          for (let i = 0; i < res.tempFilePaths.length; i++) {
            pic_link.push(res.tempFilePaths[i])
          }
          that.setData({
            pic_link: pic_link
          })
        }
      }
    })
  },
  //发布按钮事件
  createArticle: function () {
    var user_id = wx.getStorageSync('userid')
    wx.showLoading({
      title: '上传中',
    })
    // that.img_upload()
    wx.request({
      url: app.baseUrl +'/article/createArticle',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "sessionKey": app.globalData.sessionKey
      },
      data: {
        title: this.data.title,
        content: this.data.content,
        pic_link: this.data.pic_link,
        location: this.data.location     
         },
      success(res){
        console.log('发布成功')
        wx.showToast({
          title: res.data.message,
          icon: 'success',
          duration: 2000
        })
        setTimeout(function () {
          wx.navigateBack({
            delta: 2
          })
        }, 2000)

      }
    })

  }, 
  setTitle:function(event){
    this.setData({
      title:event.detail.value
    })
  },
  setContent: function (event){
    this.setData({
      content:event.detail.value
    })
  },
  setPic_link:function(event){
    this.setData({
      pic_link:event.detail.value
    })

  },
  setLocation:function(event){
    this.setData({
      location:evevt.detail.value
    })
  },
  bindAddress: function () {
    var that = this

    // 取消选择地理位置后获取当前人经纬度调用后台接口接收当前地理位置
    wx.chooseLocation({
      success: function (lb) {
        //console.log(lb)
        that.data.addressData = lb
        that.setData({
          location: lb.name
        })
        //console.debug(that.data.addressData)  
      },
      cancel: function (lb) // 取消选择
      {
        //that.data.addressData = that.data.userStatus
      },
      fail: function (lb) {
        console.log(lb)
      }
    })
  },

  //图片上传
  // img_upload: function () {
  //   let that = this;
  //   let img_url = that.data.img_url;
  //   let img_url_ok = [];
  //   //由于图片只能一张一张地上传，所以用循环
  //   for (let i = 0; i < img_url.length; i++) {
  //     wx.uploadFile({
  //       //路径填你上传图片方法的地址
  //       url: app.baseUrl + '/article/createArticle',
  //       filePath: img_url[i],
  //       name: 'file',
  //       success: function (res) {
  //         console.log('上传成功');
  //         //把上传成功的图片的地址放入数组中
  //         img_url_ok.push(res.data)
  //         //如果全部传完，则可以将图片路径保存到数据库
  //         if (img_url_ok.length == img_url.length) {
  //           var content = that.data.content;
  //           wx.request({
  //             url: app.baseUrl + '/article/createArticle',
  //             data: {
      
  //               pic_link: img_url_ok,
              
  //             },
  //             success: function (res) {
  //               if (res.data.status == 1) {
  //                 wx.hideLoading()
  //                 wx.showModal({
  //                   title: '提交成功',
  //                   showCancel: false,
  //                   success: function (res) {
  //                     if (res.confirm) {
  //                       wx.navigateTo({
  //                         url: '/pages/moments/moments',
  //                       })
  //                     }
  //                   }
  //                 })
  //               }
  //             }
  //           })
  //         }
  //       },
  //       fail: function (res) {
  //         console.log('上传失败')
  //       }
  //     })
  //   }
  // }
})