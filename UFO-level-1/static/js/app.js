// from data.js
var tableData = data;


//create table
var tbody = d3.select("tbody");


table = data.forEach((response) => {
    var row = tbody.append("tr");
    Object.entries(response).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});



//filter data
var buttton = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

//function to trigger
buttton.on("click", function(){
    console.log("button clicked");

    tbody.html("")

    console.log(d3.event.target);
    
    var inputData = inputField.property("value");

    console.log(inputData);

    var inputDate = tableData.filter(function(event){
        return event.datetime === inputData
    });

    console.log(inputDate);

    inputDate.forEach(function(filterdata){

        console.log(filterdata);

        var row = tbody.append("tr");
        Object.entries(filterdata).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

});


