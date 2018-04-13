// pages/new_address/new_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    mobile: "",
    province_name: "省份",
    city_name: "城市",
    district_name: "地区",
    address: "",
    description: "",
    provinces: "test"
  },

  bindInputName: function(e){
    this.setData({
      name: e.detail.value
    })
  },

  bindInputMobile: function(e){
    this.setData({
      mobile: e.detail.value
    })
  },

  bindInputAddress: function(e){
    this.setData({
      address: e.detail.value
    })
  },

  bindInputDescription: function(e){
    this.setData({
      description: e.detail.value
    })
  },

  bindProvinceChange: function(e){
    var province_name = e.detail.value[0];
    var city_name = e.detail.value[1];
    var district_name = e.detail.value[2];
    this.setData({
      province_name: province_name,
      city_name: city_name,
      district_name: district_name
    })
  },

  createAddress: function(e){
    wx.request({
      url: 'http://120.79.51.220/mini/test_addresses',
      data: {
        name: this.data.name,
        mobile: this.data.mobile,
        province_id: this.data.province_name,
        city_name: this.data.city_name,
        district_name: this.data.district_name,
        address: this.data.address,
        description: this.data.description
      },
      method: POST,
      dataType: json,
      success: function(res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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