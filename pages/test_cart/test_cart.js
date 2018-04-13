// pages/test_cart/test_cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  shopcart_list: [],
  minnum: 1,
  total_price: 0
  },

  selectList: function(e){
    var a = e.currentTarget.dataset.index;
    this.data.shopcart_list[a].selected = !this.data.shopcart_list[a].selected
    this.setData({
      shopcart_list: this.data.shopcart_list
    })
    this.countTotalPrice();
  },
  numJiaTap: function(e) {
    var current_product_index = e.currentTarget.dataset.index;
    this.data.shopcart_list[current_product_index].num += 1;
    this.setData({
      shopcart_list: this.data.shopcart_list
    })
    this.countTotalPrice();
  },
  numJianTap: function(e){
    var current_product_index = e.currentTarget.dataset.index;
    if (this.data.shopcart_list[current_product_index].num > 1) {
      this.data.shopcart_list[current_product_index].num -= 1;
      this.setData({
        shopcart_list: this.data.shopcart_list
      })
    }
    this.countTotalPrice();
  },
  deleteList: function(e){
    var current_product_index = e.currentTarget.dataset.index;
    this.data.shopcart_list.splice(current_product_index, 1);
    this.setData({
      shopcart_list: this.data.shopcart_list
    })
    this.countTotalPrice();
  },
  countTotalPrice: function(){
    var count_list = [];
    for (var i = this.data.shopcart_list.length - 1; i >= 0; i--) {
      if (this.data.shopcart_list[i].selected == true) {
        count_list.push(i);
      }
    }
    var total_price = 0;
    for (var i = count_list.length - 1; i >= 0; i--) {
      var a = count_list[i];
      total_price += this.data.shopcart_list[a].num * this.data.shopcart_list[a].price;
    }
    this.setData({
      total_price: total_price
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var shopcart_list = wx.getStorageSync('shopping_cart');
    this.setData({
      shopcart_list: shopcart_list.shop_list
    })
    this.countTotalPrice();
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