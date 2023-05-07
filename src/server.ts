import { config } from "dotenv";
import express from "express";
import authRoutes from "../routes/auth";
import passport from "passport";
const morgan = require("morgan");
const connectDB = require(`../config/db`); 
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 5000;
const ENV_MODE = process.env.NODE_ENV || "development";

// load config from config file
config({ path: `./config/.env` });

// connect to DB
connectDB();

const app = express();

// morgan if development
if (ENV_MODE === "development") {
  app.use(morgan("dev"));
}

// static files setup
app.use(express.static("public"));

// Handlebars
app.engine('.hbs',  exphbs( {extname: '.hbs'} ));
app.set('view engine', '.hbs');

app.use(passport.initialize());

try {
  app.listen(PORT, () => console.debug(`Running in ${ENV_MODE} mode on port ${PORT}.`));
} catch (error) {
  console.log(error);
  process.exit(1);
}

app.get("/", (req, res) => {
  res.render("index");
});

// routers 
app.use("/api/auth", authRoutes);