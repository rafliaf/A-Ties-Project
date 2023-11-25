const express = require("express");
const cors = require("cors");
// const routes = require("./routes");
require("./db/mongodb");

const acRoute = require("./routes/acRoute");
const maintenanceRoute = require("./routes/maintenanceRoute");
const notificationRoute = require("./routes/notificationRoute");
const reportRoute = require("./routes/reportRoute");
const roomRoute = require("./routes/roomRoute");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes
// app.use(routes);
app.use("/acs", acRoute);
app.use("/maintenance", maintenanceRoute);
app.use("/notification", notificationRoute);
app.use("/report", reportRoute);
app.use("/rooms", roomRoute);

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}/`);
});
