const express = require("express"); //imports entire express library
const app = express(); //creates app object, houses our server instructions
const port = process.env.PORT || 5001;
//add things to app before asking it to listen
app.use("/static",express.static("public"));
//tells app to use public folder, when a request is made to /static

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
//listening on local host 5001 for requests to our web server
