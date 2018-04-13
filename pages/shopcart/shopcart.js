//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    product_list: []
  },
  //事件处理函数
  onLoad: function () {

  },
  onShow: function() {
    this.setData({
      product_list: wx.getStorageSync('shopping_cart').shop_list
    })
    console.log(this.data.product_list);
    console.log("测试");
  }
})
