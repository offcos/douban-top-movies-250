Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = this.options.id 
    console.log(id)

    wx.showLoading({
      title: '加载中...',
    })

    wx.request({
      url: `https://www.newfq.com/doubanapi/v0/movie/detail/${id}`,
      success: (res)=>{
        // console.log(res)
        const movie = res.data.data
        this.setData({movie})

        wx.hideLoading()
      }
    })
  },
})