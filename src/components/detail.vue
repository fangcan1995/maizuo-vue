<template>
	<div v-if="filminfo">
		
		<img :src="filminfo.cover.origin"/>
		<h2>{{filminfo.name}}</h2>
		<p>{{filminfo.synopsis}}</p>
	</div>
</template>

<script>
import axios from "axios";
export default {

  name: 'detail',

  data () {
    return {
    	filminfo :null
    }
  },

  mounted () {

  	console.log(this.$route.params.id);


  	axios.get(`/v4/api/film/${this.$route.params.id}?__t=1514854928004`).then(res=>{
  		console.log(res.data);
  		this.filminfo= res.data.data.film
  	})
  }
}
</script>

<style lang="scss" scoped>
   img{
   	width: 100%;
   }
</style>