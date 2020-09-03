/* ALL CHARTS, using chart.js*/

/* variables for line chart function*/
let monthlyLine = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31' ];
let monthlyData = [500, 650, 375, 1200, 1400, 900, 1700, 1900, 2000, 2100, 1975];
let weeklyLine = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', "Sun"];
let weeklyData = [290, 310, 326, 175, 291, 389, 400];
let dailyLine = ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'];
let dailyData = [24, 12, 36, 41, 62, 54, 59, 47];
let hourlyLine = ['0:10', '0:20', '0:30', '0:40', '0:50', '1:00'];
let hourlyData = ['5', '12', '21', '24', '37', '45'];

/* function for line chart change*/
function lineChart(labelAdd, dataAdd) {
    const ctx = document.getElementById('myChart').getContext('2d');
    // change default font color
    Chart.defaults.global.defaultFontColor = 'rgb(178, 178, 178)';
    const scatterChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels:labelAdd,
            datasets: [{
                label: 'TRAFFIC',
                data:dataAdd, 
                fill:true,
                // point styles
                pointBorderColor:'rgb(129, 133, 197)',
                pointBorderWidth:2,
                pointRadius:4,
                // line styles
                borderColor:'rgb(180, 182, 232)',
                backgroundColor:'rgba(226, 227, 246, 0.5)',
                lineTension:0,
            }]
        },
        options: {
            maintainAspectRatio:false, // ensures resize for media queries
            responsive:true,
        }
    });
}


// 2. bar chart
// create chart object
const ctx2 = document.getElementById('myChart2').getContext('2d');
const barChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels:['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data:[50, 75, 110, 160, 140, 190, 220],
            label: 'DAILY TRAFFIC',
            backgroundColor: '#7377bf'
        }],
    }, 
    options: {
        maintainAspectRatio:false, // ensures resize for media queries
        responsive:true,
        scales: {
            yAxes: [{
                ticks: {
                    stepSize:50,
                    suggestedMin:0,
                }
            }]
        }

    }
});

// 3. donut Chart
// create chart object
const ctx3 = document.getElementById('myChart3').getContext('2d');
const donutChart = new Chart(ctx3, {
    type:'doughnut',
    data: {
        labels:['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            data:[55,30,15],
            backgroundColor:[
                'rgb(115, 119, 191)',
                'rgb(129, 201, 143)',
                'rgb(116, 177, 191)'
            ],
        }],
    },
    options: {
        maintainAspectRatio:false, // ensures resize for media queries
        responsive:true,
        title: {
            display: true,
            text: 'MOBILE USERS'
          }    }
});

