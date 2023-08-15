const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const emailRoutes = require("./routes/email");
app.use(emailRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
