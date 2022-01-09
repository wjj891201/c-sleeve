import {
  Http
} from "../utils/http";

class Theme {
  static async getHomeLocationA() {
    return await Http.request({
      url: `themes`,
      data: {
        id: '1'
      }
    })
  }
  static async getHomeLocationE() {
    return await Http.request({
      url: `themes`,
      data: {
        id: '2'
      }
    })
  }
}

export {
  Theme
}