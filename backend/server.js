const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const emailRoute = require("./routes/mailRoutes");
const registerRoute = require('./routes/registerRoutes');
const loginRoute = require('./routes/loginRoutes')

dotenv.config(); // Charge les variables d'environnement à partir du fichier .env

const app = express();

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_URL, options)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error Connecting to MongoDB', error);
    });

const cors = require("cors");
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/email", emailRoute);
app.use("/register", registerRoute);
app.use("/login", loginRoute);


const PORT = process.env.PORT; // Utilisez la variable d'environnement PORT ou utilisez 3000 par défaut
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});