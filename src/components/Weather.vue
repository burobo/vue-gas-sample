<template>
  <div>
    <p>Weather: {{ weather }}</p>
  </div>
</template>

<script>
const Weather = {
  data: function () {
    return {
      weather: "",
    };
  },
  mounted: function () {
    this.axios
      .get(
        "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json?__time__=202102240506"
      )
      .then((response) => (this.weather = response.data.text));
  },
};

export default Weather;
</script>
