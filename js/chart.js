// code for chart one
const data = [15, 35, 42, 25, 10, 66, 45, 80, 35, 42, 32, 18];

// Create an SVG container for the chart
const svgWidth = 7 * 16; // 7rem converted to pixels
const svgHeight = 3 * 16; // 4rem converted to pixels
const barPadding = 5;
const svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Create the bars
svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * (svgWidth / data.length))
  .attr("y", svgHeight)
  .attr("width", svgWidth / data.length - barPadding)
  .attr("height", 0)
  .attr("fill", "#7388EB")
  .on("mouseover", function (event, d) {
    // Show the data as a tooltip on hover
    const xPos =
      parseFloat(d3.select(this).attr("x")) + svgWidth / data.length / 2;
    const yPos = parseFloat(d3.select(this).attr("y")) - 10;
    d3.select("#tooltip")
      .attr("x", xPos)
      .attr("y", yPos)
      .text(d)
      .style("display", "block"); // Show the tooltip
  })
  .on("mouseout", function () {
    // Hide the tooltip on mouseout
    d3.select("#tooltip").style("display", "none");
  })
  .transition()
  .duration(1000)
  .attr("y", (d) => svgHeight - d)
  .attr("height", (d) => d);

const data2 = [50, 30, 60, 45, 75, 55, 40, 30, 12, 40, 20, 60];

// Create an SVG container for the second chart
const svgWidth2 = 7 * 16; // 7rem converted to pixels
const svgHeight2 = 3 * 16; // 4rem converted to pixels
const barPadding2 = 5;
const svg2 = d3
  .select("#chart2")
  .append("svg")
  .attr("width", svgWidth2)
  .attr("height", svgHeight2);

// Create the bars for the second chart
svg2
  .selectAll("rect")
  .data(data2)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * (svgWidth2 / data2.length))
  .attr("y", svgHeight2)
  .attr("width", svgWidth2 / data2.length - barPadding2)
  .attr("height", 0)
  .attr("fill", "#EBC077") // Change the color for the second chart
  .on("mouseover", function (event, d) {
    // Show the data as a tooltip on hover
    const xPos =
      parseFloat(d3.select(this).attr("x")) + svgWidth2 / data2.length / 2;
    const yPos = parseFloat(d3.select(this).attr("y")) - 10;
    d3.select(this)
      .append("text")
      .attr("class", "tooltip")
      .attr("x", xPos)
      .attr("y", yPos)
      .text(d)
      .style("display", "block"); // Show the tooltip
  })
  .on("mouseout", function () {
    // Hide the tooltip on mouseout
    d3.select(".tooltip").remove();
  })
  .transition()
  .duration(1000)
  .attr("y", (d) => svgHeight2 - d)
  .attr("height", (d) => d);

//progressbar
var rating = [80];
var ratingBar = document.querySelectorAll(".js-rating-progress");

document.querySelector(
  ".walk-container .js-rating-progress"
).style.strokeDashoffset = 100 - rating[0];

for (i = 0; i < ratingBar.length; i++) {
  if (rating[i] <= 50) {
    ratingBar[i].classList.add("over-75");
  }
  if (50 < rating[i] && rating[i] <= 75) {
    ratingBar[i].classList.add("over-75");
  }
  if (75 < rating[i]) {
    ratingBar[i].classList.add("over-75");
  }
}

var ratingtwo = [70];
var ratingBar = document.querySelectorAll(".js-rating-progress-two");

document.querySelector(
  ".walk-container .js-rating-progress-two"
).style.strokeDashoffset = 100 - ratingtwo[0];

for (i = 0; i < ratingBar.length; i++) {
  if (ratingtwo[i] <= 50) {
    ratingBar[i].classList.add("over-70");
  }
  if (50 < ratingtwo[i] && ratingtwo[i] <= 75) {
    ratingBar[i].classList.add("over-70");
  }
  if (75 < ratingtwo[i]) {
    ratingBar[i].classList.add("over-70");
  }
}
