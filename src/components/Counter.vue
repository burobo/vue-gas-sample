<template>
  <div>
    <p>Counter: {{ count }}</p>
    <button v-on:click="increments">increment</button>
  </div>
</template>

<script>
const Counter = {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
      increments: function () {
          this.$store.commit('increment');
      }
  },
};

export default Counter;
</script>
