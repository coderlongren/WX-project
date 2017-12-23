// pages/pageone/pageone.js
var app = getApp();
var common = require("../../utils/common.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    localdata: 10,
     globaldata: app.myglobalData
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("pagene onload")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("pagene onready")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("pagene on show")
    common.say("coderlong")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("pagene onHide")
  },

  /** 自定义函数 */
  changevalue:function(){
    this.setData({
      localdata:++this.data.localdata

    }) 
  },
  changevalue1:function(){
    this.setData({
      globaldata: ++app.myglobalData
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("pagene onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("pageone onPullDownRefresh");
    wx.showLoading({
      title: 'loading',
    })

    setTimeout(function(){
      wx.hideLoading();
    },1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("pageone onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("pages onShareAppMessage");
  },
  onPageScroll(e){
    console.log(e)
  },

})