
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Group', 'Percentage'],
          ['Ecosystem', 23],
          ['Team & Advisors', 24],
          ['Treasury',  22],
          ['Seed Investors', 16],
          ['Private Sale', 10],
          ['Public Sale',  5]
        ]);

        var options = {
          title: '',
          legend: 'none',
          pieHole: 0.9,
          backgroundColor: {
            fill: 'transparent',
            opacity: 100,
         },
         chartArea: {
            
            height: '100%',
            width: '100%'
         },
          slices: {
            0: { color: '#78AF9F' },
            1: { color: '#DDA032' },
            2: { color: '#659CC8' },
            5: { color: '#D46E2D' },
            4: { color: '#61EFCE' },
            3: { color: '#FFD152' },
          },
          pieSliceBorderColor: 'transparent',
          pieSliceText: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }