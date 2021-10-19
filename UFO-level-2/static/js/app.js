// from data.js
var tableData = data;

// view the data in the console
console.log(tableData);

// variables
var pbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// add the data to the page
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = pbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);

// create event listener for button clickiness
button.on("click", () => {

    d3.event.preventDefault();
    // date filter elements
    var inputDate = inputFieldDate.property("value").trim();
    console.log(inputDate)
    var dateFilter = tableData.filter(tableData => tableData.datetime === inputDate); 
    // city filter elements
    var inputCity = inputFieldCity.property("value").toLowerCase().trim();
    console.log(inputCity)
    var cityFilter = tableData.filter(tableData => tableData.city === inputCity);

    pbody.html("");
    // react to filter on date input
    let responseDate = {
        dateFilter
    }
    // react to filter on city input
    let responseCity = {
        cityFilter
    }

    // handle date filter first
    if(responseDate.dateFilter.length !== 0) {
            addData(dateFilter);
    }
        // then handle city filter
        else if(responseCity.cityFilter.length !== 0) {
            addData(cityFilter);
        }
        // if no results returned
        else {
            pbody.append("tr").append("td").text("No Sightings Here...Move On...");
        }
})
