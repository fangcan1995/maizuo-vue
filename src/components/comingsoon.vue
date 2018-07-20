<template>
<div>
	{{getComingTotal}}
	<ul>
		<li v-for="(data,index) in getComingListFilms" :key="data.id">
			  <img :src="data.poster.origin"/>
	        <div>
	          <h3>{{data.name}}</h3>
	          <p>{{data.intro}}</p>
	        </div>
		</li>
	</ul>
</div>
</template>

<script>
import {mapGetters} from "vuex";
export default {

  name: 'comingsoon',

  data () {
    return {

    }
  },

  mounted(){

  	if(!this.getComingListFilms.length){
  		this.$store.dispatch("comingsoonaction");// 传递到store 中的action中
  	}
  	
  },

  computed:{
  	...mapGetters(["getComingListFilms","getComingTotal"])
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