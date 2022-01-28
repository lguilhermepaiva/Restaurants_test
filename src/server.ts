import "dotenv/config";
import express from "express";
import routes from "./routes";
import Database from "./database";
import cors from "cors";
import { getUnixTime } from "date-fns";

async function build() {
  await Database.init();

  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(routes);

  app.listen(3333, () => {
    console.log("Server is started", getUnixTime(Date.now()));
  });
}

build();
