require('dotenv').config({ path: `./config/.env` });
require('./strategies/google.ts');

import passport from "passport";
import authRoutes from "../routes/auth";
import morgan from "morgan";
import express from "express";
import { Request, Response } from "express";
var session = require('express-session');

const connectDB = require(`../config/db`);

const PORT = process.env.PORT || 5000;
const ENV_MODE = process.env.NODE_ENV || "development";

const generateRandomString = function(length : number) {
  let text = ''
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}


// connect to DB
connectDB();

const app = express();
//session middleware
app.use(session({
  secret: generateRandomString(16),
  name: "session",
  expires: new Date(Date.now() + (24 * 60 * 60 * 1000)),
}));

app.use(passport.initialize());

// // static files setup
// app.use(express.static("public"));

app.get('/dashboard', function(req : any, res : Response){
  if(req.session.passport){
    res.send(req.session.passport.user);
  } else {
    console.log("not authenticated")
    res.redirect('/');
  }
});

// morgan if development
if (ENV_MODE === "development") {
  app.use(morgan("dev"));
}

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
