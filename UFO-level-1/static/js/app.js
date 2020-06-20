// from data.js
var tableData = data;

// YOUR CODE HERE!
// Reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo sighting data from data
console.log(tableData);

// Use d3 to update each cell's text with column values
data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
  //References to button element
  var button =d3.select("#filter-btn");
  
  button.on("click",function() {
      tbody.html("");

  //Datetime element
  var text =d3.select("#datetime");

  //Grab the value of the input fields
  var inputValue = text.property("value");
  
  //Reverse the input string
  console.log(inputValue);

 // Filtering function to match  with input date
 function filterData(data) {
    return data.datetime === inputValue;
  }
  
// filter() uses the custom function as its argument
var filteredData = tableData.filter(filterData);
console.log(filteredData)


//Make table with only filtered data
filteredData.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
       });
    
  });

});
