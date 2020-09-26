// tslint:disable-next-line: no-var-requires
require("dotenv").config({ path: "../.env" });
import bodyParser from "body-parser";
import express, { NextFunction, Response, Request } from "express";
import { setupDb } from './connectors';
import { creditCards } from "./routes/creditCards";
import { articles } from "./routes/articles";
import { piggyBank } from "./routes/piggyBank";
import { login, verifyToken } from "./routes/login";

const serverPort = process.env.REACT_APP_SERVER_PORT || "";
export const environment: string = process.env.ENVIRONMENT || "";

const app = express();

setupDb();

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

app.use((req, res, next) => {
  if (req.originalUrl === "/login") {
    next();
    return;
  }
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).send("User has no token!");
    return;
  }

  const t = token.substring(7);

  try {
    const verifiedToken = verifyToken(t) as {
      facilityId: string;
      facilityEmail: string;
      facilityPermissions: string;
    };
    req.headers.facilityId = verifiedToken.facilityId;
    req.headers.facilityEmail = verifiedToken.facilityEmail;
    req.headers.facilityPermissions = `${verifiedToken.facilityPermissions}`;
  } catch (err) {
    res.status(401).send(err.toString());
    return;
  }

  next();
});

app.post("/creditCards", creditCards);
app.post("/articles", articles);
app.post("/piggyBank", piggyBank);
app.post("/login", login);

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
