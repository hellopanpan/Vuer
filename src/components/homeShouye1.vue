<template>
	<div class="homeShouye1">
		<h2>{{msg}}</h2>
		<p>{{totle}}</p>
		<p>{{computednum}}</p>
	</div>
</template>
<script>
	export default{
		props:['totle'],
		data(){
			return{
				'msg':'首页一的内容',
				"ntotle": this.totle

			}

		},
		computed:{
				"computednum":function(){
					return this.totle+"homeshouye上计算";
				}

			

		}



	}
</script>
<style>
	.homeShouye1{width:100%;height:100%;background:#faa}
</style>