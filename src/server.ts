import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(8001, () => console.log("Server is running in port 8001"));
