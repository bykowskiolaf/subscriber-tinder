require('dotenv').config({ path: `./config/.env` });
import express from "express";
import passport from "passport";
import { engine } from 'express-handlebars';
import authRoutes from "../routes/auth";
import indexRoutes from "../routes/index";
const morgan = require("morgan");
const connectDB = require(`../config/db`);

const PORT = process.env.PORT || 5000;
const ENV_MODE = process.env.NODE_ENV || "development";

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
app.engine(".hbs", engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use(passport.initialize());

try {
  app.listen(PORT, () =>
    console.debug(`Running in ${ENV_MODE} mode on port ${PORT}.`)
  );
} catch (error) {
  console.log(error);
  process.exit(1);
}

// routers
app.use("/api/auth", authRoutes);
app.use("/", indexRoutes);
