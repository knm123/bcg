"use strict";

myApp.directive('inputtext', function ($timeout) {
    return {
        restrict:'E',
        replace:true,
        template:'<input type="text"/>',
        scope: { 
        	//if there were attributes it would be shown here
        },
        link:function (scope, element, attrs, ctrl) {
        	// DOM manipulation may happen here.      
        }
    }
})



    .directive('stackedbar', function ($timeout) {
        return {
            restrict:'E',
            replace:true,
            template:'<div style="min-width: 310px; height: 10px; margin: 0 auto"></div>',
            scope: {
                //if there were attributes it would be shown here
            },
            link:function (scope, element, attrs, ctrl) {
                $('#stack').highcharts({
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Sales capacity per product'
                    },
                    xAxis: {
                        categories: ['Credit', 'Cash management', 'Leasing', 'Factoring', 'Trade finance', 'Treasury']
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Total'
                        }
                    },
                    legend: {
                        reversed: true
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },
                    series: [{
                        name: 'Potential',
                        data: [100, 100, 10, 10, 5, 20],
                        color: '#18a97d',
                        tooltip: {
                            valueSuffix: 'K'
                        }
                    }, {
                        name: 'Actual',
                        data: [0, 50, 0, 0, 0, 10],
                        color: '#434348',
                        tooltip: {
                            valueSuffix: 'K'
                        }
                    }]
                });
            }
        }
    })

    .directive('map', function ($timeout) {
        return {
            restrict:'E',
            replace:true,
            template:'<div style="min-width: 310px; height: 10px; margin: 0 auto"></div>',
            scope: {
                //if there were attributes it would be shown here
            },
            link:function (scope, element, attrs, ctrl) {
                    $('#map-poland').cssMap({'size' : 270, 'cities': true});
            }
        }
    })
    .directive('columnchart', function ($timeout) {
        return {
            restrict: 'E',
            replace: true,
            template: '<div style="min-width: 310px; height: 370px; margin: 0 auto"></div>',
            scope: {
                //if there were attributes it would be shown here
            },
            link: function (scope, element, attrs, ctrl) {
                $(element).highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        categories: ['W/C Loans', 'Inv. Loans', 'Factoring', 'Leasing']
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Total fruit consumption'
                        },
                        stackLabels: {
                            enabled: true,
                            style: {
                                fontWeight: 'bold',
                                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                            }
                        }
                    },
                    legend: {
                        align: 'center',
                        x: -20,
                        verticalAlign: 'top',
                        y: -10,
                        floating: true,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                        borderColor: '#CCC',
                        borderWidth: 1,
                        shadow: false
                    },
                    tooltip: {
                        headerFormat: '<b>{point.x}</b><br/>',
                        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal',
                            dataLabels: {
                                enabled: true,
                                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                                style: {
                                    textShadow: '0 0 3px black'
                                }
                            }
                        }
                    },
                    series: [{
                        name: 'Available',
                        data: [6, 3, 1, 1]
                    }, {
                        name: 'Used',
                        data: [1, 1, 0, 0]
                    }]
                });
            }
        }
    })

    .directive('matrixchart', function ($timeout) {
        return {
            restrict: 'E',
            replace: true,
            template: '<div style="min-width: 310px; height: 370px; margin: 0 auto"></div>',
            scope: {
                //if there were attributes it would be shown here
            },
            link: function (scope, element, attrs, ctrl) {
                $(element).highcharts({

                    chart: {
                        type: 'boxplot'
                    },

                    title: {
                        text: ''
                    },

                    legend: {
                        enabled: false
                    },

                    xAxis: {
                        min: 0,
                        max: 4,
                        categories: ['1', '2', '3', '4', '5'],
                        title: {
                            text: 'EBIT Margin (LTM, %)'
                        },
                        plotLines: [{
                            value: 2,
                            color: 'gray',
                            width: 1,
                            label: {
                                align: 'center',
                                style: {
                                    color: 'gray'
                                }
                            }
                        }]
                    },

                    yAxis: {
                        min: 0,
                        max: 100,
                        title: {
                            text: 'Leverage'
                        },
                        plotLines: [{
                            value: 55,
                            color: 'gray',
                            width: 1,
                            label: {
                                text: 'Sector',
                                align: 'left',
                                style: {
                                    color: 'gray'
                                }
                            }
                        }]
                    },

                    series: [{
                        name: 'Our company',
                        data: [],
                        tooltip: {
                            headerFormat: '<em>Experiment No {point.key}</em><br/>'
                        }
                    }, {
                        name: 'Lubfarm S.A.',
                        color: Highcharts.getOptions().colors[0],
                        type: 'scatter',
                        data: [ // x, y positions where 0 is the first category
                            [4, 40]
                        ],
                        marker: {
                            fillColor: 'white',
                            lineWidth: 1,
                            lineColor: Highcharts.getOptions().colors[0]
                        },
                        tooltip: {
                            pointFormat: 'Leverage: {point.y} | EBIT Margin: {point.x}'
                        }
                    },
                        {
                        name: 'Company from sector',
                        data: [],
                        tooltip: {
                            headerFormat: '<em>Experiment No {point.key}</em><br/>'
                        }
                    }, {
                        name: 'Polpharma',
                        color: Highcharts.getOptions().colors[0],
                        type: 'scatter',
                        data: [ // x, y positions where 0 is the first category
                            [3, 71]
                        ],
                        marker: {
                            fillColor: '#bbb',
                            lineColor: Highcharts.getOptions().colors[0]
                        },
                        tooltip: {
                            pointFormat: 'Leverage: {point.y} | EBIT Margin: {point.x}'
                        }
                    },
                        {
                            name: 'Company from sector',
                            data: [],
                            tooltip: {
                                headerFormat: '<em>Experiment No {point.key}</em><br/>'
                            }
                        }, {
                            name: 'Tarchomin',
                            color: Highcharts.getOptions().colors[0],
                            type: 'scatter',
                            data: [ // x, y positions where 0 is the first category
                                [0.5, 78]
                            ],
                            marker: {
                                fillColor: '#bbb',
                                lineColor: Highcharts.getOptions().colors[0]
                            },
                            tooltip: {
                                pointFormat: 'Leverage: {point.y} | EBIT Margin: {point.x}'
                            }
                        },
                        {
                            name: 'Company from sector',
                            data: [],
                            tooltip: {
                                headerFormat: '<em>Experiment No {point.key}</em><br/>'
                            }
                        }, {
                            name: 'Colfarm',
                            color: Highcharts.getOptions().colors[0],
                            type: 'scatter',
                            data: [ // x, y positions where 0 is the first category
                                [1.85, 47]
                            ],
                            marker: {
                                fillColor: '#bbb',
                                lineColor: Highcharts.getOptions().colors[0]
                            },
                            tooltip: {
                                pointFormat: 'Leverage: {point.y} | EBIT Margin: {point.x}'
                            }
                        },
                        {
                            name: 'Company from sector',
                            data: [],
                            tooltip: {
                                headerFormat: '<em>Experiment No {point.key}</em><br/>'
                            }
                        }, {
                            name: 'Teva',
                            color: Highcharts.getOptions().colors[0],
                            type: 'scatter',
                            data: [ // x, y positions where 0 is the first category
                                [0.7, 55]
                            ],
                            marker: {
                                fillColor: '#bbb',
                                lineColor: Highcharts.getOptions().colors[0]
                            },
                            tooltip: {
                                pointFormat: 'Leverage: {point.y} | EBIT Margin: {point.x}'
                            }
                        }




                    ]

                });
            }
        }
    })

