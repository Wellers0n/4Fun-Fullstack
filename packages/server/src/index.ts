import "@babel/polyfill";
import { createServer } from "http";

import app from "./server";
import connectDatabase from "./database";
import console = require("console");

(async () => {
  try {
    await connectDatabase();
  } catch (error) {
    console.log('teste');
    console.log('teste')

    console.log("Could not connect to database", { error });
    throw error;
  }

  const server = createServer(app.callback());

  server.listen(5000, () => {
    return console.log(
      `SERVER ON: http://localhost:${process.env.PORT || 5000}/graphql`
    );
  });
})();

