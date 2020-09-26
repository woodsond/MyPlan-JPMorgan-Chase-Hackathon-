// tslint:disable-next-line: no-var-requires
require("dotenv").config({ path: "../.env" });
import bodyParser from "body-parser";
import express, { NextFunction, Response, Request } from "express";
import { hello } from "./routes/hello";

const serverHost = process.env.REACT_APP_SERVER_HOST || "";
const serverPort = process.env.REACT_APP_SERVER_PORT || "";
export const environment: string = process.env.ENVIRONMENT || "";

const app = express();

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  if (process.env.ENVIRONMENT !== "production") {
    res.header("Access-Control-Allow-Origin", "*");
  }
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Authorization, Accept"
  );
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.post("/hello", hello);

const server = app.listen(serverPort);

const gracefulShutdown = () => {
  // tslint:disable-next-line:no-console
  console.log("Received kill signal, shutting down gracefully.");
  server.close(() => {
    // tslint:disable-next-line:no-console
    console.log("Closed out remaining connections.");
    process.exit(0);
  });
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
