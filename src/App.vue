<template>
  <div id="app">
    <!-- <SealPic></SealPic> -->
    <Demo></Demo>
    <!-- <JSXDemo></JSXDemo> -->
    <!-- <CanvasDemo></CanvasDemo> -->
    <FunctionalDemo></FunctionalDemo>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import SealPic from '@/components/SealPic.vue';
import Demo from '@/components/Demo'
import JSXDemo from '@/components/DemoFor'
import CanvasDemo from '@/components/SealDrawer'
import FunctionalDemo from '@/components/functional/FunctionalDeml'
export default {
  name: 'app',
  components: {
    HelloWorld, SealPic, Demo, JSXDemo, CanvasDemo, FunctionalDemo
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
