import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
import  axios from "axios";

const store = new Vuex.Store({
	state:{
		title:"卖座电影",
		nowplaying:null,
		nowplayingmore:null,
		nowfilms:[],
		nowplayingcurrentpage:1,
		comingSooncurrentpage:1,
		comfilms:[],
		comingsoon:null,
		comingsoonmore:null,
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
		},
		nowplayingmoreaction:function(store,payload){
			console.log(payload)
			axios.get(`/v4/api/film/now-playing?page=${payload}&count=7`).then(res=>{
				console.log(res.data);
				store.commit("nowplayingmroe",res.data);
			})
		},
		comingSoonMoreAction:(store,payload)=>{
			console.log(payload)
			axios.get(`v4/api/film/coming-soon?page=${payload}&count=7`).then(res=>{
				console.log(res.data)
				store.commit("comingSoonMore",res.data)
			})
		}
	},


	getters:{
		getComingListFilms:function(state){
			state.comfilms=[...state.comfilms,...state.comingsoonmore?state.comingsoonmore.data.films:state.comingsoon?state.comingsoon.data.films:[]]
			return state.comfilms
		},
		getComingTotal:function(state){
			return state.comingsoon?state.comingsoon.data.page.total:0
		},
		getNowListFilms:function(state){
			state.nowfilms=[...state.nowfilms,...state.nowplayingmore?state.nowplayingmore.data.films:state.nowplaying?state.nowplaying.data.films:[]] 	
			return state.nowfilms
		},
		getNowTotal:function(state){
			return state.nowplaying?state.nowplaying.data.page.total:0
		},
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
		},
		nowplayingmroe:(state,payload)=>{
			state.nowplayingmore = payload
		},
		nowplayingcurrentpage:(state,payload)=>{
			state.nowplayingcurrentpage = state.nowplayingcurrentpage+1
		},
		comingSooncurrentpage:(state,payload)=>{
			state.comingSooncurrentpage = state.comingSooncurrentpage+1
		},
		comingSoonMore:(state,payload)=>{
			state.comingsoonmore = payload
		}
	}
})

export default store;