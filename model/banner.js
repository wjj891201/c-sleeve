import {
  Http
} from "../utils/http";

class Banner {
  static async getHomeLocationB() {
    return await Http.request({
      url: 'banner',
      data: {
        id: '1'
      }
    })
  }
}

export {
  Banner
}