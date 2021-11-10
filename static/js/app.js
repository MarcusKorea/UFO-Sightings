// from data.js
var tableData = data;

//select tbody
var tbody = d3.select("tbody");

// create and add a table
tableData.forEach(function(object){
    // puts it to the log
    // console.log(object);

    // creates a row in the table
    var row = tbody.append("tr");

    // loop through object and grab ket value pairs
    Object.entries(object).forEach(function([key,value]){

        // print to the log
        // console.log(key,value);

        // append to the row
        var cell = row.append("td");

        // add text to the cell
        cell.text(value);
    });
});

// get text from the filter

// select the button
var button = d3.select("#filter-btn")

// select the form
var form = d3.select("#form-group");

// create handlers
form.on("submit",runEnter);
button.on("click",runEnter);

function runEnter(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(row => row.datetime === inputValue);


    // console.log(inputValue);
    console.log(filteredData);
}



