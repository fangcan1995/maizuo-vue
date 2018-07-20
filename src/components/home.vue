<template>
	<div>
      <swipe class="my-swipe">
        <swipe-item v-for="data in looplist" :key="data.id">
            <img :src="data.imageUrl"/>
        </swipe-item>
      </swipe>


      <ul>
        <li v-for="data in datalist">

          <img :src="data.cover.origin"/>
          {{data.name}}
        </li>
      </ul>
  </div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';

import axios from "axios";
import { Indicator } from 'mint-ui';

// Vue.component('swipe', Swipe);
// Vue.component('swipe-item', SwipeItem);


export default {

  name: 'home',

  data () {
    return {
      datalist:[],
      looplist:[]
    }
  },

  mounted (){
  	//数据请求
  	//https://m.maizuo.com/v4/api/billboard/home?__t=1514532132963
    
    Indicator.open('加载中...');
  	axios.get("/v4/api/billboard/home?__t=1514532132963").then(res=>{
  		console.log(res.data); // 后端响应数据的位置

      this.looplist = res.data.data.billboards

      Indicator.close();
  	})

    // https://m.maizuo.com/v4/api/film/now-playing?__t=1514533608807&page=1&count=5

    axios.get("/v4/api/film/now-playing?__t=1514533608807&page=1&count=5").then(res=>{
      console.log(res.data); // 后端响应数据的位置
    
      this.datalist = res.data.data.films
    })


    //
    Promise.all([axios.get("/v4/api/billboard/home?__t=1514532132963"),
      axios.get("/v4/api/film/now-playing?__t=1514533608807&page=1&count=5")
      ]).then(res=>{
      console.log(res);
    })
  },
  components:{
    "swipe":Swipe,
    "swipe-item":SwipeItem
  }
}
</script>

<style lang="scss" scoped>

  ul{
    li{
      padding:10px;
      // width: 100%;
      img{
        width: 100%;
      }
    }
  }
  

  .my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;

  img{
    width: 100%;
  }
}


</style>