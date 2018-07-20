<template>
    <div>
       <navbar @event="handleEvent">
         <i class="iconfont icon-category" @click="isShow=!isShow"></i>
       </navbar>

       <sidebar :myshow="isShow" @event="handleEvent"></sidebar>       
        <!-- 路由容器 -->
        <section>
          <router-view></router-view>
        </section>
       
    </div>
</template>

<script>
import navbar from "@/components/common/navbar";
import sidebar from "@/components/common/siderbar";

export default {
  name: 'app',

  data(){
    return {
      isShow:false
    }
  },

  components:{
    navbar,
    sidebar
  },

  methods:{
    handleEvent(){
      // console.log("1111");
      this.isShow = !this.isShow;
    }
  }
}
</script>

<style  lang="scss">

.active{
  background-color: red;
}

*{
  margin:0px;
  padding:0px;
}

html,body{
  width:100%;
  height:100%;
}

li{
  list-style: none;
}

section{
  position:relative;
  top:50px;
}

</style>