.directive('splinechart', function ($timeout) {
    return {
        restrict:'E',
        replace:true,
        template:'<div style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
        scope: {
            //if there were attributes it would be shown here
        },
        link:function (scope, element, attrs, ctrl) {
            $(element).highcharts({
                chart: {
                    type: 'spline'
                },
                title: {
                    text: 'Growth of Revenue and NBI'
                },
                subtitle: {
                    text: 'Revenue - millions PLN, <br /> NBI - thousands PLN'
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        year: '%Y'
                    },
                    title: {
                        text: 'Year'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Value (millions, thousands PLN)'
                    },
                    min: 0
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br />',
                    pointFormat: '{point.x:%e. %b}: {point.y:.2f} M'
                },

                plotOptions: {
                    spline: {
                        marker: {
                            enabled: true
                        }
                    }
                },

                series: [{
                    name: "Revenue",
                    data: [
                        [Date.UTC(2012, 11, 31), 250],
                        [Date.UTC(2013, 11, 31), 300],
                        [Date.UTC(2014, 11, 31), 350],
                        [Date.UTC(2015, 11, 31), 400]
                    ]
                }, {
                    name: "NBI",
                    data: [
                        [Date.UTC(2012, 11, 31), 250],
                        [Date.UTC(2013, 11, 31), 250],
                        [Date.UTC(2014, 11, 31), 250],
                        [Date.UTC(2015, 11, 31), 250]
                    ]
                }]
            });
        }
    }
})
    .directive('splineriskchart', function ($timeout) {
        return {
            restrict:'E',
            replace:true,
            template:'<div style="min-width: 310px; height: 250px; margin: 0 auto"></div>',
            scope: {
                //if there were attributes it would be shown here
            },
            link:function (scope, element, attrs, ctrl) {
                $(element).highcharts({
                    chart: {
                        type: 'spline'
                    },
                    title: {
                        text: 'Risk profile'
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        type: 'datetime',
                        dateTimeLabelFormats: {
                            year: "%b '%y"
                        },
                        title: {
                            text: 'Date'
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Value'
                        },
                        min: 0.7,
                        max: 1

                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br />',
                        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
                    },

                    plotOptions: {
                        spline: {
                            marker: {
                                enabled: true
                            }
                        }
                    },

                    series: [{
                        name: "Risk profile",
                        data: [
                            [Date.UTC(2013, 4, 31), 0.8],
                            [Date.UTC(2013, 5, 30), 0.75],
                            [Date.UTC(2013, 6, 31), 0.78],
                            [Date.UTC(2013, 7, 31), 0.83],
                            [Date.UTC(2013, 8, 30), 0.85],
                            [Date.UTC(2013, 9, 31), 0.76]
                        ]
                    }]
                });
            }
        }
    })
