<template>
  <main>
    <px-header />
    <router-view />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader.vue";

export default {
  name: "App",
  components: { PxHeader },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
