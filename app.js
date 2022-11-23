import express from "express";
import http from "http";

import router from "./routers/index.js";
import {init} from "./db/mongodb.js";

await init();

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", router);

const server = http.createServer(app);

server.listen(PORT, () => console.log("Server is running in http://localhost:8080/"));