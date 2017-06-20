<template>
	<div class="homeShouye2">
		<p @click="change">首页2可点击切换组件</p>
		<component v-bind:is="currentView">
		</component>
	</div>
	
</template>
<style>
	.homeShouye2{width:100%;height:100%;background:#f9a}
</style>
<script>

import Home2 from "./homeShouye3.vue"
var Home = {
  template: '<p>Welcome home!</p>'
};
export default{
	data(){
		return {
			"currentView": "Home"
		}

	},
	components:{
		Home,
		Home2
	},
	methods:{
		change(){
			if(this.currentView=="Home"){
				this.currentView="Home2";
			}else{
				this.currentView="Home";
			}
			
		}
	}
}


</script>