//CN_demo.js

	var myChart = echarts.init(document.getElementById('echart1'));
	var myChart2 = echarts.init(document.getElementById('echart2'));
	var myChart3 = echarts.init(document.getElementById('echart3'));
	var myChart4 = echarts.init(document.getElementById('echart4'));

	myChart.showLoading();
	myChart2.showLoading();

	$.get('static/data/rr.json', function (webkitDep) {

    	myChart.hideLoading();



    option = {
        baseOption:{
          timeline:{
            axisType: 'category',
            show: true,
            autoPlay: true,
            playInterval: 2000,
            data:[]
          }
        },
        options:[]
      };

      for (var n = 0; n < webkitDep.timeline.length; n++){
        option.baseOption.timeline.data.push(webkitDep.timeline[n]);
        option.options.push({
          series:{
            type : 'graph',
            layout:'force',
            animation: false,
            draggable:true,
            data: webkitDep.nodes[n].map(function (node, idx) {
                node.id = idx;
                return node;
            }),
            categories: webkitDep.categories,
            force: {
                edgeLength: 20,
                repulsion: 20,
                gravity: 0.05
            },
            edges: webkitDep.links[n]
          }
        });

        myChart.setOption(option);
      }

  });


    $.get('static/data/echart3.json', function (webkitDep) {
    	myChart2.hideLoading();
        option = {
        legend: {
           // data: ['凤凰网', '新浪网', '网易', '搜狐', '今日头条']
          data: ['网易新闻','搜狐','新浪网','今日头条','凤凰网' ]
        },
        series: [{
            name:'demo',
            type: 'graph',
            layout: 'force',
            animation: false,
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}'
                }
            },
            draggable: true,
            data: webkitDep.nodes.map(function (node, idx) {
                node.id = idx;
                return node;
            }),
            categories: webkitDep.categories,
            force: {
                // initLayout: 'circular'
                // repulsion: 20,
                edgeLength: 5,
                repulsion: 20,
                gravity: 0.2
            },
            edges: webkitDep.links
        }]
    };
    myChart2.setOption(option);
});





var data = [
    [1, 2],
    [2, 4],
    [3, 7],
    [4, 7],
    [5, 8],
    [6, 12],
    [7, 13],
    [8, 15],
    [9, 17],
    [10,25],
    [11,30],
    [12,33],
    [13,35],
    [14,35],
    [15,42],
    [16,42],
    [17,43],
    [18,43]
];

option = {
    title: {
        text: '参与报道的媒体数目与时间的关系',
        subtext: '第一天为2017.05.27',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    xAxis: {
        name:'天数',
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        splitNumber: 20
    },
    yAxis: {
        name:'数目',
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    series: [{
        name: 'scatter',
        type: 'scatter',
        label: {
            emphasis: {
                show: true,
                position: 'left',
                textStyle: {
                    color: 'blue',
                    fontSize: 16
                }
            }
        },
        data: data
    }]
};

    myChart3.setOption(option);






option = {
    title: {
            left:'center',
              text: '媒体新闻用户参与情况',
              subtext: '截至2017.10.16'
          },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['浏览数','参与评论人数','评论数'],
        top:70,
        left:'right'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['今日头条','搜狐','新浪网','网易新闻','凤凰网']
        }
    ],
    yAxis : [
        {
            name: '数量',
            type : 'value'
        }
    ],
    series : [
        {
            name:'浏览数',
            type:'bar',
            data:[832, 1715, 5779, 6248, 6186]
        },

        {
            name:'参与评论人数',
            type:'bar',
            data:[312, 576, 3267, 3122, 8284]
        },
        {
            name:'评论数',
            type:'bar',
            data:[58 , 32, 571, 389, 2797]
        }
    ]

};

    myChart4.setOption(option);
