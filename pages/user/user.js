Page({
  data: {
    avataUrl: "",
    nickName: " 无名",
    city: "",
    province: ""
  },
  onLoad:function(options){
    wx.getUserInfo({
      success:(res)=>{
        console.log(res)
        this.setData({
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName,
          city: res.userInfo.city,
          province: res.userInfo.province
        })
      }
    })
  }
})