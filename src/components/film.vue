<template>
	<div>

		<ul>
			<router-link tag="li" activeClass="active" to="/film/nowplaying">正在热映</router-link>
			<router-link tag="li" activeClass="active" to="/film/comingsoon">即将上映</router-link>
		</ul>

		<!-- 容器入口 -->
	    <router-view></router-view>

	</div>
</template>

<script>
export default {

  name: 'film',

  data () {
    return {

    }
  },

  mounted(){
  	this.$store.commit("kerwinchangetitle","卖座电影");
  }
}
</script>

<style lang="scss" scoped>

	.active{
		background-color: blue;
	}


	ul{
		display: flex;
		li{
			height: 40px;
			line-height: 40px;
			text-align: center;
			flex:1;
		}
	}
</style>