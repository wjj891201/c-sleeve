import {
  Http
} from "../utils/http";

class Activity {
  static async getHomeLocationD() {
    return await Http.request({
      url: 'activity',
      data: {
        id: '1'
      }
    })
  }
}

export {
  Activity
}