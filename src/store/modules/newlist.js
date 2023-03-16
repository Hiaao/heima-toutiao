import axios from "axios"
export default {
    namespaced: true,
    state: {
        // 放置所有的数据 { 分类id：列表1，分类id：列表2 }
        allData: {}
    },
    mutations: {
        // payload载荷 传入多个数据 { 当前分类：列表 }
        updatedList(state, { currentCatagtory, list }) {
            // 将state.allData之前的值赋给现在，达到响应式的效果
            // , [currentCatagtory]: list 在后面追加这个属性，多个追加达到更新属性的效果
            state.allData = { ...state.allData, [currentCatagtory]: list }
        }
    },
    actions: {
        // 通过传递的方式 得到分类 id
        async getNewList(context, cataId) {
            const { data: { data: { results } } } = await axios.get(`http://toutiao.itheima.net/v1_0/articles?channel_id=${cataId}&timestamp=${Date.now()}`);
            // results：新闻列表
            context.commit('updatedList', { currentCatagtory: cataId, list: results })
        }
    }
}