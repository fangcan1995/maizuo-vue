import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import HomeComponent from "@/components/home.vue";
import FilmComponent from "@/components/film.vue";
import CardComponent from "@/components/card.vue";

import NowplayingComponent from "@/components/nowplaying.vue";
import ComingSoonComponent from "@/components/comingsoon.vue";
import DetailComponent from "@/components/detail";

Vue.use(Router) //注册路由


const router = new Router({
  mode:"hash", //两种模式 hash ,history
  routes: [
    {
      path: '/home',
      component: HomeComponent,

      //  components: {
      //   default: Foo,
      //   a: Bar,
      //   b: Baz
      // }
    },
    {
    	path:"/film",
    	component:FilmComponent,
      children:[
        {
          path:"nowplaying", // /film/nowplaying
          component:NowplayingComponent
        },
        {
          path:"comingsoon", // /film/comingsoon
          component:ComingSoonComponent
        },
        {
          path:"/",
          redirect:'/film/nowplaying' //重定向
        }
      ]
    },
    {
    	path:"/card",
    	component:CardComponent
    },

    {
      path:"/detail/:id", //  /detail/dwa 动态路由
      name:"mydetail",
      component:DetailComponent
    },

    {
      path:"*",
      redirect:"/home" //重定向
    }
  ]
})


export default router;
