<template>
  <div id="app">
   <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
    
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
	import MainTabBar from '@/components/content/mainTabbar/MainTabBar'

	export default {
		name: 'app',
		components: {
			MainTabBar
		}
	}
</script>
<style>
	@import url("assets/css/base.css");

</style>
