// from data.js
var tableData = data;

// YOUR CODE HERE

d3.select('tbody')
    .selectAll('tr')
    .data(tableData)
    .enter()
    .append('tr')
    .html(function (d) {
        return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.duationMinutes}</td><td>${d.comments}</td>`;
    });

var searchDate = d3.select("#filter-btn").on("click", function () {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputDate = inputElement.property('value');

    console.log(inputDate);
    console.log(tableData);

    var dates = tableData.filter(ufo => ufo.datetime === inputDate);

    console.log(dates);

    d3.select('tbody')
        .selectAll('tr')
        .data([])
        .exit()
        .remove()
    
    d3.select('tbody')
        .selectAll('tr')
        .data(dates)
        .enter()
        .append('tr')
        .html(function (dates) {
            return `<td>${dates.datetime}</td><td>${dates.city}</td><td>${dates.state}</td><td>${dates.country}</td><td>${dates.shape}</td><td>${dates.duationMinutes}</td><td>${dates.comments}</td>`;
        });
});