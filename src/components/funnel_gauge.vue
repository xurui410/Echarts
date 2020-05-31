<template>
  <div>
    <div id="main1" style="float:left;width:600px;height: 400px"></div>
    <div id="main2" style="float:left;width:600px;height: 400px"></div>
    <div id="main3" style="float:left;width:600px;height: 400px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.funnel();
    this.gauge1();
    this.gauge2();
  },
  methods: {
    gauge2() {
      let myChart = this.$echarts.init(document.getElementById("main3"));
      let option = {
          title:{
              text:'仪表盘'
          },
        tooltip: {
          formatter: "{a} <br/>{c} {b}"
        },
        toolbox: {
          show: true,
          feature: {
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: "速度",
            type: "gauge",
            z: 3,
            min: 0,
            max: 220,
            splitNumber: 11,
            radius: "50%",
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 10
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto"
              }
            },
            splitLine: {
              // 分隔线
              length: 20, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "auto"
              }
            },
            axisLabel: {
              backgroundColor: "auto",
              borderRadius: 2,
              color: "#eee",
              padding: 3,
              textShadowBlur: 2,
              textShadowOffsetX: 1,
              textShadowOffsetY: 1,
              textShadowColor: "#222"
            },
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: "bolder",
              fontSize: 20,
              fontStyle: "italic"
            },
            detail: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              formatter: function(value) {
                value = (value + "").split(".");
                value.length < 2 && value.push("00");
                return (
                  ("00" + value[0]).slice(-2) +
                  "." +
                  (value[1] + "00").slice(0, 2)
                );
              },
              fontWeight: "bolder",
              borderRadius: 3,
              backgroundColor: "#444",
              borderColor: "#aaa",
              shadowBlur: 5,
              shadowColor: "#333",
              shadowOffsetX: 0,
              shadowOffsetY: 3,
              borderWidth: 2,
              textBorderColor: "#000",
              textBorderWidth: 2,
              textShadowBlur: 2,
              textShadowColor: "#fff",
              textShadowOffsetX: 0,
              textShadowOffsetY: 0,
              fontFamily: "Arial",
              width: 100,
              color: "#eee",
              rich: {}
            },
            data: [{ value: 40, name: "km/h" }]
          },
          {
            name: "转速",
            type: "gauge",
            center: ["20%", "55%"], // 默认全局居中
            radius: "35%",
            min: 0,
            max: 7,
            endAngle: 45,
            splitNumber: 7,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto"
              }
            },
            splitLine: {
              // 分隔线
              length: 20, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "auto"
              }
            },
            pointer: {
              width: 5
            },
            title: {
              offsetCenter: [0, "-30%"] // x, y，单位px
            },
            detail: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: "bolder"
            },
            data: [{ value: 1.5, name: "x1000 r/min" }]
          },
          {
            name: "油表",
            type: "gauge",
            center: ["77%", "50%"], // 默认全局居中
            radius: "25%",
            min: 0,
            max: 2,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {
              // 坐标轴小标记
              splitNumber: 5,
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto"
              }
            },
            axisLabel: {
              formatter: function(v) {
                switch (v + "") {
                  case "0":
                    return "E";
                  case "1":
                    return "Gas";
                  case "2":
                    return "F";
                }
              }
            },
            splitLine: {
              // 分隔线
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "auto"
              }
            },
            pointer: {
              width: 2
            },
            title: {
              show: false
            },
            detail: {
              show: false
            },
            data: [{ value: 0.5, name: "gas" }]
          },
          {
            name: "水表",
            type: "gauge",
            center: ["77%", "50%"], // 默认全局居中
            radius: "25%",
            min: 0,
            max: 2,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {
              // 坐标轴小标记
              show: false
            },
            axisLabel: {
              formatter: function(v) {
                switch (v + "") {
                  case "0":
                    return "H";
                  case "1":
                    return "Water";
                  case "2":
                    return "C";
                }
              }
            },
            splitLine: {
              // 分隔线
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "auto"
              }
            },
            pointer: {
              width: 2
            },
            title: {
              show: false
            },
            detail: {
              show: false
            },
            data: [{ value: 0.5, name: "gas" }]
          }
        ]
      };

      setInterval(function() {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        option.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
        option.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
        option.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
        myChart.setOption(option, true);
      }, 2000);
    },
    gauge1() {
      let myChart = this.$echarts.init(document.getElementById("main2"));
      let option = {
        title: {
          text: "仪表盘"
        },
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            detail: { formatter: "{value}%" },
            data: [{ value: 50, name: "完成率" }]
          }
        ]
      };
      setInterval(function() {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        myChart.setOption(option, true);
      }, 2000);
    },

    funnel() {
      let myChart = this.$echarts.init(document.getElementById("main1"));
      myChart.setOption({
        title: {
          text: "漏斗图",
          subtext: "纯属虚构"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        legend: {
          data: ["展现", "点击", "访问", "咨询", "订单"]
        },

        series: [
          {
            name: "漏斗图",
            type: "funnel",
            left: "10%",
            top: 60,
            //x2: 80,
            bottom: 60,
            width: "80%",
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside"
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid"
              }
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: [
              { value: 60, name: "访问" },
              { value: 40, name: "咨询" },
              { value: 20, name: "订单" },
              { value: 80, name: "点击" },
              { value: 100, name: "展现" }
            ]
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
</style>
