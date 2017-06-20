<template>
	<div class="shouye">
		<div class="header">
			<router-link to="/home/shouye1">首页1</router-link >
			<router-link to="/home/shouye2">首页2</router-link >
			<router-link to="/home/shouye3">首页3</router-link >
		</div>
		<div class="page1">
			<router-view :totle="totle"></router-view>
			
		</div>
	</div>
</template>
<script>	
	export default{
		props:["totle"],
		data(){
			return{
				msg:"6666",
				arr:['hhh','yyyy','lllll']

			}

		}


	}
</script>
<style>
	.shouye{height:90%;width:100%;background:#999;}
	.shouye .header{height:10%;width:100%;margin:0;background:yellow;}
	.shouye .page1{height:90%;width:100%;;box-sizing:border-box;}
	.shouye h3{font-size:0.4rem;font-weight:normal;color:green;}
	.shouye .header a{color:#f66;width:33%;box-sizing:border-box;display:flex;align-items:center;justify-content:center;float:left;background:yellow;text-decoration:none;border-radius:0.5rem;max-height:100%}
</style>