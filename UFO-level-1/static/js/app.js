// from data.js
var tableData = data;

// view the data in the console
console.log(tableData);

// variables
var pbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
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
    // date filter element
    var inputDate = inputFieldDate.property("value").trim();
    console.log(inputDate)
    var dateFilter = tableData.filter(tableData => tableData.datetime === inputDate); 

    pbody.html("");
    // react to filter on date input
    let responseDate = {
        dateFilter
    }

    // handle filter
    if(responseDate.dateFilter.length !== 0) {
            addData(dateFilter);
    }
        // if no results returned from filter
        else {
            pbody.append("tr").append("td").text("No Sightings Here...Move On...");
        }
})
