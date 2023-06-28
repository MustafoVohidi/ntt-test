import { createStore } from 'vuex'
import * as data from "@/data.json"
export default createStore({
  state: {
    dataFromJSON:{},
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getData(all){
      all.state.dataFromJSON={...JSON.parse(JSON.stringify(data))}
    }
  },
  modules: {
  }
})
