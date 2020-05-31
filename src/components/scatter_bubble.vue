<template>
  <div>
    <div id="main1" style="float:left;width:600px;height: 400px"></div>
    <div id="main2" style="float:left;width:600px;height: 400px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.scatter();
    this.bubble();
  },
  methods: {
    scatter() {
      let myChart = this.$echarts.init(document.getElementById("main1"));
      myChart.setOption({
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            data: [
              [10.0, 8.04],
              [8.0, 6.95],
              [13.0, 7.58],
              [9.0, 8.81],
              [11.0, 8.33],
              [14.0, 9.96],
              [6.0, 7.24],
              [4.0, 4.26],
              [12.0, 10.84],
              [7.0, 4.82],
              [5.0, 5.68]
            ],
            type: "scatter"
          }
        ]
      });
    },
    bubble() {
      let myChart = this.$echarts.init(document.getElementById("main2"));
      myChart.setOption({
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            data: [
              [10.0, 8.04],
              [8.0, 6.95],
              [13.0, 7.58],
              [9.0, 8.81],
              [11.0, 8.33],
              [14.0, 9.96],
              [6.0, 7.24],
              [4.0, 4.26],
              [12.0, 10.84],
              [7.0, 4.82],
              [5.0, 5.68]
            ],
            type: "scatter"
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
</style>
