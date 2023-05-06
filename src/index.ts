import { config } from "dotenv";
config();
import express from "express";
import authRoutes from "../routes/auth";
import passport from "passport";

require('./strategies/google');

var cookieParser = require('cookie-parser');

async function bootstrap() {
  const app = express();
  const PORT = process.env.PORT;

  app.use(cookieParser());
  app.use(passport.initialize());
  
  app.use("/api/auth", authRoutes);

  try {
    app.listen(PORT, () => console.log("running on port", PORT));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

bootstrap();
