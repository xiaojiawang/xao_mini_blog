// pages/product_detail/product_detail.js
Page({

  gotoMain: function(e){
    console.log("测试111111");
    wx.switchTab({
      url: '../products/products'
    })
  },

  goShopCar: function(e){
    console.log("测试22222");
    wx.switchTab({
      url: '../shopcart/shopcart'
    })
  },

  toAddShopCar: function(e){
    this.setData({
      hideShopPopup: false
    })
  },

  closePopupTap: function(e){
    this.setData({
      hideShopPopup: true
    })
  },

  numJiaTap: function() {
     if(this.data.buyNumber < this.data.buyNumMax){
        var currentNum = this.data.buyNumber;
        currentNum++ ;
        this.setData({
            buyNumber: currentNum
        })
     }
  },
  numJianTap: function(){
     if(this.data.buyNumber > this.data.buyNumMin){
        var currentNum = this.data.buyNumber;
        currentNum--;
        this.setData({
            buyNumber: currentNum
        })
     }
  },
  addShopCar: function(){
    var shopping_cart = this.buildShoppingCart();
    this.setData({
      shopping_cart: shopping_cart
    });

    // 写入本地存储
    wx.setStorage({
      key: "shopping_cart",
      data: shopping_cart
    })
    this.closePopupTap();
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 2000
    })
  },

  buildShoppingCart: function(){
    var current_shop_cart = {};
    current_shop_cart.product_id = this.data.product_id;
    current_shop_cart.product_name = this.data.product_name;
    current_shop_cart.price = this.data.product_price;
    current_shop_cart.pic = this.data.pic_url_thumb;
    current_shop_cart.num = this.data.buyNumber;
    var shopping_cart = this.data.shopping_cart;
    if (!shopping_cart.shop_num) {
      shopping_cart.shop_num = 0;
      shopping_cart.shop_list = [];
    }
    for (var i = shopping_cart.shop_list.length - 1; i >= 0; i--) {
      if(shopping_cart.shop_list[i].product_id == current_shop_cart.product_id){
        current_shop_cart.num += shopping_cart.shop_list[i].num;
        shopping_cart.shop_list.splice(i, 1);
        break;
      }
    }

    // for (var i = 0; i < shopCarInfo.shopList.length; i++) {
    //   var tmpShopCarMap = shopCarInfo.shopList[i];
    //   if (tmpShopCarMap.goodsId == shopCarMap.goodsId && tmpShopCarMap.propertyChildIds == shopCarMap.propertyChildIds) {
    //     hasSameGoodsIndex = i;
    //     shopCarMap.number = shopCarMap.number + tmpShopCarMap.number;
    //     break;
    //   }
    // }
    shopping_cart.shop_num += this.data.buyNumber;
    shopping_cart.shop_list.push(current_shop_cart);
    return shopping_cart
  },

  /**
   * 页面的初始数据
   */
  data: {
    hideShopPopup: true,
    product: "空",
    product_id: "没拿到值",
    product_name: "没拿到值",
    imgurl: [
    {pic_url_thumb: "/images/products/01.jpg" },
    {pic_url_thumb: "/images/products/02.jpg" },
    {pic_url_thumb: "/images/products/03.jpg" },],
    buyNumber: 1,
    buyNumMin: 1,
    buyNumMax: 100,
    shopping_cart: {},
    shop_list: [],
    shop_num: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var gold_pic = JSON.parse(options.product_pic);
    that.setData({
      // product: options.product
      product_id: options.product_id,
      product_name: options.product_name,
      product_price: options.product_price,
      product_pic: gold_pic,
      pic_url_thumb: options.pic_url_thumb
    })
    // console.log(this.data.product_pic);

    // 初始化购物车的数据
    wx.getStorage({
      key: 'shopping_cart',
      success: function(res) {
        that.setData({
          shopping_cart: res.data,
          shop_list: res.data.shop_list,
          shop_num: res.data.shop_num
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