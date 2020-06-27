
<template>
  <h1 class="top" @click="hello">hello world</h1>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "qj-seal-pic",
  methods: {
    hello() {
      console.log("hello world");
    }
  }
});
</script>
