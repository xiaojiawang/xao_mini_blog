// pages/products/products.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products:[
      { name: "商品111121", price: "12", url: "/images/products/01.jpg" },
      { name: "商品2", price: "12", url: "/images/products/02.jpg" },
      { name: "商品3", price: "12", url: "/images/products/03.jpg" },
      { name: "商品4", price: "12", url: "/images/products/04.jpg" }],
    test: "测试",
    blogs: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://120.79.51.220/wap/products',
      dataType: 'json',
      success: function (res) {
        console.log(res.data.products);
        that.setData({
          products: res.data.products
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