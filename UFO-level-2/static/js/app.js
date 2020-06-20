// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo sighting data from data.js
console.log(tableData);

// Use d3 to update each cell's text with column values
data.forEach(function (ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function ([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});



// grab references to the button element 
var button = d3.select("#filter-btn");

filteredData = tableData

// Create function to clear input value in the future
function clear() {
    // Clear the inputValue
    d3.select("#datetime").property("value", "")
    d3.select("#city").property("value", "")
    d3.select("#state").property("value", "")
    d3.select("#country").property("value", "")
    d3.select("#shape").property("value", "")

};

