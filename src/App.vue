<template>
  <div id="app">
    <SealPic></SealPic>
    <Demo></Demo>
    <JSXDemo></JSXDemo>
    <CanvasDemo></CanvasDemo>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import SealPic from '@/components/SealPic.vue';
import Demo from '@/components/Demo'
import JSXDemo from '@/components/DemoFor'
import CanvasDemo from '@/components/SealDrawer'
export default {
  name: 'app',
  components: {
    HelloWorld, SealPic, Demo, JSXDemo, CanvasDemo
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
