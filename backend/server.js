const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/mailRoutes");

dotenv.config(); // Charge les variables d'environnement à partir du fichier .env

const app = express();

const cors = require("cors");
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors());
app.use(express.json());

app.use("/email", emailRoutes);
app.use("/api/register", require('./routes/registerRoutes.js'));
app.use("/api/login", require('./routes/loginRoutes.js'));


const PORT = process.env.PORT || 3000; // Utilisez la variable d'environnement PORT ou utilisez 3000 par défaut
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});