.directive('gaugechart', function ($timeout) {
    return {
        restrict:'E',
        replace:true,
        template:'<div style="min-width: 310px; max-width: 400px; height: 5px; margin: 0 auto"></div>',
        scope: {
            //if there were attributes it would be shown here
        },
        link:function (scope, element, attrs, ctrl) {
            // DOM manipulation may happen here.
            $('#gauge').highcharts({
                    chart: {
                        type: 'gauge',
                        plotBackgroundColor: null,
                        plotBackgroundImage: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },

                    title: {
                        text: 'Sales capacity in NBI'
                    },

                    pane: {
                        startAngle: -150,
                        endAngle: 150,
                        background: [{
                            backgroundColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                stops: [
                                    [0, '#dfdfdf'],
                                    [1, '#dedede']
                                ]
                            },
                            borderWidth: 0,
                            outerRadius: '109%'
                        }, {
                            backgroundColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                stops: [
                                    [0, '#ddd'],
                                    [1, '#eee']
                                ]
                            },
                            borderWidth: 1,
                            outerRadius: '99%'
                        }, {
                            // default background
                        }, {
                            backgroundColor: '#dedede',
                            borderWidth: 0,
                            outerRadius: '15%',
                            innerRadius: '13%'
                        }]
                    },

                    // the value axis
                    yAxis: {
                        min: 0,
                        max: 100,

                        minorTickInterval: 'auto',
                        minorTickWidth: 1,
                        minorTickLength: 10,
                        minorTickPosition: 'inside',
                        minorTickColor: '#666',

                        tickPixelInterval: 30,
                        tickWidth: 2,
                        tickPosition: 'inside',
                        tickLength: 10,
                        tickColor: '#666',
                        labels: {
                            step: 2,
                            rotation: 'auto'
                        },
                        title: {
                            text: ''
                        },
                        plotBands: [{
                            from: 0,
                            to: 60,
                            color: '#DF5353' // red
                        }, {
                            from: 60,
                            to: 80,
                            color: '#e6e600' // '#DDDF0D' // yellow
                        }, {
                            from: 80,
                            to: 100,
                            color: '#18a97d' // '#55BF3B' // green
                        }]
                    },

                    series: [{
                        name: 'Profile value',
                        data: [70],
                        tooltip: {
                            noTooltip: true
                        }
                        //    valueSuffix: '<br />' + ' - strong profitability from core products,' + '<br />' + ' high cross-sell potential'
                        //}
                    }]

                });
                // Add some life
                /*
                function (chart) {
                    if (!chart.renderer.forExport) {
                        setInterval(function () {
                            var point = chart.series[0].points[0],
                                newVal,
                                inc = Math.round((Math.random() - 0.5) * 20);

                            newVal = point.y + inc;
                            if (newVal < 0 || newVal > 100) {
                                newVal = point.y - inc;
                            }

                            point.update(newVal);

                        }, 3000);
                    }
                }); */
        }
    }
});

myApp.directive('version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
});

// you may add as much directives as you want below