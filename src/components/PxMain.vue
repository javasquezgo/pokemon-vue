<template>
  <div class="w-9/12 h-auto bg-gray-600 mx-auto mt-24 text-center">
    <h1 class="text-6xl">{{ assets.name }}</h1>
    <p>{{ assets.types[0].type.name }}</p>
    <figure class="bg-red-500 mx-auto text-center w-max">
      <img v-bind:src="assets.sprites.front_default" v-bind:alt="assets.name" />
    </figure>
  </div>
</template>
<script>
export default {
  name: "PxMain",
  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
