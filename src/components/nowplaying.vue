<template>
	<div>

	<ul 
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="0"
  infinite-scroll-immediate-check ="false"
  >
		<!-- <router-link v-for="data in datalist" to="/detail" tag="li">
			{{data}}   （声明式导航）
		</router-link> -->

		<li v-for="(data,index) in datalist" @click="handleClick(data.name,data.id)" :key="data.id">
			  <img :src="data.poster.origin"/>
        <div>
          <h3>{{data.name}}</h3>
          <p>{{data.intro}}</p>
        </div>
		</li>
	</ul>
    <div>
      {{mytext}}
    </div>
	</div>
</template>

<script>
import axios from "axios";
import router from "@/router";


export default {

  name: 'nowplaying',

  data () {
    return {
    	datalist:[],
      loading:false,
      current:1,
      total:0,
      mytext:"正在加载中...."
    }
  },


  mounted () {
    // offset =28 &count=7
    axios.get("/v4/api/film/now-playing?page=1&count=7").then(res=>{
      console.log(res.data);
      this.datalist =res.data.data.films;
      this.total = res.data.data.page.total; //总页数
    })
  },

  methods:{
  	handleClick(name,index){
  		//js 实现路由跳转 ---> 编程式导航
  		//
  		//router.push(`/detail/${index}`); // /detail/
  	
      //把当前的结果 存到store中。
      
      this.$store.commit("kerwinchangetitle",name)


  		router.push({name:"mydetail",params:{id:index}});
  	},

    loadMore(){
      console.log("底部了");
      this.current++;
      if(this.current>this.total){
        this.mytext= "没有更多数据了";
        this.loading = true;// 禁用滚动加载功能
        return;
      }

      axios.get(`/v4/api/film/now-playing?page=${this.current}&count=7`).then(res=>{
        console.log(res.data);
        this.datalist =[...this.datalist,...res.data.data.films]
      })
    }
  }
}
</script>

<style lang="scss" scoped>

  ul{
    li{
      overflow: hidden;
      padding: 10px;
      img{
        float:left;
        width: 100px;
      }
    }
  }
</style>