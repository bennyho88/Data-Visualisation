/* get Data */

var arrayJson = [];

for (var i = 2; i < table1.rows.length; i++ ) {
  var currentRow = table1.rows[i];
  var data = [];
  var country = currentRow.cells[1].innerHTML;
  console.log(currentRow, "lol");
  console.log(country, "rofl");

  for (var j = 2; j < currentRow.cells.length; j++) {
    data.push(parseInt(currentRow.cells[j].innerHTML));
  }
 console.log(data);

 var json =  {
            label: country,
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }

        arrayJson.push(json);
        
};

console.log(arrayJson);

/* get data from years */

var dataYear = [];
for (var x = 2; x < table1.rows[1].cells.length; x++) {
  dataYear.push(table1.rows[1].cells[x].innerHTML);
}

console.log(dataYear, 'hallo');

/* create canvas element */

var canvas = document.createElement('canvas');
canvas.id = 'canvas1';
table1.parentNode.insertBefore(canvas, table1); /* displaying the canvas above the table */


/* graph */

var ctx = document.getElementById('canvas1').getContext('2d');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: dataYear,
      datasets: arrayJson,
  },
  options: {

  }
});

/* get data second table */

for (var a = 1; a < table2.rows.length; a++) {
  var currentRow2 = table2.rows[a];
  var dataTwo = [];
  var countryTwo = currentRow2.cells[1].innerHTML;
  console.log(currentRow2, 'bonjour');
  console.log(countryTwo, 'halloo');

  for (var b = 1; b < currentRow2.cells.length; b++) {
    dataTwo.push({
      country: currentRow2.cells[b].innerHTML,
    
    })
  }
  
  console.log(dataTwo, 'loool');
}

var dataYear2 = [];

for (var c = 0; c < table2.rows[0].cells.length; c++) {
  dataYear2.push(table2.rows[0].cells[c].innerHTML);
}

console.log(dataYear2, 'hey');




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