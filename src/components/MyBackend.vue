<template>
  <div>
    <p>MyBackend: {{ myBackend }}</p>
  </div>
</template>

<script>
const MyBackend = {
  data: function () {
    return {
      myBackend: "",
    };
  },
  mounted: function () {
    this.greet("this is frontend.", (res, uo) => uo.myBackend = res, (res) => `fail ${res}`, this)  
  },
};

export default MyBackend;
</script>
