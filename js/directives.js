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
    .directive('map', function ($timeout) {
        return {
            restrict:'E',
            replace:true,
            template:'<div style="min-width: 310px; height: 10px; margin: 0 auto"></div>',
            scope: {
                //if there were attributes it would be shown here
            },
            link:function (scope, element, attrs, ctrl) {
                    $('#map-poland').cssMap({'size' : 270});
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
                    text: 'Revenue, NBI'
                },
                subtitle: {
                    text: '(millions PLN)'
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        year: '%Y'
                    },
                    title: {
                        text: 'Date'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Value (millions PLN)'
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
                        [Date.UTC(2012, 11, 31), 0.250],
                        [Date.UTC(2013, 11, 31), 0.250],
                        [Date.UTC(2014, 11, 31), 0.250],
                        [Date.UTC(2015, 11, 31), 0.250]
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
        template:'<div style="min-width: 310px; max-width: 400px; height: 300px; margin: 0 auto"></div>',
        scope: {
            //if there were attributes it would be shown here
        },
        link:function (scope, element, attrs, ctrl) {
            // DOM manipulation may happen here.
            $(element).highcharts({
                    chart: {
                        type: 'gauge',
                        plotBackgroundColor: null,
                        plotBackgroundImage: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },

                    title: {
                        text: 'Profile chart'
                    },

                    pane: {
                        startAngle: -150,
                        endAngle: 150,
                        background: [{
                            backgroundColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                stops: [
                                    [0, '#FFF'],
                                    [1, '#333']
                                ]
                            },
                            borderWidth: 0,
                            outerRadius: '109%'
                        }, {
                            backgroundColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                stops: [
                                    [0, '#333'],
                                    [1, '#FFF']
                                ]
                            },
                            borderWidth: 1,
                            outerRadius: '107%'
                        }, {
                            // default background
                        }, {
                            backgroundColor: '#DDD',
                            borderWidth: 0,
                            outerRadius: '105%',
                            innerRadius: '103%'
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
                            text: 'product ratio'
                        },
                        plotBands: [{
                            from: 0,
                            to: 60,
                            color: '#55BF3B' // green
                        }, {
                            from: 60,
                            to: 80,
                            color: '#DDDF0D' // yellow
                        }, {
                            from: 80,
                            to: 100,
                            color: '#DF5353' // red
                        }]
                    },

                    series: [{
                        name: 'Profile value',
                        data: [53],
                        tooltip: {
                            valueSuffix: '<br />' + ' - strong profitability from core products,' + '<br />' + ' high cross-sell potential'
                        }
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