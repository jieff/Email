const express = require("express");
require("dotenv").config();

const app = express();

// Middleware para análise de corpo JSON
app.use(express.json());

// Importar as rotas do arquivo ./routes/email.js
const emailRoutes = require("./routes/email");
app.use(emailRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
