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
                        text: 'Speedometer'
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
                        max: 200,

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
                            text: 'km/h'
                        },
                        plotBands: [{
                            from: 0,
                            to: 120,
                            color: '#55BF3B' // green
                        }, {
                            from: 120,
                            to: 160,
                            color: '#DDDF0D' // yellow
                        }, {
                            from: 160,
                            to: 200,
                            color: '#DF5353' // red
                        }]
                    },

                    series: [{
                        name: 'Speed',
                        data: [80],
                        tooltip: {
                            valueSuffix: ' km/h'
                        }
                    }]

                },
                // Add some life
                function (chart) {
                    if (!chart.renderer.forExport) {
                        setInterval(function () {
                            var point = chart.series[0].points[0],
                                newVal,
                                inc = Math.round((Math.random() - 0.5) * 20);

                            newVal = point.y + inc;
                            if (newVal < 0 || newVal > 200) {
                                newVal = point.y - inc;
                            }

                            point.update(newVal);

                        }, 3000);
                    }
                });
        }
    }
});

myApp.directive('version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
});

// you may add as much directives as you want below