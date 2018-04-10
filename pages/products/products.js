// pages/products/products.js
Page({

  showProduct: function(e){
    console.log(e);
    // var product = this.data.products[e.currentTarget.id]
    var the_product_id = this.data.products[e.currentTarget.id].id
    var the_product_name = this.data.products[e.currentTarget.id].name
    var the_product_price = this.data.products[e.currentTarget.id].price
    var the_product_pic_url_gold = JSON.stringify(this.data.products[e.currentTarget.id].pic_url_golds)
    var pic_url_thumb = this.data.products[e.currentTarget.id].pic_url_thumb
    console.log(the_product_pic_url_gold);
    console.log("测试");
    wx.navigateTo({
      url: '../product_detail/product_detail?product_id=' + the_product_id + '&product_name=' + the_product_name + '&product_price=' + the_product_price + '&product_pic=' + the_product_pic_url_gold + '&pic_url_thumb=' + pic_url_thumb
      // url: '../product_detail/product_detail?product=' + product
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    products:[
      { name: "商品1", price: "12", pic_url_thumb: "/images/products/01.jpg" },
      { name: "商品2", price: "12", pic_url_thumb: "/images/products/02.jpg" },
      { name: "商品3", price: "12", pic_url_thumb: "/images/products/03.jpg" },
      { name: "商品4", price: "12", pic_url_thumb: "/images/products/04.jpg" }],
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
    var a = this.data.products
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