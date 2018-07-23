<template>
<div>
	<ul
   v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="0"
  infinite-scroll-immediate-check ="false">
		<li v-for="(data,index) in getComingListFilms" :key="data.id" @click='handleClick( data.name, data.id)'>
			  <img :src="data.poster.origin"/>
	        <div>
	          <h3>{{data.name}}</h3>
	          <p>{{data.intro}}</p>
	        </div>
		</li>
    {{mytext}}
	</ul>
</div>
</template>

<script>
import { mapGetters,mapState } from "vuex";
import router from "@/router";
export default {
  name: "comingsoon",

  data() {
    return {
      mytext:"正在加载中....",
      current:1
    };
  },

  mounted() {
    if (!this.getComingListFilms.length) {
      this.$store.dispatch("comingsoonaction"); // 传递到store 中的action中
    }
  },
  
  computed: {
    ...mapGetters(["getComingListFilms", "getComingTotal"]),
    ...mapState(['comingSooncurrentpage'])
  },

  methods:{
    loadMore(){
      console.log('end')
      this.$store.commit('comingSooncurrentpage')
      if(this.comingSooncurrentpage>this.getComingTotal){
        this.mytext = "没有更多数据了";
        this.loading = true; // 禁用滚动加载功能
        return
      }
      this.$store.dispatch('comingSoonMoreAction',this.comingSooncurrentpage)
    },
    handleClick(name,index){
      this.$store.commit('kerwinchangetitle',name)
      router.push({name:"mydetail",params:{id:index}})
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  li {
    overflow: hidden;
    padding: 10px;
    img {
      float: left;
      width: 100px;
    }
  }
}
</style>