<template>
  <div id="app">
    <img id="logo" src="./assets/logo.png">

    <router-view :totle="totle"></router-view>
    <div class="footer">
        <router-link  to='/home'>首页</router-link>
    	   <router-link  to='/name'>内容区</router-link>
         <router-link  to='/person'>个人中心</router-link>
  	</div>
 </div>
</template>

<script>
import Navview from './components/nav.vue'
import ContentView from './components/content.vue'  
import FllowView from './components/fllowView.vue' 
var oHtml=document.documentElement;
function changeRem(){
  var oWidth=oHtml.clientWidth&&document.body.clientWidth;
  oHtml.style.fontSize=(oWidth/20)+"px";
};
window.onload=function(){
  changeRem();
};
window.onresize=function(){
 changeRem();
};
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showif:true,
      totle:"App.vue上的数据",
    }
  },
  components:{ 
      Navview,
      ContentView,
      FllowView,
      
  }
}
</script>

<style>
.footer{
  width:100%;height:10%;background:yellow;position:absolute;bottom:0px;
}
.footer a{color:#666;width:33%;box-sizing:border-box;border:0.01rem solid #333;display:flex;align-items:center;justify-content:center;float:left;background:yellow;text-decoration:none;border-radius:0.5rem;min-height:90%}
html,body{
  height:100%;
  width:100%;
}
#logo{position:absolute;top:0;left:0.5rem;width:1.2rem;height:1.2rem;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height:100%;
  width:100%;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
h1, h2 {
  font-weight: normal;
}
div,p,h1,h2,h3,a{margin:0;padding:0}
ul {
  list-style-type: none;
  padding: 0;
}

</style>
