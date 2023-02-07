// pages/demo-data/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "georgayang",
    imgSrc: "http://www.itheima.com/images/logo.png",
    count: 0,
  },

  tapHandler(e) {
    console.log('param: ', e.target.dataset.param);
    console.log('param: ', e.target.dataset);
    
    const query = wx.createSelectorQuery();
    const ele = query.select('.ball');
    console.log(ele)
    this.setData({
      count: this.data.count + 1
    })
  },

  inputHandler(e) {
    console.log(e.detail.value);
    this.setData({
      count: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})