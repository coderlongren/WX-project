// pages/icon/icon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear']
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
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
      Math.abs(5)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
        var persion = {};
        persion.name = "sailong";
        persion.age = 12;
        // console.log(1 === 1)
        console.log(persion)
        var array = [1,2,3]
        console.log(array.constructor)
        var number = 10;
        console.log("Number" === number.constructor);

        var string = "str";
        console.log("String" === string.constructor);

        var boolean = true;
        console.log("Boolean" === boolean.constructor);

        var object = {};
        console.log("Object" === object.constructor);

        var func = function () { };
        console.log("Function" === func.constructor);

        var array = [];
        console.log("Array" === array.constructor);
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