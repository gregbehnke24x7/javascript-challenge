// from data.js
var tableData = data;

// view the data in the console
console.log(tableData);

// variables
var pbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var inputFieldState = d3.select("#state");
var inputFieldCountry = d3.select("#country");
var inputFieldShape = d3.select("#shape");

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

// create event listener for filter button clickiness
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

    // state filter elements
    var inputState = inputFieldState.property("value").toLowerCase().trim();
    console.log(inputState)
    var stateFilter = tableData.filter(tableData => tableData.state === inputState);

    // state filter elements
    var inputCountry = inputFieldCountry.property("value").toLowerCase().trim();
    console.log(inputCountry)
    var countryFilter = tableData.filter(tableData => tableData.state === inputCountry);

    // shape filter elements
    var inputShape = inputFieldShape.property("value").toLowerCase().trim();
    console.log(inputShape)
    var shapeFilter = tableData.filter(tableData => tableData.shape === inputShape);

    pbody.html("");

    // react to filter on date input
    let responseDate = {
        dateFilter
    }
    // react to filter on city input
    let responseCity = {
        cityFilter
    }
    // react to filter on state input
    let responseState = {
        stateFilter
    }
    // react to filter on country input
    let responseCountry = {
        countryFilter
    }
    // react to filter on shape input
    let responseShape = {
        shapeFilter
    }

    // handle date filter first
    if(responseDate.dateFilter.length !== 0) {
        addData(dateFilter);
    }
    // handle city filter
    else if(responseCity.cityFilter.length !== 0) {
        addData(cityFilter);
    }
    // handle state filter
    else if(responseState.stateFilter.length !== 0) {
        addData(stateFilter);
    }
    // handle country filter
    else if(responseCountry.countryFilter.length !== 0) {
        addData(countryFilter);
    }
    // handle shape filter
    else if(responseShape.shapeFilter.length !== 0) {
        addData(shapeFilter);
    }
    // if no results returned
    else {
        pbody.append("tr").append("td").text("No Sightings Here...Move On...");
    }
})
