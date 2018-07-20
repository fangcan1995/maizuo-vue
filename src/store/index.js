import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
import  axios from "axios";

const store = new Vuex.Store({
	state:{
		title:"卖座电影",
		comingsoon:null,
		nowplaying:null,
		nowplayingmore:null,
		nowfilms:[]
	},

	actions:{
		comingsoonaction:function(store,payload){
			// store ,是当前store
			// 异步请求
			axios.get("/v4/api/film/coming-soon?page=1&count=7").then(res=>{
				console.log(res.data);
				store.commit("kerwincomingsoon",res.data);
			})
		},
		nowplayingaction:function(store,payload){
			axios.get("/v4/api/film/now-playing?page=1&count=7").then(res=>{
				console.log(res.data);
				store.commit("kerwinnowplaying",res.data);
			})
		}
	},


	getters:{
		getComingListFilms:function(state){
			return state.comingsoon?state.comingsoon.data.films:[]
		},
		getComingTotal:function(state){
			return state.comingsoon?state.comingsoon.data.page.total:0
		},
		getNowListFilms:function(state){
			debugger
			state.nowfilms=[...state.nowfilms,...state.nowplayingmore?state.nowplayingmore.data.films:state.nowplaying?state.nowplaying.data.films:[]] 	
			return state.nowfilms
		},
		getNowTotal:function(state){
			return state.nowplaying?state.nowplaying.data.page.total:0
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
		},
		kerwinnowplaying:function(state,payload){
			state.nowplaying = payload
		}
	}
})

export default store;