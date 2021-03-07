export const request =  function(method, url, header = {}, data = {}) {
  // 启动时可将storage中的令牌挂到app.js 
  // let token = app.assess_token
  // if (token) {
  //   header["Authorization"] = token
  // }
  return new Promise((resolve, reject) => {
    wx.request({
      method, 
      url: "https://api-hmugo-web.itheima.net/api/public/v1" + url,
      header, 
      data,
      success(res) {
        // 请求成功
        if (res.statusCode === 200) {
          resolve(res)
        }
        // 请求成功无响应体
        else if (res.statusCode === 204) {
          /* 
          可做一些成功提示，
          如调用wx.showToast()、wx.showModal()或自定义弹出层等 
          */
          resolve(res)
        }
        // 未认证
        else if (res.statusCode === 401) {
          /* 可做一些错误提示，或者直接跳转至登录页面等 */
          reject(res)
        }
        else if (res.statusCode == 400) {
        /* 可做一些错误提示*/
          reject(res)
        }
        else if (res.statuCode === 403) {
          /* 无权限错误提示*/
          reject(res)
        }
        // ...其他状态码处理
      },
      fail(err) {
        /* 可做一些全局错误提示，如网络错误等 */
        reject(err)
      }
    })
  })
}