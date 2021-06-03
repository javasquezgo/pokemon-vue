<template>
  <px-main v-bind:assets="assets" />
</template>
<script>
import api from "@/api.js";
import PxMain from "@/components/PxMain.vue";

export default {
  name: "Home",
  components: { PxMain },

  data() {
    return {
      assets: [],
    };
  },

  created() {
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .catch((err) => console.error(err + "sdsdjsd"));
  },
};
</script>
