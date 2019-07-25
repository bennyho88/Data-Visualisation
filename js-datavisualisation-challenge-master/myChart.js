/* get Data */

var arrayJson = [];

for (var i = 2; i < table1.rows.length; i++ ) {
  var currentRow = table1.rows[i];
  var data = [];
  var country = currentRow.cells[1].innerHTML;
  

  for (var j = 2; j < currentRow.cells.length; j++) {
    data.push(parseInt(currentRow.cells[j].innerHTML));
  }
 

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



/* get data from years */

var dataYear = [];
for (var x = 2; x < table1.rows[1].cells.length; x++) {
  dataYear.push(table1.rows[1].cells[x].innerHTML);
}



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

var arrayJsonTwo = [];

for (var a = 1; a < table2.rows.length; a++) {
  var currentRow2 = table2.rows[a];
  var dataTwo = [];
  var countryTwo = currentRow2.cells[1].innerHTML;
  console.log(currentRow2, 'bonjour');
  console.log(countryTwo, 'halloo');

  for (var b = 2; b < currentRow2.cells.length; b++) {
    dataTwo.push(parseInt(currentRow2.cells[b].innerHTML));
  };
  
  console.log(dataTwo, 'loool');

  var json =  {
    label: countryTwo,
    data: dataTwo,
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
    ],
    borderWidth: 1
}

arrayJsonTwo.push(json);

};

var dataYear2 = [];

for (var c = 2; c < table2.rows[0].cells.length; c++) {
  dataYear2.push(table2.rows[0].cells[c].innerHTML);
}

console.log(dataYear2, 'hey');

/* canvas 2 */

var canvasTwo = document.createElement('canvas');
canvasTwo.id = 'canvas2';
table2.parentNode.insertBefore(canvasTwo, table2);

var ctxTwo = document.getElementById('canvas2').getContext('2d');

/* Graph 2 */

var myChartTwo = new Chart(ctxTwo, {
  type: 'bar',
  data: {
      labels: dataYear2,
      datasets: arrayJsonTwo,
  },
  options: {

  }
});

