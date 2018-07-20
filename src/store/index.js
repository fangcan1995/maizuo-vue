import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
import  axios from "axios";

const store = new Vuex.Store({
	state:{
		title:"卖座电影",
		comingsoon:null
	},

	actions:{
		comingsoonaction:function(store,payload){
			// store ,是当前store
			// 异步请求
			axios.get("/v4/api/film/coming-soon?page=1&count=7").then(res=>{
				console.log(res.data);
				store.commit("kerwincomingsoon",res.data);
			})
		}
	},


	getters:{
		getComingListFilms:function(state){
			return state.comingsoon?state.comingsoon.data.films:[]
		},
		getComingTotal:function(state){
			return state.comingsoon?state.comingsoon.data.page.total:0
		}
	},

	mutations:{
		kerwinchangetitle:function(state,payload){
			// 只做同步
			console.log(payload);
			state.title = payload;
		},
		kerwincomingsoon:function(state,payload){
			state.comingsoon = payload;
		}
	}
})

export default store;