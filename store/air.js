<<<<<<< HEAD
export const state = () => ({
  // 历史搜索记录
  history: [],
  allPrice: 0
});

export const mutations = {
  // 存储历史搜索列表
  setHistory(state, data) {
    state.history.unshift(data);
  },
  // 存储总价格
  setAllPrice(state, price) {
    state.allPrice = price;
  }
}
=======
// state, mutations, actions, getter

export const state = () => ({
    // 历史搜索记录
    history: [],
    allPrice: 0
});

export const mutations = {
    // 存储历史搜索列表
    setHistory(state, data){
        state.history.unshift(data);
    },
    // 存储总价格
    setAllPrice(state, price){
        state.allPrice = price;
    }
}
>>>>>>> c6fa98609e7e47c68750bc11ed17d3c07ac7f54e
