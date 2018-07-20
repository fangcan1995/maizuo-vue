<template>

	<transition name="bounce">
	<aside v-show="myshow">
		<ul @click="handleClick()">
          <router-link to="/home" tag="li" activeClass="active">首页</router-link>
          <router-link to="/film" tag="li" activeClass="active">film</router-link>
          <router-link to="/card" tag="li" activeClass="active">card</router-link>
        </ul>
	</aside>

	</transition>
</template>

<script>
export default {

  name: 'siderbar',

  props: ["myshow"], //子组件接受父组件的属性

  data () {
    return {

    }
  },

  methods:{
  	handleClick(){
  		// this.myshow = false; // 不能直接修改父组件的属性
  		this.$emit("event");
  	}
  }
}
</script>

<style lang="scss" scoped>
	aside{
		position:fixed;
		top:50px;
		left:0px;
		width: 50%;
		height: 100%;
		background-color: #282828;
		color:white;
		z-index:1;
	}


	.bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0%{
        transform: translateX(-100%);
        opacity: 0;
      }

      100%{
        transform: translateX(0px);
        opacity: 1;
      }
    }
</style>