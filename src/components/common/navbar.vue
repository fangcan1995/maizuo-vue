<template>
	<nav>
		<div class="left">
			<!-- <i class="iconfont icon-category" @click="handleClick()"></i> -->
			<slot></slot>
			<span>{{title}}</span>
		</div>

		<div class="right">
			<span>大连</span>
			<i class="iconfont icon-account"></i>
		</div>
	</nav>
</template>

<script>
import {mapState} from "vuex";
export default {

  name: 'navbar',

  data () {
    return {

    }
  },

  methods:{
  	handleClick(){
  		this.$emit("event");
  	}
  },
  //1. 放问store中的数据
  // computed:{
  // 	 title(){
  // 	 	return this.$store.state.title;
  // 	 }
  // }
  // 2. 访问store 中数据
  computed:{
  	...mapState(["title"])	
  }
}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>

	nav{
		position:fixed;
		top:0px;
		left:0px;
		width: 100%;
		height: 50px;
		background-color: #282828;
		line-height: 50px;
		color:white;
		.left{
			float:left;
		}

		.right{
			float:right;
		}

		z-index:2;
	}
</style>