<template>
  <div>
    <div class="pie">
      <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
      <div id="main1" style="float:left;width:400px;height: 300px"></div>
      <div id="main2" style="float:left;width:400px;height: 300px"></div>
      <div id="main3" style="float:left;width:700px;height: 500px"></div>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  mounted() {
    this.pie1();
    this.pie2();
    this.pie3();
  },
  methods: {
    pie3() {
      let myChart = this.$echarts.init(document.getElementById("main3"));
      myChart.setOption({
        title: {
          text: "饼图高级嵌套环形图"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          top: 30,
          data: ["考点专练", "套卷练习", "仿真模考"]
        },
        toolbox: {
          show: true,
          itemGap: 10,
          showTitle: true,
          feature: {
            saveAsImage: { show: true },
            restore: {
              show: true,
              title: "还原"
            },
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: {
              show: true,
              title: "数据视图",
              readOnly: false,
              lang: ["数据视图", "关闭", "刷新"]
            },

            magicType: {
              show: true,
              type: ["bar", "line"]
            }
          }
        },
        series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 235, name: '考点专练', selected: true},
                {value: 600, name: '套卷练习'},
                {value: 448, name: '仿真模考'}
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 16,
                        lineHeight: 33
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            data: [
                {value: 235, name: '考点专练'},
                {value: 600, name: '套卷练习'},
                {value: 448, name: '仿真模考'},
                
            ]
        }]
      });
    },
    pie2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main2")); // 绘制图表
      myChart.setOption({
        title: {
          text: "饼图高级环形图"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 310,
          top: 30,
          data: ["考点专练", "套卷练习", "仿真模考"]
        },

        toolbox: {
          show: true,
          itemGap: 10,
          showTitle: true,
          feature: {
            saveAsImage: { show: true },
            restore: {
              show: true,
              title: "还原"
            },
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: {
              show: true,
              title: "数据视图",
              readOnly: false,
              lang: ["数据视图", "关闭", "刷新"]
            },

            magicType: {
              show: true,
              type: ["bar", "line"]
            }
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",

            radius: ["40%", "60%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "考点专练" },
              { value: 310, name: "套卷练习" },
              { value: 234, name: "仿真模考" }
            ]
          }
        ]
      });
    },
    //初始化数据
    pie1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main1")); // 绘制图表
      myChart.setOption({
        title: {
          text: "饼图"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          left: 310,
          top: 30,
          data: ["考点专练", "套卷练习", "仿真模考"]
        },
        toolbox: {
          show: true,
          itemGap: 10,
          showTitle: true,
          feature: {
            saveAsImage: { show: true },
            restore: {
              show: true,
              title: "还原"
            },

            dataView: {
              show: true,
              title: "数据视图",
              readOnly: false,
              lang: ["数据视图", "关闭", "刷新"]
            },

            magicType: {
              show: true,
              type: ["bar", "line"],
              option: {
                bar: true,
                line: true
              }
            },
            seriesIndex: {
              bar: true,
              line: true
            }
          }
        },
        series: [
          {
            name: "姓名",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],

            emphasis: {
              itemStyle: {
                shadowBlur: 30,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },

            data: [
              { value: 335, name: "考点专练" },
              { value: 310, name: "套卷练习" },
              { value: 234, name: "仿真模考" }
            ]
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>