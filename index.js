const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/solutions', (req, res) => {
    res.render('solutions');
})

app.get('/solution1', (req, res) => {
    res.render('solution1');
})

app.get("/findSpot", (req, res) => {
  // Get input data from query parameters (if provided)
  const loc1 = req.query.loc1;
  let city;
  let latFormatted;
  let lonFormatted;
  if (loc1) {
    city = loc1.split(",")[0].trim();
    console.log(city);
  } else {
    console.log("Input is undefined or empty.");
  }

  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=0c9b9b520d3756f68d2a160b1725dff7`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Assuming the first result contains the data you need
      const firstResult = data[0];
      if (firstResult) {
        const { lat, lon } = firstResult;
        latFormatted = parseFloat(lat).toFixed(4);
        lonFormatted = parseFloat(lon).toFixed(4);
        console.log(latFormatted);
        console.log(lonFormatted);
      } else {
        console.log("No data found for the city");
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

  // Render the EJS template with input data
  res.render("findSpot", { latFormatted, lonFormatted, jsonData: { lat: latFormatted, lon: lonFormatted } });
});



app.post("/findSpot", (req, res) => {
  const loc1 = req.body.loc1;

  // Redirect to the GET route with input data as query parameters
  res.redirect(`/findSpot?loc1=${loc1}`);
});

app.get("/solution2", (req, res) => {
  res.render("solution2");
});

app.get("/addSpot", (req, res) => {
  res.render("addSpot");
});

app.get("/solution3", (req, res) => {
  res.render("solution3");
});

app.get("/aboutUs", (req, res) => {
  res.render("aboutUs");
});

app.get("/contactUs", (req, res) => {
  res.render("contactUs");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
