<template>
  <div>
    <div id="main1" style="width:600px;height:400px;"></div>
    <div id="main2" style="width:600px;height:400px;"></div>
    <div id="main3" style="width:600px;height:400px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.zhe();
    this.bar1();
    this.bar2();
  },
  methods: {
    bar2(){
      var myChart = this.$echarts.init(document.getElementById("main3")); // 绘制图表
      myChart.setOption({
        title:{
          text:"某地区蒸发量与降水量",
          subText:"纯属虚构"
        },
        tooltip:{
          trigger:"axios"
        },
        legend:{
          data:["蒸发量","降水量"]
        },
        xAxis: [
        {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "蒸发量",
          type: "bar",
          data: [
            2.0,
            4.9,
            7.0,
            23.2,
            25.6,
            76.7,
            135.6,
            162.2,
            32.6,
            20.0,
            6.4,
            3.3
          ],
        },
        {
          name: "降水量",
          type: "bar",
          data: [
            10.0,
            24.9,
            30.0,
            24.2,
            25.6,
            52.7,
            121.6,
            121.2,
            44.6,
            33.0,
            1.4,
            1.3
          ],
        }
      ]
      })
    },
    bar1() {
      var myChart = this.$echarts.init(document.getElementById("main2")); // 绘制图表
      myChart.setOption({
        title: {
          text: "柱状图"
        },
        legend: {
          data: ["销量"]
        },
        tooltip: {
          trigger: "item"
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name:"销量",
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar"
          }
        ]
      });
    },
    zhe() {
      var myChart = this.$echarts.init(document.getElementById("main1")); // 绘制图表
      myChart.setOption({
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
</style>
