// from data.js
var tableData = data;

// view the data in the consoul
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
    var inputDate = inputFieldDate.property("value").trim();
    var filter = tableData.filter(tableData => tableData.datetime === inputDate)
    //var inputCity = inputField.property("value").lowercase();
    //var filter = tableData.filter(tableData => tableData.datetime === inputDate) || tableData.filter(tableData => tableData.city === inputCity);
    pbody.html("");

    let response = {
        filter
    }

    if(response.filter.length !== 0) {
        addData(filter);
    }
        else {
            pbody.append("tr").append("td").text("No Sightings Here...Move On...");
        }
})
