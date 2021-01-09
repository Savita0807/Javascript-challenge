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
 var input_date = d3.select('#datetime');
 var input_city = d3.select('#city');
 var input_state = d3.select('#state');
 var input_country = d3.select('#country');
 var input_shape = d3.select('#shape');

 // Get the value property of the input element   
 var date_par = input_date.property("value");
 var city_par = input_city.property("value");
 var state_par = input_state.property("value");
 var country_par = input_country.property("value");
 var shape_par = input_shape.property("value");

 var selected_data = tableData; 

 if (date_par != "")
 {
   selected_data = selected_data.filter(selected_data => selected_data.datetime == date_par);
 };

 if (city_par != "")
 {
    selected_data = selected_data.filter(selected_data => selected_data.city == city_par);
 };

 if (state_par != "")
 {
    selected_data = selected_data.filter(selected_data => selected_data.state == state_par);
 };

 if (country_par != "")
 {
    selected_data = selected_data.filter(selected_data => selected_data.country == country_par);
 };

 if (shape_par != "")
 {
    selected_data = selected_data.filter(selected_data => selected_data.shape == shape_par);
 };
//  console.log(selected_data);
 if (selected_data.length > 0)
   {     
        tbody.html("");  
        d3.select(".Msg-line").text("");
        selected_data.forEach(element => {
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
   button.on("click",runEnter);
