import dotenv from "dotenv";
import app from "./app";
import "./database";

function main() {
  dotenv.config();
  app.listen(app.get("port"));
  console.log("Server on port ", app.get("port"));
}

main();
