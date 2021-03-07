import { request } from "../../request/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    catList: [],
    floorList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getCatList()
    this.getFloorList()
  },
  getCatList() {
    request("get","/home/catitems").then( 
      res => {
        let { message, meta } = res.data
        if(meta.status === 200) {
          this.setData( {
            catList: message
          })
        }
      }
    )
  },
  getSwiperList() {
    request("get","/home/swiperdata").then( 
      res => {
        let { message, meta } = res.data
        if(meta.status === 200) {
          this.setData( {
            swiperList: message
          })
        }
      }
    )
  },
  getFloorList() {
    request("get","/home/floordata").then( 
      res => {
        let { message, meta } = res.data
        if(meta.status === 200) {
          this.setData( {
            floorList: message
          })
        }
      }
    )
  }
})