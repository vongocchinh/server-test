let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

const Route = require("./router/router");
const RouteUser = require("./router/router_2");
const dbConfig = require("./database/db");
mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://ngocchinh1410:chinhchinh14102000@cluster0.pboyd.mongodb.net/blog",
    {
      useNewUrlParser: true,
    }
  )
  .then(
    () => {
      console.log("Database sucessfully connected!");
    },
    (error) => {
      console.log("Could not connect to database : " + error);
    }
  );
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/user", Route);
app.use("/contact", RouteUser);
const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
// localhost:27017
// // 404 Error
// app.use((req, res, next) => {
//   next(createError(404));
// });

// app.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
// });
