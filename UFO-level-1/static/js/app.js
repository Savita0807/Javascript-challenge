// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

//Load the data at intial page load
tableData.forEach(element => {
    var trow= tbody.append("tr");
    Object.entries(element).forEach(([key,value]) => {
        trow.append("td").text(value);
    });
});

// Load UFO information when date is entered
runEnter=() => {

// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var input_date = d3.select('#datetime')
var date_par = input_date.property("value");

// Use the form input to filter the data by seleted date
Select_data=(tableData)=>{
    return tableData.datetime == date_par 
  };
  var selected_datetime = tableData.filter(Select_data);
  if (selected_datetime != "")
   {     
        tbody.html("");  
        d3.select(".Msg-line").text("");
        selected_datetime.forEach(element => {
         var trow= tbody.append("tr");
         Object.entries(element).forEach(([key,value]) => {
         trow.append("td").text(value);
        });
      });
   }
  else  
  {
    tbody.html("");  
    d3.select(".Msg-line").text("Data not avalible for selected date");   
  };
};

// Create event handlers
button.on("click", runEnter);