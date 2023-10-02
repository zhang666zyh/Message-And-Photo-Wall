import { createStore } from 'vuex'

// 创建一个新的store实例
const store = createStore({
  state () {
    return {
      typeId: 0, // 留言墙 or 照片墙 切换
    }
  },
  mutations: {
    changeType (state, payload) {
      state.typeId = payload.id
    }
  },
  getters: {
    getTypeId (state) {
      return state.typeId
    }
  }
})

export default store
