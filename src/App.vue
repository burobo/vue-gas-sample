<template>
  <div id="app">
    <p>App: {{ count }}</p>
    <counter />
    <weather />
    <my-backend />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Weather from "./components/Weather.vue";
import MyBackend from "./components/MyBackend.vue";

export default {
  name: "App",
  components: {
    Counter,
    Weather,
    MyBackend
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>