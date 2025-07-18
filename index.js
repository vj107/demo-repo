// creation of a http server
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
//middlewares
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("<b>Hello World!</b>");
});
app.post("/conversations", function (req, res) {
  // console.log(req.body);
  // // console.log(req.headers);
  // res.send({
  //   msg: "2+2=4",
  // });
  const message=req.query.message;
  console.log(message);
});
app.listen(port,function(){
  console.log("Listening to the port",port);
});
