/* get Data */

for (var i = 2; i < table1.rows.length; i++ ) {
  var currentRow = table1.rows[i];
  var data = [];
  var country = currentRow.cells[1].innerHTML;
  console.log(currentRow, "lol");
  console.log(country, "rofl");

  for (var j = 2; j < currentRow.cells.length; j++) {
    data.push(currentRow.cells[j].innerHTML);
  }
 console.log(data);

 
};

/* get data from years */

var dataYear = [];
for (var x = 2; x < table1.rows[1].cells.length; x++) {
  dataYear.push(table1.rows[1].cells[x].innerHTML);
}

console.log(dataYear, 'hallo');


/*
/* Button 

const chartOne = document.getElementById("chartOne");


chartOne.addEventListener("click", displayChart);

 function displayChart() {
    var x = document.querySelector(".chart");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
/* Graph 




function getData() {
    labels:
}


function BuildChart(labels, values, chartTitle) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: country,
        datasets: [{
          label: "Crimes and offenses recorded by the police", 
          data: [2002,2003,2004,2005,2006,]
          backgroundColor: [ // Specify custom colors
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [ // Add custom color borders
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1 // Specify bar border width
        }]
      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behavior of full-width/height 
      }
    });
    return myChart;
  }

  var table = document.getElementById('table1');
  var json = [];
  var headers = [];
  for (var i = 0; i < table.rows[0].cells.length; i++) {
    headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
  }
  
  
  // Go through cells 
  for (var i = 1; i < table.rows.length; i++) {
    var tableRow = table.rows[i];
    var rowData = {};
    for (var j = 0; j < tableRow.cells.length; j++) {
      rowData[headers[j]] = tableRow.cells[j].innerHTML;
    }
  
    json.push(rowData);
  }
  
  console.log(json); 

  
  // Map JSON values back to label array
var country = json.map(function (e) {
    return e.pays;
  });
  console.log(country); 
  

  var values = json.map(function (e) {
    return e.nombre;
  });
  console.log(nombre); 
  */