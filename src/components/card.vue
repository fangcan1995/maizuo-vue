<template>
	<div>
		<el-button>默认按钮</el-button>
		  <el-button type="primary" round>主要按钮</el-button>
		  <el-button type="success" round>成功按钮</el-button>
		  <el-button type="info">信息按钮</el-button>
		  <el-button type="warning">警告按钮</el-button>
		  <el-button type="danger">危险按钮</el-button>

		    <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>


		    <el-switch
			  v-model="value2"
			  active-color="#13ce66"
			  inactive-color="#ff4949">
			</el-switch>
			  <el-button :plain="true" @click="open">打开消息提示</el-button>
	
	<el-carousel :interval="4000" type="card" height="200px">
	    <el-carousel-item v-for="item in 6" :key="item">
	      <h3>{{ item }}</h3>
	    </el-carousel-item>
   </el-carousel>



	</div>
</template>

<script>
export default {

  name: 'card',

  data () {
    return {
    	num1:1,
    	value2:true
    }
  },

  methods:{
  	handleChange(num){
  		console.log(num);
  	},
  	 open() {
        this.$message('这是一条消息提示');
      },
  }
}
</script>

<style lang="css" scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>