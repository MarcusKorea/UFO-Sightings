// from data.js
var tableData = data;

//select tbody
var tbody = d3.select("tbody");

// Create functions that reduce the amount of code
// Create function that will add the data as a table
function addTable(data){
    data.forEach(function(object){
        // puts it to the log
        console.log(object);
    
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
};

function deleteTables(){
    // This clears the table data 
    d3.select("tbody").selectAll("tr").remove();
    d3.select("tbody").selectAll("h3").remove();
}

// reset the filters
function resetFilters(){
    deleteTables();
    addTable(tableData);
}

// checks if filtered data is empty and prints a message
function noData(data){
    if(data.length == 0){
        d3.select("tbody").html("<h3> There is no data matching this filter. <h3>");
    }
}

deleteTables();
// add the original dataset as a table
addTable(tableData);

// select the elements wanted
// select the filter button
var filter = d3.select("#filter-btn")

// select the form
var form = d3.select("#form");
console.log(`This is the ${form}`);
// select the reset button
var resetBtn = d3.select("#reset-btn");

// create handlers
form.on("submit",runEnter);
filter.on("click",runEnter);
resetBtn.on("click",resetFilters);

function runEnter(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // clear the table data
    deleteTables();

    // Select the input date element and get the raw HTML node
    var dateElement = d3.select("#datetime");
  
    // Get the value property of the date element
    var dateValue = dateElement.property("value");


    // Select the input city element and get the raw HTML node
    var cityElement = d3.select("#datetime");
  
    // Get the value property of the city element
    var cityValue = cityElement.property("value");




    // filter data
    var filteredData = tableData.filter(row => row.datetime === dateValue);
    var filteredData = tableData.filter(row => row.city === cityValue);
    
    noData(filteredData);    

    // add to log
    console.log(filteredData);

    // add the filtered data table
    addTable(filteredData);
}







