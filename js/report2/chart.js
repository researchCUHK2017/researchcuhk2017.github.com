/**
 * Created by helyao on 2017/9/12.
 */

// Daily trip chart
var chart_daily_trip = echarts.init(document.getElementById('chart-daily-trip'));

var option_daily_trip = {
    color: ['#c23531'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        }
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
            data : ['2017/05/10', '2017/05/11', '2017/05/12', '2017/05/13', '2017/05/14', '2017/05/15', '2017/05/16', '2017/05/17', '2017/05/18', '2017/05/19', '2017/05/20', '2017/05/21', '2017/05/22', '2017/05/23', '2017/05/24'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'The number of trips',
            type:'bar',
            barWidth: '60%',
            data:[262569, 272210, 265173, 225281, 236594, 279554, 288719, 0, 322201, 314516, 134159, 209440, 124816, 150456, 128408],
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = ['#2f4554', '#2f4554', '#2f4554', '#c23531', '#c23531', '#2f4554', '#2f4554', '#2f4554', '#2f4554', '#2f4554', '#c23531', '#c23531', '#2f4554', '#2f4554', '#2f4554'];
                        return colorList[params.dataIndex]
                    }
                }
            }
        }
    ]
};

chart_daily_trip.setOption(option_daily_trip);







// Hour trip chart (workday vs weekend)
var chart_hour_trip_1 = echarts.init(document.getElementById('chart-hour-trip-1'));

var option_hour_trip_1 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        },
        formatter: function (params) {
            var result = parseInt(params[0].name) + ' to ' + (parseInt(params[0].name) + 1) + ' (hour)<br>';
            params.forEach(function (item) {
                result += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + item.color + '"></span>';
                result += item.seriesName + ": " + '<span style="color: #fff;">' + item.data + "%</span><br>";
                //if (parseFloat(item.data) >= 0) {
                //    result += item.seriesName + ": " + '<span style="color: #e30101;">' + item.data + "%</span><br>"
                //} else if (parseFloat(item.data) < 0) {
                //    result += item.seriesName + ": " + '<span style="color:#049500">' + item.data + "%</span><br>"
                //}
            });
            return result;
        }
    },
    legend: {
        data: ['weekend', 'Workday']
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
            data : ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
        }
    ],
    yAxis : {
        type : 'value',
        axisLabel : {
            show : true,
            formatter : function (value) {
                return value + '%';
            }
        }
    },
    series : [
        {
            name:'weekend',
            type:'bar',
            data:[0.39, 0.20, 0.11, 0.08, 0.10, 0.58, 1.64, 3.62, 5.27, 4.86, 6.08, 6.69, 6.39, 5.78, 6.15, 6.43, 7.22, 8.23, 8.01, 7.43, 6.23, 4.82, 2.83, 0.90]
        },
        {
            name:'Workday',
            type:'bar',
            data:[0.30, 0.13, 0.07, 0.05, 0.09, 0.72, 3.66, 9.30, 8.89, 4.23, 3.04, 5.38, 6.63, 4.81, 4.01, 4.33, 5.60, 9.24, 10.05, 7.51, 5.44, 4.16, 1.79, 0.58]
        }
    ]
};

chart_hour_trip_1.setOption(option_hour_trip_1);







// Hour trip chart (sunny day vs rainy day)
var chart_hour_trip_2 = echarts.init(document.getElementById('chart-hour-trip-2'));

var option_hour_trip_2 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        },
        formatter: function (params) {
            var result = parseInt(params[0].name) + ' to ' + (parseInt(params[0].name) + 1) + ' (hour)<br>';
            params.forEach(function (item) {
                result += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + item.color + '"></span>';
                result += item.seriesName + ": " + '<span style="color: #fff;">' + item.data + "%</span><br>";
            });
            return result;
        }
    },
    legend: {
        data: ['Sunny day', 'Rainy day']
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
            data : ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
        }
    ],
    yAxis : {
        type : 'value',
        axisLabel : {
            show : true,
            formatter : function (value) {
                return value + '%';
            }
        }
    },
    series : [
        {
            name:'Sunny day',
            type:'bar',
            data:[0.30, 0.13, 0.07, 0.05, 0.09, 0.72, 3.66, 9.30, 8.89, 4.23, 3.04, 5.38, 6.63, 4.81, 4.01, 4.33, 5.60, 9.24, 10.05, 7.51, 5.44, 4.16, 1.79, 0.58]
        },
        {
            name:'Rainy day',
            type:'bar',
            data:[0.72, 0.39, 0.21, 0.17, 0.25, 1.68, 8.36, 11.26, 2.81, 1.38, 0.93, 1.15, 1.27, 1.24, 2.07, 3.55, 7.89, 13.55, 12.79, 14.12, 6.93, 2.25, 3.69, 1.40]
        }
    ]
};

chart_hour_trip_2.setOption(option_hour_trip_2);







// The distrubution of distance (2017/05/14)
var chart_distance_trip_1 = echarts.init(document.getElementById('chart-distance-trip-1'));

var option_distance_trip_1 = {
    title : {
        text: '2017/05/14',
        subtext: 'Weekend & Sunny',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['0~1km', '1~2km', '2~3km', '3~4km', '4~5km', '5~6km', '6~7km', '>7km']
    },
    series : [
        {
            name:'Distance',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:127853, name:'0~1km'},
                {value:93967, name:'1~2km'},
                {value:11195, name:'2~3km'},
                {value:1983, name:'3~4km'},
                {value:843, name:'4~5km'},
                {value:418, name:'5~6km'},
                {value:184, name:'6~7km'},
                {value:60, name:'7~8km'},
                {value:151, name:'>7km'}
            ]
        }
    ]
};

chart_distance_trip_1.setOption(option_distance_trip_1);







// The distrubution of distance (2017/05/15)
var chart_distance_trip_2 = echarts.init(document.getElementById('chart-distance-trip-2'));

var option_distance_trip_2 = {
    title : {
        text: '2017/05/15',
        subtext: 'Workday & Sunny',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['0~1km', '1~2km', '2~3km', '3~4km', '4~5km', '5~6km', '6~7km', '>7km']
    },
    series : [
        {
            name:'Distance',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:143590, name:'0~1km'},
                {value:114953, name:'1~2km'},
                {value:15173, name:'2~3km'},
                {value:3022, name:'3~4km'},
                {value:1343, name:'4~5km'},
                {value:771, name:'5~6km'},
                {value:357, name:'6~7km'},
                {value:136, name:'7~8km'},
                {value:345, name:'>7km'}
            ]
        }
    ]
};

chart_distance_trip_2.setOption(option_distance_trip_2);







// The distrubution of distance (2017/05/22)
var chart_distance_trip_3 = echarts.init(document.getElementById('chart-distance-trip-3'));

var option_distance_trip_3 = {
    title : {
        text: '2017/05/22',
        subtext: 'Workday & Rainy',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['0~1km', '1~2km', '2~3km', '3~4km', '4~5km', '5~6km', '6~7km', '>7km']
    },
    series : [
        {
            name:'Distance',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:65490, name:'0~1km'},
                {value:50704, name:'1~2km'},
                {value:6383, name:'2~3km'},
                {value:1173, name:'3~4km'},
                {value:546, name:'4~5km'},
                {value:290, name:'5~6km'},
                {value:127, name:'6~7km'},
                {value:47, name:'7~8km'},
                {value:103, name:'>7km'}
            ]
        }
    ]
};

chart_distance_trip_3.setOption(option_distance_trip_3);